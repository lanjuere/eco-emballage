webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var declarationRessource = __webpack_require__(36);
var moduleName = 'declaration.resources';
angular.module(moduleName, []);

angular.module(moduleName).factory(declarationRessource.name, [declarationRessource.dependencies]);

module.exports = moduleName;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(37);
var remplirProduitModule = __webpack_require__(40);
var listeEmballageModule = __webpack_require__(38);

angular.module('views', ['home', remplirProduitModule, listeEmballageModule]);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(32);

__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(4);
__webpack_require__(7);
__webpack_require__(31);

angular.module('declaration-libs', ['ui.bootstrap', 'pascalprecht.translate', 'ngSanitize']);

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 32 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">success</a>\r\n</div>\r\n<div class=\"alert alert-info\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">info</a>\r\n</div>\r\n<div class=\"alert alert-warning\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">{{'WARNING' | translate}} 1</a>\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\">\r\n  <a href=\"#\" class=\"alert-link\">danger 1</a>\r\n</div>\r\n";

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n  <li data-ng-repeat='emballage in listeEmballageCtrl.emballages' class=\"list-group-item\">\r\n      {{emballage.name}}\r\n  </li>\r\n</ul>\r\n";

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <form class=\"col-md-10\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 10%;\">\r\n            10%\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <form>\r\n      <div class=\"form-group row\">\r\n        <p class=\"col-md-3\">TYPE DE DECLARATION</p>\r\n        <div class=\"col-md-4\" data-ng-repeat='typeDeclaration in remplirProduitCtrl.typeDeclarations'>\r\n            <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"typeDeclaration\" data-ng-model=\"remplirProduitCtrl.type\">{{typeDeclaration}}\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label>1. PRODUIT</label>\r\n        <div class=\"row\">\r\n          <div class=\" col-md-5\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Code produit\"/>\r\n          </div>\r\n          <div class=\" col-md-5\">\r\n            <input class=\"form-control col-md-6\" type=\"text\" placeholder=\"libellé du produit\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label>2. POIDS UNITAIRE PAR MATERIAUX (EN GRAMMES)</label>\r\n        <div class=\"list-group col-md-11\">\r\n          <a href=\"#\" class=\"list-group-item\" data-ng-repeat=\"materiaux in remplirProduitCtrl.listMateriaux\">\r\n            {{materiaux}}\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label>3. DECOTE</label>\r\n          <div class=\"row\">\r\n            <p class=\"text-left col-md-3\">Papier-carton recyclé <input class=\"form-control\" type=\"checkbox\" checked data-toggle=\"toggle\"></p>\r\n          </div>\r\n        </div>\r\n      <div class=\"form-group\">\r\n        <label>4. BONUS</label>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">\r\n            <select class=\"form-control\">\r\n              <option data-ng-repeat=\"action in remplirProduitCtrl.actions\">{{action}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <select class=\"form-control\">\r\n              <option data-ng-repeat=\"action in remplirProduitCtrl.actions\">{{action}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n    </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 36 */
/***/ function(module, exports) {

function Declaration() {
  this.name = 'declarationResource';
  this.dependencies = ['$resource'];
  this.resource = function ($resource) {
    var self = {};
    self.declarations = $resource('/declarations/');
    self.declaration = $resource('/declarations/:declarationId', { declarationId: '@id' });

    return self;
  };
  this.dependencies.push(this.resource);
}

module.exports = new Declaration();

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

angular.module('home', []).component('home', {
  template: __webpack_require__(33),
  controller: function () {},
  bindings: {}
});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

var ctrl = __webpack_require__(39);
var moduleName = 'declaration.listeEmballage';
angular.module(moduleName, []);

angular.module(moduleName).component('listeEmballage', {
  template: __webpack_require__(34),
  controller: ctrl,
  controllerAs: 'listeEmballageCtrl',
  bindings: {}
});

module.exports = moduleName;

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = function () {
  this.emballages = [];
  for (var i = 1; i < 15; i++) {
    this.emballages.push({ name: 'emballage' + i });
  }
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var ctrl = __webpack_require__(41);
var moduleName = 'declaration.remplirProduit';
angular.module(moduleName, []);

angular.module(moduleName).component('remplirProduit', {
  template: __webpack_require__(35),
  controller: ctrl,
  controllerAs: 'remplirProduitCtrl',
  bindings: {}
});

module.exports = moduleName;

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = function () {
  this.typeDeclarations = ['Déclaration des UVC', 'Déclarations des cas spécifiques'];
  this.listMateriaux = ['ACIER - ALUMINIUM', 'PAPIER-CARTON', 'PLASTIQUE', 'VERRE - AUTRES'];
  this.actions = ['Action de réduction / recyclabilité'];
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(13);
__webpack_require__(9);
__webpack_require__(12);
var resources = __webpack_require__(11);
var translateProvider = __webpack_require__(10);
angular.module('declaration', ['declaration-libs', 'views', resources]);
angular.module('declaration').config(['$translateProvider', translateProvider]);

/***/ }
],[42]);