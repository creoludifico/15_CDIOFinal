angular.module('CDIOFinal').service('CDIOFinalService', ['$http', 'CDIOFinalModel', function ($http, CDIOFinalModel) {
    this.getLogin = function(){ //For at tjekke om man er logget ind og hent bruger data
        $http({
            method: "GET",
            url: CDIOFinalModel.apiURL + "authentication/getLogin"
        }).then(function (resp) {
            CDIOFinalModel.user = resp.data;
        }, function (errorResp) {
        });
    };
}]);