const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a : {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
      default: '95113'
    },
    k: {
      demand: true,
      alias: 'key',
      describe: 'Google API key',
      string: true
    },
    u: {
      demand: true,
      alias: 'Unit',
      describe: 'Weather Units can be si or us',
      string: true,
      default: 'us'
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}&key=${encodeURIComponent(argv.key)}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/545f461b399aaf39f35d0bcaa4803d1a/${lat},${lng}?units=${argv.unit}`
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers')
  } else {
    console.log(e.message);
  }
});
