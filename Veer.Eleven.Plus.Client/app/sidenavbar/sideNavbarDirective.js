/// <reference path="D:\Work\Labs101\Veer.Eleven.Plus\Veer.Eleven.Plus.Client\Scripts/angular.js" />
(function () {
    "use strict";
    angular.module("sideNavbar").directive("sideNavbar", sideNavbar);

    function sideNavbar() {
        return {
            transclude: true,
            scope: {

            },
            controller: "sideNavbarController",
            templateUrl: "app/sidenavbar/sideNavbarTemplate.html",
            controllerAs: "vm",
            link: function (scope, element, attr) {
                console.log("side bar directive");

            }
        };
    };
}());