'use strict';

angular.module('bookingSystemApp')
  .controller('RoomCtrl', function($scope, $state, RoomService, Auth) {
    $scope.isAuthenticated = Auth.isLoggedIn;
    

    RoomService.query(function(RoomQuery) {
      $scope.Rooms = RoomQuery;

    });

    $scope.goToBooking = function(room) {

      $state.go('bookingdetails', {
        id: room._id,

      });
    };


  });
