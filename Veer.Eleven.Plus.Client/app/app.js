(function () {

    var app = angular.module("app", ["topNavbar","ui.router"]);

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state("home", {
            url: "/",
            templateUrl:"app/welcomeView.html"
        })
        .state("maths", {
            url: "/maths",
            templateUrl: "app/maths/mathsView.html"
            //resolve: {
            //    test: function () {
            //        console.log("fsgfg");
            //    }
            //}
        })

    }]);
}());