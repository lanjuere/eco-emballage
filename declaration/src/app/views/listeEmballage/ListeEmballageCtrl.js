module.exports = function (NgTableParams, listEmballageService) {

  this.tableParams = new NgTableParams({}, {
    dataset: listEmballageService.emballages
  });

};
