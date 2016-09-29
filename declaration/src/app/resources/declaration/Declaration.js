function Declaration() {
  this.name = 'declarationResource';
  this.dependencies = ['$http'];
  this.resource = function ($http) {
    var self = {};
    // self.declarations = $resource('/declarations/');
    // self.declaration = $resource('/declarations/:declarationId', {declarationId: '@id'});
    self.url = 'http://eead-dev-front.northeurope.cloudapp.azure.com/content/liste_type_declaration';

    self.getListTypesDeclaration = function(){
      return $http({
        method: 'GET',
        url: self.url
      });
  };

    return self;
  };
  this.dependencies.push(this.resource);
}

module.exports = new Declaration();
