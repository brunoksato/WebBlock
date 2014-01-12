//(function(){

//function Load($scope, $http) {
//    $http.get({method: 'GET', url: 'get.json'}).
//        success(function(data) {
//            $scope.greeting = data;
//    });
//}

var app = angular.module('poliedroAprova', []);

app.controller('load', function ($scope, $http) {
    $http.get('get.json').then(function (data) {
        $scope.block = data;
    })
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