//(function(){

//function Load($scope, $http) {
//    $http.get({method: 'GET', url: 'get.json'}).
//        success(function(data) {
//            $scope.greeting = data;
//    });
//}

var app = angular.module('poliedroApp', []);

app.controller('load', function ($scope, $http) {
    //$http.get('C:\Users\BrunoSato\Documents\github\WebBlock\get.json').then(function (data) {
    //    $scope.result = data;
    //});
    var path = '\github\WebBlock\js';
    $http.get(path).success(function (data) {
        $scope.teams = data;
        console.log(data);
        console.log($scope.teams);
    });
});

app.controller('edit', function ($scope) {
    $scope.showtooltip = false;
    $scope.value = 'Edit me.';

    $scope.hideTooltip = function () {
        $scope.showtooltip = false;
    }

    $scope.toggleTooltip = function (e) {
        e.stopPropagation();
        $scope.showtooltip = !$scope.showtooltip;
    }
});


//}());