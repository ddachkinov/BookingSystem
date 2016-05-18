'use strict';

angular.module('bookingSystemApp')
  .controller('RoomDetailsCtrl', function($scope, $state, RoomService, $stateParams, $mdDialog, $mdToast,) {

    RoomService.get({
      id: $stateParams.id
    }, function(room) {
      $scope.room = room;
      console.log(room);
    });

    $scope.goBack = function() {
      window.history.back();
    };

    $scope.updateBooking = function(booking) {
      $scope.updatingBooking = booking;
    };

    $scope.deleteBooking = function(bookings, event){
      var confirm = $mdDialog.confirm()
        .title('Slet booking')
        .textContent('Er du sikker på at den valgte booking skal slettes?')
        .ariaLabel('Delete')
        .targetEvent(event)
        .openFrom('#left')
        .ok('Slet Booking')
        .cancel('Nej, slet IKKE denne booking');
        $mdDialog.show(confirm).then(function(){
        _.remove($scope.room.bookings, function(bookings){
       return bookings._id === $scope.updatingBooking._id;
      });

      RoomService.update({
        id: $scope.room._id
      }, $scope.room, function(room){
        $scope.room = room;
        var toast = $mdToast.simple()
            .textContent('Booking Deleted')
            .action('OK')
            .highlightAction(false)
            .position('top');
          $mdToast.show(toast);
          $scope.updatingBooking = undefined;
      });
    });
  };

  });
