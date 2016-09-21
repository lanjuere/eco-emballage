var angular = require('angular');
require('bootstrap/dist/css/bootstrap.css');
require('angular-animate');
require('angular-touch');
// require('angular-ui-bootstrap');
var views = require('./app/views/views');

angular.module('declaration', [views]);
// angular.module('declaration', ['ui.bootstrap', views]);
