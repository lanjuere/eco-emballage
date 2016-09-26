var declarationRessource = require('./declaration/Declaration');
var moduleName = 'declaration.resources';
angular.module(moduleName, []);

angular.module(moduleName).factory(declarationRessource.name, [declarationRessource.dependencies]);

module.exports = moduleName;
