'use strict';

angular.module('bookingSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Room', {
        url: '/Room',
        templateUrl: 'app/Room/Room.html',
        controller: 'RoomCtrl'
      })
      .state('bookingdetails', {
        url: '/Room/:id',
        templateUrl: 'app/Room/Room-details.html',
        controller: 'RoomDetailsCtrl'
      });
  });
