(function() {
    'use strict';

    angular
        .module('clientshome')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.clientshome', {
            url: '/clientshome',
            templateUrl: 'app/clients/clientshome/clientshome.tmpl.html',
            // set the controller to load for this page
            controller: 'ClientsHomeController',
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
        //    name: 'Only Menu (Test)',
        //    icon: 'fa fa-tree',
        //    type: 'dropdown',
        //    priority: 1.1,
        //    children: [{
        //        name: 'Client',
        //        state: 'triangular.clients',
        //        type: 'link'
        //    }]
        //});
    }
})();
