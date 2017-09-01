process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
let homeResource = require('../api/HomeResource');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

let should = chai.should();
chai.use(chaiHttp);

describe('Root resource', () => {
  beforeEach((done) =>  {
    done()
  });
  describe('GET /', () => {
    it('should have all the home resources', (done) => {
      chai.request(server).get('/').end((err, response) => {
        response.should.have.status(200);
        // response.body.should.be.
        done();
      });
    })
  });

  describe('GET /ping', () => {

  });
});