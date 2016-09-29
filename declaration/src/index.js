require('./libs/libs');
require('./style/main.css');
require('./app/views/views');
var resources = require('./app/resources/Resources');
var translateProvider = require('./app/commons/translate/DeclarationTranslateProvider');

angular.module('declaration', ['declaration-libs', 'views', resources]);
angular.module('declaration').config(['$translateProvider', translateProvider]);
