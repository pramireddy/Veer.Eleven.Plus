(function () {
    "use strict";
    angular.module("app").controller("mathsController", mathsController);

    function mathsController() {
        var vm = this;
        vm.message = "Hello! Maths Controller";
    };

}());