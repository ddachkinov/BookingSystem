'use strict';

angular.module('bookingSystemApp')
  .controller('BookingSystemUserCtrl', function ($scope, BookingSystemUser2) {
    $scope.hejsaMsg = 'Hejsa';

    BookingSystemUser2.query(function(BookingTest)
      {
          $scope.Rooms = BookingTest;
          console.log('BookingTest', BookingTest);
      });
  });
