(function() {
    'use strict';
    var app = angular.module('UbiquityCatalog');

    function controller($http){
        var model = this;

        
    }

    app.component('navbar', {
        bindings: {

        },
        templateUrl: "templates/navbar.component.html",
        controllerAs: "model",
        controller: ['$http', controller]
    });
})();
