//function load($scope, $http) {

//    $http.get('get.js').success(function(data) {
//        $scope.result = data;
//    });

//    alert($scope.result);
//}

(function(){

var app = angular.module('poliedroApp', []);

app.controller('load', function ($http, $scope) {
    $http.get('js/get.js').success(function(data) {
        $scope.result = data;
    });
});

//app.controller('edit', function ($scope) {
//    $scope.showtooltip = false;
//    $scope.value = 'Edit me.';

//    $scope.hideTooltip = function () {
//        $scope.showtooltip = false;
//    }

//    $scope.toggleTooltip = function (e) {
//        e.stopPropagation();
//        $scope.showtooltip = !$scope.showtooltip;
//    }
//});


}());