(function() {
    'use strict';
    var app = angular.module('UbiquityCatalog');

    function controller(API, $scope, $http){
        var model = this;

        // $scope.$watch('results', function(search){
        //     if(undefined == search || search == '') {
        //         model.results = model.artist ? model.artist : 'love';
        //     } else if(search.length > 0) {
        //         model.results = API.textSearch(search).then(function(response){
        //             model.results = response.data.data;
        //         });
        //     } else {
        //         model.results = model.search;
        //     }
        // });
    }

    app.component('searchResults', {
        templateUrl: "templates/search-results.component.html",
        bindings: {
            results: '<'
        },
        controllerAs: "model",
        controller: ['API', '$scope', '$http', controller]
    });
})();
