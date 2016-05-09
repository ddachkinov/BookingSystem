'use strict';

angular.module('BookingSystemApp')
  .controller('RoomDetailsCtrl', function ($scope, $state)
  {

    Room.get({name:$stateParams.name}, function(room) {
    $scope.room = room;
  });

    $scope.goBack = function(){
    window.history.back();
  };
  });
