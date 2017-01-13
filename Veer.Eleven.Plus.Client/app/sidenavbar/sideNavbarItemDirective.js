/// <reference path="D:\Work\Labs101\Veer.Eleven.Plus\Veer.Eleven.Plus.Client\Scripts/angular.js" />
(function () {
    "use strict";
    angular.module("sideNavbar").directive("sideNavbarItem", sideNavbarItem);

    function sideNavbarItem() {
        return {
            require: "^sideNavbar",
            scope: {
                label: "@",
                icon: "@",
                route:"@"
            },
            templateUrl: "app/sidenavbar/sideNavbarItemTemplate.html",
            link: function (scope, element, attr,ctrl) {
                
                scope.isActive = function () {
                    return element === ctrl.getActiveElement();
                }

                element.on("click", function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function () {
                        ctrl.setActiveElement(element);
                        ctrl.setRoute(scope.route);

                    });
                });
            }
        };
    };

}());