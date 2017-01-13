(function () {
    "use strict";

    angular.module('sideNavbar').directive('sideNavbarGroup', function () {
        return {
            require: '^sideNavbar',
            transclude: true,
            scope: {
                label: '@',
                icon: '@'
            },
            templateUrl: "app/sidenavbar/sideNavbarGroupTemplate.html",
            link: function (scope, el, attrs, ctrl) {
                scope.isOpen = false;
                scope.closeMenu = function () {
                    scope.isOpen = false;
                };
                scope.clicked = function () {
                    scope.isOpen = !scope.isOpen;
                };
            }
        };
    });
}());