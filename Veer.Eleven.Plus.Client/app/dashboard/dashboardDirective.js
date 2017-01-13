/// <reference path="D:\Work\Labs101\Veer.Eleven.Plus\Veer.Eleven.Plus.Client\Scripts/angular.js" />
(function () {
    "use strict";
    angular.module("dashboard").directive("dashboard", dashboard);

    function dashboard() {
        return {
            templateUrl: "app/dashboard/dashboardTemplate.html"
        };
    };
}());