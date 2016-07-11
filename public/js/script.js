(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller("mainController", mainController);

    function mainController($scope) {
        $scope.title = 'Happy Healthy Vegan';
    };


})();
