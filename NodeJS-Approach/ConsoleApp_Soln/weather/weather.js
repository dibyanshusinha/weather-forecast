const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.openweathermap.org/data/2.5/forecast?${zip},${country}&appid=d8c207ec1bc2b9b60b10802a68b7cda4`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to API server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
