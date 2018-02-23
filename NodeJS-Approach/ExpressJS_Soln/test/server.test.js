require('./../config/config');

const expect = require('expect');
const request = require ('supertest');


const {app} = require('./../server');
const {dosomething} = require('./seed/seed');



beforeEach(dosomething);


describe('DEMO description', () =>{


  //Few Test Cases



  it("should return user data at /hello", (done) =>{
    request(app)
    .get('/hello')
    .expect(200)
    .end(done);
  })

  it("should return user data at /somexyz", (done) =>{
    request(app)
    .get('/somexyz')
    .expect(404)
    .end(done);
  })

});

// describe('Fetch weather data', () =>{
//
//
//   //Few Test Cases
//
//
//
//   it("should return user data at /hello", (done) =>{
//     request(app)
//     .post('/hello')
//     .expect(200)
//     .end(done);
//   })
//
// });

//TODO NEW CASE
