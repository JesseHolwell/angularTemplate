(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
      .controller('dashboardCtrl', dashboardCtrl);

    /** @ngInject */
    function dashboardCtrl($scope, $rootScope, $uibModal, $filter, $state, leafletData, $stateParams, $window, $location, $timeout, toastr) {


        $scope.items = [
            {
                Code: 1234,
                EditedBy: { UserName: "Jesse" },
                Edited: new Date()
            },
        ];
    }

})();