

function ListeEmballageService(ngTableParams){
    var self = this;
    self.emballages = [];

    function createEmballage(name, ref){
      return {
          name: name,
          ref: ref
      }
    }

    self.emballages.push(createEmballage("Libellé UVC n°1", 2015300));
    self.emballages.push(createEmballage("Libellé UVC n°2", 2015300));
    self.emballages.push(createEmballage("Yaourts aromatisé par 4", 2015300));




   return self;
}



module.exports = ListeEmballageService;
