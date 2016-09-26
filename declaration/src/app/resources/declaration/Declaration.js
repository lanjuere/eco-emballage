function Declaration() {
  this.name = 'declarationResource';
  this.dependencies = ['$resource'];
  this.resource = function ($resource) {
    var self = {};
    self.declarations = $resource('/declarations/');
    self.declaration = $resource('/declarations/:declarationId', {declarationId: '@id'});

    return self;
  };
  this.dependencies.push(this.resource);
}

module.exports = new Declaration();
