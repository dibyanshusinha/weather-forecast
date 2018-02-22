
/***
**
**
** For Further Inprovements
**
***/




const request = require('request');

// Using plain call backs

//  const geocodeAddress = (address, callback) => {
//   const encodedAddress = encodeURIComponent(address);
//
//   request({
//     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//     json: true
//   }, (error, response, body) => {
//     if (error) {
//       callback('Unable to connect to Google servers.');
//     } else if (body.status === 'ZERO_RESULTS') {
//       callback('Unable to find that address.');
//     } else if (body.status === 'OK') {
//       callback(undefined, {
//         address: body.results[0].formatted_address,
//         latitude: body.results[0].geometry.location.lat,
//         longitude: body.results[0].geometry.location.lng
//       });
//     }
//   });
// };

//Using Promises

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};




// geocodeAddress('00000').then((location) => {
//   console.log(JSON.stringify(location, undefined, 2));
// }, (errorMessage) => {
//   console.log(errorMessage);
// });





module.exports.geocodeAddress = geocodeAddress;
