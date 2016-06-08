angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])


.factory('Api', function($http){
    var API = 'http://localhost/api-assistente/SlimAssistente/';
    return{
        getMarca: function () {
            return $http({
                url: API + 'marcas' ,
                method:'GET'
            })
        },
         getModelo: function () {
            return $http({
                url: API + 'modelos' ,
                method:'GET'
            })
           },
         getManutencao: function () {
            return $http({
                url: API + 'manutencoes' ,
                method:'GET'
            })
         },     
         getUsuario: function () {
            return $http({
                url: API + 'usuario' ,
                method:'GET'
            })
         },
         addProprietario: function (prop) {
            return $http({
                url: API  + 'proprietario',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: prop,
                method:'POST'
            })
         },
         getProprietario: function () {
            return $http({
                url: API + 'proprietario + id',
                method:'GET'
            })
         
         },
         fazerLogin: function (login) {
            return $http({
                url: API  + 'login',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: login,
                method:'POST'
            })
         
         },
         gravarHodometro: function (hodometro) {
             console.log((window.localStorage.getItem('key')));
            return $http({
                url: API  + 'hodometro',
                headers: { 'content-type': 'application/x-www-form-urlencoded',
                           'key': (window.localStorage.getItem('key'))
                         },
                data: hodometro,
                method:'POST'
            })
         
         }
    };   
})




.service('BlankService', [function(){

}]);

