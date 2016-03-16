'use strict';

angular.module('bookingSystemApp')
  .factory('RoomService', function($resource) {
    return $resource('/api/Rooms/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }

    });
  });
