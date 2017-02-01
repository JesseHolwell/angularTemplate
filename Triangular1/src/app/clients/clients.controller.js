(function() {
    'use strict';

    angular
        .module('clients')
        .controller('ClientsController', ClientsController);

    /* @ngInject */
    function ClientsController(triMenu) {
        var vm = this;
        vm.testData = ['This', 'is', 'a', 'test'];

         triMenu.addMenu({
            name: 'Clients Menu',
            icon: 'fa fa-tree',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Clients',
                state: 'triangular.clients',
                type: 'link'
            }]
         });

         triMenu.removeMenu('triangular.dashboard');

    }
})();
