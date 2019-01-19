const request = require('request');
var getWeather = (lat, lng, unit, callback) => {
  request({
    url: `https://api.darksky.net/forecast/545f461b399aaf39f35d0bcaa4803d1a/${lat},${lng}?units=${unit}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
      //console.log(response.statusCode);
    }
    // console.log(JSON.stringify(body, undefined, 2));
    // console.log(body.currently.temperature);
  });
};

module.exports.getWeather = getWeather;

