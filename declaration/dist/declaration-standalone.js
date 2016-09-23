webpackJsonp([0],{

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(28);
__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(4);

angular.module('declaration-libs', ['ui.bootstrap', 'pascalprecht.translate', 'ngSanitize']);

/***/ },

/***/ 28:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 29:
/***/ function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">success</a>\r\n</div>\r\n<div class=\"alert alert-info\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">info</a>\r\n</div>\r\n<div class=\"alert alert-warning\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">{{'WARNING' | translate}} 1</a>\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">danger 1</a>\r\n</div>\r\n";

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

// var angular = require('angular');
angular.module('home', []).component('home', {
  template: __webpack_require__(29),
  controller: function () {},
  bindings: {}
});

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(10);
__webpack_require__(9);
var translateProvider = __webpack_require__(8);
angular.module('declaration', ['declaration-libs', 'views']);
angular.module('declaration').config(['$translateProvider', translateProvider]);

/***/ },

/***/ 8:
/***/ function(module, exports) {

var declarationTranslate = function ($translateProvider) {
  var languages = {
    fr: 'fr',
    en: 'en'
  };

  $translateProvider.translations(languages.en, {
    TITLE: 'Hello',
    ALERT: 'alerte',
    WARNING: 'Warning'
  });

  $translateProvider.translations(languages.fr, {
    TITLE: 'Bonjour',
    ALERT: 'alerte',
    WARNING: 'Attention'
  });

  $translateProvider.preferredLanguage(languages.fr);
  $translateProvider.useSanitizeValueStrategy('sanitize');
};

module.exports = declarationTranslate;

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

// var angular = require('angular');
__webpack_require__(30);
angular.module('views', ['home']);

/***/ }

},[31]);