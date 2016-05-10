'use strict';

angular.module('bookingSystemApp')
  .controller('RoomCtrl', function($scope, $state, RoomService) {
    $scope.message = 'Hello12';

    RoomService.query(function(RoomQuery) {
      $scope.Rooms = RoomQuery;

    });

    $scope.goToBooking = function(room) {

      $state.go('bookingdetails', {
        id: room._id,

      });
    };


  });
