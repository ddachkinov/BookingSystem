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



    // $scope.deleteRoom = function(Room) {
    //   console.log("SAdasdsad");
    //   RoomService.delete({
    //     id: Room._id
    //   });
    // }
    //
    // $scope.UpdateRoomNumber = function(Room) {
    //   console.log("klik");
    //   RoomService.update({
    //     id: Room._id
    //
    //   }, Room);
    // }

  });
