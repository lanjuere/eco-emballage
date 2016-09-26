require('./home/home');
var remplirProduitModule = require('./remplirProduit/RemplirProduit');
var listeEmballageModule = require('./listeEmballage/ListeEmballage');

angular.module('views', ['home', remplirProduitModule, listeEmballageModule]);
