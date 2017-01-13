/// <reference path="D:\Work\Labs101\Veer.Eleven.Plus\Veer.Eleven.Plus.Client\Scripts/angular.js" />
(function () {
    "use strict";
    angular.module("sideNavbar").controller("sideNavbarController",["$scope","$rootScope",sideNavbarController]);

    function sideNavbarController($scope, $rootScope)
    {
        var vm = this;
        vm.message = "side Navbar Controller";

        vm.showMenu = true;

        vm.getActiveElement = function () {
            return vm.activeElement;
        };
        vm.setActiveElement = function (element) {
            vm.activeElement = element;
        };

        vm.setRoute = function (route) {
            $rootScope.$broadcast('vr-menu-item-selected-event',
                { route: route });
        };

        $scope.$on("vr-sidenavbar-show", function (evt, data) {
            vm.showMenu = data.show;
        });
    }
}());