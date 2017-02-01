(function() {
    'use strict';

    angular
        .module('demo')
        .controller('demoController', demoController);

    /* @ngInject */
    function demoController($state,triMenu) {
        var vm = this;
        vm.testData = ['This', 'is', 'a', 'test'];


        vm.goToClientBrowser = function() {
            $state.go('triangular.clients');
        }
    }
})();
