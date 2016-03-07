'use strict';

angular.module('bookingSystemApp.auth', [
  'bookingSystemApp.constants',
  'bookingSystemApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
