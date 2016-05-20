'use strict';

angular.module('bookingSystemApp')
  .controller('RoomDetailsCtrl', function($scope, $state, RoomService, $stateParams, $mdDialog, $mdToast ) {

    RoomService.get({
      id: $stateParams.id
    }, function(room) {
      $scope.room = room;
      _(room.bookings).forEach(a => a.arrivalDate = new Date(a.arrivalDate));
      _(room.bookings).forEach(d => d.depatureDate = new Date(d.depatureDate));
      console.log(room);
    });

    $scope.goBack = function() {
      window.history.back();
    };

    $scope.editBooking = function(booking) {
      $scope.updatingBooking = booking;
    };

    $scope.deleteBooking = function(booking, event) {
      var confirm = $mdDialog.confirm()
        .title('Slet booking')
        .textContent('Er du sikker på at den valgte booking skal slettes?')
        .ariaLabel('Delete')
        .targetEvent(event)
        .openFrom('#left')
        .ok('Slet Booking')
        .cancel('Nej, slet IKKE denne booking');
      $mdDialog.show(confirm).then(function() {
        _.remove($scope.room.bookings, function(bookingFromArray) {
          return booking._id === bookingFromArray._id;
        });
        $scope.room.rented = false;
        RoomService.update({
          id: $scope.room._id
        }, $scope.room, function(room) {
          $scope.room = room;
          var toast = $mdToast.simple()
            .textContent('Booking Deleted')
            .action('OK')
            .highlightAction(false)
            .position('buttom');
          $mdToast.show(toast);
          room.rented == false;
          $scope.updatingBooking = undefined;
        });
      });
    };

    $scope.updateBooking = function() {
      RoomService.update({
        id: $scope.room._id
      }, $scope.room, function(room) {
        $scope.room = room;
      });
    };

    $scope.newBooking = {};

    $scope.addBooking = function(form){
      if (form.$valid) {
        $scope.room.bookings.push($scope.newBooking);
        $scope.room.rented = true;
        RoomService.update({
          id: $scope.room._id
        }, $scope.room, function(room) {
          $scope.room = room;
        });
        }
    };


  });
