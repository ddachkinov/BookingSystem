'use strict';

angular.module('bookingSystemApp')
  .controller('RoomCtrl', function($scope, RoomService) {
    $scope.message = 'Hello12';

    RoomService.query(function(RoomQuery) {
      $scope.Rooms = RoomQuery;

    });

    $scope.deleteRoom = function(Room) {
      console.log("SAdasdsad");
      RoomService.delete({
        id: Room._id
      });
    }

    $scope.UpdateRoomNumber = function(Room) {
      console.log("klik");
      RoomService.update({
        id: Room._id

      }, Room);
    }

  });
