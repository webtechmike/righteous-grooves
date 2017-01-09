(function() {
    'use strict';

    var app = angular.module('UbiquityCatalog', []);

    app.factory('API', ['$q', '$http', function($q, $http){
        var url = 'http://localhost:3000/';
        var deferred = $q.defer();

        return {
            fetchArtists: function(){
                return $http.get(url+'artists').then(function(response){
                    return response.data;
                });
            },
            textSearch: function(searchTerm){
                $http.get(url+'searchTerm').then(function(response){
                    deferred.resolve(response.data);
                }, function(err){
                    deferred.reject();
                });
                return deferred.promise;
            }
        }
    }])
})();
