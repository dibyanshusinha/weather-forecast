const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const axios = require('axios');
//const validator = require('validator'); //not a requirement, for future usecase


var path = require('path');
const fs = require('fs');
require('./config/config');

const app = express();
const port = process.env.PORT;


hbs.registerPartials(__dirname+ '/views/partials');

app.set('view engine', 'hbs');

//I don't want my logger to log requests for assets too..
app.use('/assets',express.static(path.join(__dirname + '/assets')));



//A midleware To log requests

app.use((req, res, next)=>{
  const now = new Date().toString();

  const log = `${now}: ${req.method} ${req.url}`;

  fs.appendFile('server.log', log + '\n' , (err) => {
    if (err) throw err;
    console.log(log);
  });

  next();
});


// Enable CORS from client-side
// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
// 	res.header("Access-Control-Allow-Credentials", "true");
// 	next();
// });


app.use(bodyParser.json());



app.post('/fetchWeather', (req, res) => {
  //console.log(req.body);
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${req.body.zip}&appid=${process.env.APPAPIKEY}`;

  async function fetch () {
    try {
      let response = await axios.get(apiUrl);

      //Hack: for error with Type-Circular
      response = response.data;

      if(response.cod === "200"){
        res.send(response);
      }
    } catch (e) {
      res.status(400).send("Can't find the city");
    }
  }

  fetch();


  //Using Promises

  // axios.get(apiUrl).then((response) =>{
  //   // if (response.data.status === 'NO_RESULTS') {
  //   //   throw new Error('Unable to find that address.');
  //   // }
  //   res.send(response);
  // }).catch((e) => {
  //   console.log(e);
  // });


//   //Using Vanilla JS
//   var request = new XMLHttpRequest();
// request.open('GET', '/api/content', true);
//
// request.onload = function() {
//     if (this.status >= 200 && this.status < 400) {
//         var data = JSON.parse(this.response);
//     } else {
//         console.error('Response received and there was an error');
//     }
// };
//
// request.onerror = function() {
//     console.error('Request error');
// };
//
// request.send();

});

// app.use((req, res, next) =>{
//   res.render('maintainance.hbs')
// })

app.use(express.static(path.join(__dirname, 'public')));


let partials = require('./views/partialhelpers/helper');

app.get('/hello', (req, res) =>{
  res.render('about.hbs',{
    title: 'some Title'
  });
});
app.listen(port, ()=>{
  console.log(`Started up at localhost port ${port} open http://127.0.0.1:3000/`);
});

//Cache-Control
// function setCustomCacheControl (res, path) {
//   if (serveStatic.mime.lookup(path) === 'text/html') {
//     // Custom Cache-Control for HTML files
//     res.setHeader('Cache-Control', 'public, max-age=0')
//   }
// }

//For Testing purpose
module.exports = {app};
