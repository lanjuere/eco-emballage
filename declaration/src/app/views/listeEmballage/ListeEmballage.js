var ctrl = require('./ListeEmballageCtrl');
var service = require('./ListeEmballageService');
var moduleName = 'declaration.listeEmballage';
angular.module(moduleName, []);
angular.module(moduleName).factory('listEmballageService', [service]);
angular.module(moduleName).controller('listEmballageCtrl', ['NgTableParams','listEmballageService',ctrl]);
angular.module(moduleName).component('listeEmballage', {
  template: require('./listeEmballage.html'),
  controller: 'listEmballageCtrl',
  controllerAs: 'listeEmballageCtrl',
  bindings: {
  }
});

module.exports = moduleName;
