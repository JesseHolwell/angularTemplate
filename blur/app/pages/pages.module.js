(function () {
    'use strict';

    angular.module('BlurAdmin.pages', [
      'ui.router',
       'dndLists',
      'BlurAdmin.pages.dashboard',

    ])
    .config(routeConfig);

    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {

    }

})();
