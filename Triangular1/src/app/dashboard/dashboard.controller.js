(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    /* @ngInject */
    function DashboardController($state,triMenu) {
        var vm = this;
        vm.testData = ['This', 'is', 'a', 'test'];

        triMenu.addMenu({
            name: 'Home',
            icon: 'fa fa-tree',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Dashboard',
                state: 'triangular.dashboard',
                type: 'link'
            },{
                name: 'Demo',
                state: 'triangular.demo',
                type: 'link'
            }]
        });

        triMenu.removeMenu('triangular.clients');


        vm.goToClientBrowser = function() {
            $state.go('triangular.clients');
        }
    }
})();
