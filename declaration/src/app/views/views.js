var remplirProduitModule = require('./remplirProduit/RemplirProduit');
var listeEmballageModule = require('./listeEmballage/ListeEmballage');
var recommandationModule = require('./recommandation/Recommandation');

angular.module('views', [ remplirProduitModule, listeEmballageModule, recommandationModule]);
