require('angular');
require('bootstrap/dist/css/bootstrap.css');

require('angular-sanitize');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-translate');
require('bootstrap-toggle');
require('bootstrap-toggle/css/bootstrap-toggle.css');
require('ng-table');

angular.module('declaration-libs', ['ui.bootstrap', 'pascalprecht.translate', 'ngSanitize', 'ngTable']);
