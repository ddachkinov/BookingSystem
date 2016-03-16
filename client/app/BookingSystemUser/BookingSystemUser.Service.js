'use strict';

angular.module('bookingSystemApp')
.factory('BookingSystemUser2', function($resource)
{
    return $resource('/api/Rooms');
});
