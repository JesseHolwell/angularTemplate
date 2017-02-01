(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'triangular',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'app.permission',
            'dashboard',
            'clients',
            'clientshome',
            'demo',
        ])

        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  ''
        });
})();
