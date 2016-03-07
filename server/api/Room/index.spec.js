'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var RoomCtrlStub = {
  index: 'RoomCtrl.index',
  show: 'RoomCtrl.show',
  create: 'RoomCtrl.create',
  update: 'RoomCtrl.update',
  destroy: 'RoomCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var RoomIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './Room.controller': RoomCtrlStub
});

describe('Room API Router:', function() {

  it('should return an express router instance', function() {
    RoomIndex.should.equal(routerStub);
  });

  describe('GET /api/Rooms', function() {

    it('should route to Room.controller.index', function() {
      routerStub.get
        .withArgs('/', 'RoomCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/Rooms/:id', function() {

    it('should route to Room.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'RoomCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/Rooms', function() {

    it('should route to Room.controller.create', function() {
      routerStub.post
        .withArgs('/', 'RoomCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/Rooms/:id', function() {

    it('should route to Room.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'RoomCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/Rooms/:id', function() {

    it('should route to Room.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'RoomCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/Rooms/:id', function() {

    it('should route to Room.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'RoomCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
