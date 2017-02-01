(function() {
    'use strict';

    angular
        .module('clients')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.clients', {
            url: '/clients',
            templateUrl: 'app/clients/clients.tmpl.html',
            // set the controller to load for this page
            controller: 'ClientsController',
            controllerAs: 'vm',
            // layout-column class added to make footer move to
            // bottom of the page on short pages
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });

        //triMenuProvider.addMenu({
        //    name: 'Clients Menu',
        //    icon: 'fa fa-tree',
        //    type: 'dropdown',
        //    priority: 1.1,
        //    children: [{
        //        name: 'Clients',
        //        state: 'triangular.clients',
        //        type: 'link'
        //    }]
        //});
    }
})();
