const request = require('request');


const getWeather = (address) => {

  const encodedAddress = encodeURIComponent(address);

  return new Promise((resolve, reject) => {

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${encodedAddress}&appid=d8c207ec1bc2b9b60b10802a68b7cda4`;

    request({
      url: apiUrl,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect');
      } else {
        if (body.cod === '404') {
          reject('Unable to find that address.');
        } else if (body.cod === '200' || body.cod === '301') {
          resolve({
            data: body
          });
        }
      }
    });
  });
};


module.exports.getWeather = getWeather;
