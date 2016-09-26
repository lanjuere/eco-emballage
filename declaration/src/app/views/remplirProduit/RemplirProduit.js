var ctrl = require('./remplirProduitCtrl');
var moduleName = 'declaration.remplirProduit';
angular.module(moduleName, []);

angular.module(moduleName).component('remplirProduit', {
  template: require('./remplirProduit.html'),
  controller: ctrl,
  controllerAs: 'remplirProduitCtrl',
  bindings: {
  }
});

module.exports = moduleName;
