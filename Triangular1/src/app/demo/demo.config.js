(function() {
    'use strict';

    angular
        .module('demo')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.demo', {
            url: '/demo',
            templateUrl: 'app/demo/demo.tmpl.html',
            // set the controller to load for this page
            controller: 'demoController',
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
        //    name: 'Home',
        //    icon: 'fa fa-tree',
        //    type: 'dropdown',
        //    priority: 1.1,
        //    children: [{
        //        name: 'Dashboard',
        //        state: 'triangular.dashboard',
        //        type: 'link'
        //    }]
        //});
    }
})();
