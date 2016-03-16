'use strict';

describe('Controller: BookingSystemUserCtrl', function () {

  // load the controller's module
  beforeEach(module('bookingSystemApp'));

  var BookingSystemUserCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookingSystemUserCtrl = $controller('BookingSystemUserCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
