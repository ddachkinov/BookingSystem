'use strict';

angular.module('bookingSystemApp')
  .controller('RoomDetailsCtrl', function($scope, $state, RoomService, $stateParams) {

      RoomService.get({
        id: $stateParams.id
      }, function(room) {
        $scope.room = room;
        console.log(room);
      });

      $scope.goBack = function(){
        window.history.back();
      };
    });
