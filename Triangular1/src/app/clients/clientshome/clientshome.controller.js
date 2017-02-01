(function() {
    'use strict';

    angular
        .module('clientshome')
        .controller('ClientsHomeController', ClientsHomeController);

    /* @ngInject */
    function ClientsHomeController() {
        var vm = this;
        vm.testData = ['This', 'is', 'a', 'test'];
    }
})();
