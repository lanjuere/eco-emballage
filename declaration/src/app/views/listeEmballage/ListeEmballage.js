var ctrl = require('./ListeEmballageCtrl');
var moduleName = 'declaration.listeEmballage';
angular.module(moduleName, []);

angular.module(moduleName).component('listeEmballage', {
  template: require('./listeEmballage.html'),
  controller: ctrl,
  controllerAs: 'listeEmballageCtrl',
  bindings: {
  }
});

module.exports = moduleName;
