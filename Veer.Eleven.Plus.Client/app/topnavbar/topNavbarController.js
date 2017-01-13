/// <reference path="D:\Work\Labs101\Veer.Eleven.Plus\Veer.Eleven.Plus.Client\Scripts/angular.js" />
(function () {
    "use strict";

    angular.module("topNavbar").controller("topNavbarController",["$scope","$rootScope","$state","$window","$timeout", topNavbarController]);

    function topNavbarController($scope,$rootScope, $state, $window, $timeout) {
        var vm = this;
        vm.message = "top Navbar Controller";

        vm.isMenuButtonVisible = true;
        vm.isMenuVisible = true;

        $scope.$on('vr-menu-item-selected-event', function (evt, data) {
            vm.routeString = data.route;
            checkWidth();
            broadcastMenuState();
            $state.go(data.route);
        });

        $($window).on('resize.topNavbar', function () {
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState();
            });
        });
        $scope.$on("$destroy", function () {
            $($window).off("resize.topNavbar");
        });

        var checkWidth = function () {
            var width = Math.max($($window).width(), $window.innerWidth);
            vm.isMenuVisible = (width >= 768);
            vm.isMenuButtonVisible = !vm.isMenuVisible;
        };

        vm.menuButtonClicked = function () {
            vm.isMenuVisible = !vm.isMenuVisible;
            broadcastMenuState();
            //$scope.$apply();
        };

        var broadcastMenuState = function () {
            $rootScope.$broadcast('vr-sidenavbar-show',
                {
                    show: vm.isMenuVisible
                });
        };
        $timeout(function () {
            checkWidth();
        }, 0);
    };

}());