angular.module('CDIOFinal').service('CDIOFinalModel', function () {
    this.loadingCounter = 0; //Hvis 0 så indlæses intet på siden hvis den er højere er der noget der indlæses
    this.apiURL = "api/";

    this.userToken = '';
    this.user = null;
});