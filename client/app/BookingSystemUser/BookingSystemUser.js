'use strict';

angular.module('bookingSystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('BookingSystemUser', {
        url: '/BookingSystemUser',
        templateUrl: 'app/BookingSystemUser/BookingSystemUser.html',
        controller: 'BookingSystemUserCtrl'
      });
  });
