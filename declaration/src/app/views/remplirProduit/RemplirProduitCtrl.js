module.exports = function () {
  this.typeDeclarations = ['Déclaration des UVC', 'Déclarations des cas spécifiques'];
  this.listMateriaux = ['ACIER - ALUMINIUM', 'PAPIER-CARTON', 'PLASTIQUE', 'VERRE - AUTRES'];
  this.actions = ['Action de réduction / recyclabilité'];
  this.form = {};

  this.ngClass = function(formValue){
    ngClass = {};
    ngClass['has-error'] = function(){return formValue.$invalid && !formValue.$pristine};
    ngClass['has-success'] = function(){return formValue.$valid && !formValue.$pristine};
    // return {
    //   'has-error' : formValue.$invalid && !formValue.$pristine,
    //   'has-success' : formValue.$valid
    // ;}
    return ngClass;
  }
};
