const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a : {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
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
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv; 

geocode.geocodeAddress(argv.address, argv.key, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, argv.unit, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});

