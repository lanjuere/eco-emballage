require('./libs/libs');
require('./app/views/views');
var translateProvider = require('./app/commons/translate/DeclarationTranslateProvider');
angular.module('declaration', ['declaration-libs', 'views']);
angular.module('declaration').config(['$translateProvider', translateProvider]);
