'use strict';

angular.module('bookingSystemApp')
  .controller('RoomDetailsCtrl', function($scope, $state, RoomService, $stateParams, $mdDialog) {

    RoomService.get({
      id: $stateParams.id
    }, function(room) {
      $scope.room = room;
      console.log(room);
    });

    $scope.goBack = function() {
      window.history.back();
    };

    $scope.updateBooking = function(room) {
      $scope.updateBooking = room;
    };


    $scope.deleteBooking = function(room, event) {
      var confirm = $mdDialog.confirm()
        .title('Slet booking')
        .textContent('Er du sikker på at den valgte booking skal slettes?')
        .ariaLabel('Delete')
        .targetEvent(event)
        .openFrom('#left')
        .ok('Slet Booking')
        .cancel('Nej, slet IKKE denne Booking');
      $mdDialog.show(confirm).then(function() {
        _.remove($scope.room.Bookings, function(booking) {
          return booking._id === $scope.updateBooking._id;
        });
        RoomService.update({
          id: $scope.room._id
        }, $scope.room, function(room) {
          $scope.room = room;
          // var toast = $mdToast.simple()
          //   .textContent('Weekplan Deleted')
          //   .action('OK')
          //   .highlightAction(false)
          //   .position('top');
          // $mdToast.show(toast);
          //$scope.updateBooking = undefined;
        });
      });
    };
  });
