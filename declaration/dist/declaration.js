webpackJsonp([0],{

/***/ 24:
/***/ function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">success</a>\r\n</div>\r\n<div class=\"alert alert-info\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">info</a>\r\n</div>\r\n<div class=\"alert alert-warning\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">warning</a>\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">danger</a>\r\n</div>\r\n";

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

var angular = __webpack_require__(1);
var homeModuleName = 'home';
var home = angular.module(homeModuleName, []);
home.component(homeModuleName, {
  template: __webpack_require__(24),
  controller: function () {},
  bindings: {}
});

module.exports = homeModuleName;

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

var angular = __webpack_require__(1);
__webpack_require__(6);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);

var views = __webpack_require__(7);

angular.module('declaration', ['ui.bootstrap', views]);

/***/ },

/***/ 6:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

var angular = __webpack_require__(1);
var homeModule = __webpack_require__(25);
var viewsModuleName = "views";
module.exports = viewsModuleName;
angular.module('views', [homeModule]);

/***/ }

},[26]);