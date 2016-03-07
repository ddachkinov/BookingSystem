'use strict';

var app = require('../..');
import request from 'supertest';

var newRoom;

describe('Room API:', function() {

  describe('GET /api/Rooms', function() {
    var Rooms;

    beforeEach(function(done) {
      request(app)
        .get('/api/Rooms')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Rooms = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      Rooms.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/Rooms', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/Rooms')
        .send({
          name: 'New Room',
          info: 'This is the brand new Room!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRoom = res.body;
          done();
        });
    });

    it('should respond with the newly created Room', function() {
      newRoom.name.should.equal('New Room');
      newRoom.info.should.equal('This is the brand new Room!!!');
    });

  });

  describe('GET /api/Rooms/:id', function() {
    var Room;

    beforeEach(function(done) {
      request(app)
        .get('/api/Rooms/' + newRoom._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Room = res.body;
          done();
        });
    });

    afterEach(function() {
      Room = {};
    });

    it('should respond with the requested Room', function() {
      Room.name.should.equal('New Room');
      Room.info.should.equal('This is the brand new Room!!!');
    });

  });

  describe('PUT /api/Rooms/:id', function() {
    var updatedRoom;

    beforeEach(function(done) {
      request(app)
        .put('/api/Rooms/' + newRoom._id)
        .send({
          name: 'Updated Room',
          info: 'This is the updated Room!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRoom = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRoom = {};
    });

    it('should respond with the updated Room', function() {
      updatedRoom.name.should.equal('Updated Room');
      updatedRoom.info.should.equal('This is the updated Room!!!');
    });

  });

  describe('DELETE /api/Rooms/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/Rooms/' + newRoom._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when Room does not exist', function(done) {
      request(app)
        .delete('/api/Rooms/' + newRoom._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
