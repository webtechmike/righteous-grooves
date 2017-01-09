(function() {
    'use strict';
    var app = angular.module('UbiquityCatalog');

    function controller(){
        var model = this;
    }

    app.component('artistList', {
        templateUrl: "templates/artist-list.component.html",
        bindings: {
            artists: '<'
        },
        controllerAs: "model",
        controller: [controller]
    });
})();
