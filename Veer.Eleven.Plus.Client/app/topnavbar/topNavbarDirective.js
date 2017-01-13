/// <reference path="D:\Work\Labs101\Veer.Eleven.Plus\Veer.Eleven.Plus.Client\Scripts/angular.js" />
(function () {
    angular.module("topNavbar").directive("topNavbar", topNavbar);

    function topNavbar() {
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile:'@'
            },
            controller: "topNavbarController",
            templateUrl: "app/topnavbar/topNavbarTemplate.html",
            controllerAs: "vm"
        };
    };
}());