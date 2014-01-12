function ArtistsController($scope, $http) {

    $http.get('get.json').success(function(data) {
        $scope.result = data;
    });

    alert($scope.result);
}

//(function(){

//function Load($scope, $http) {
//    $http.get({method: 'GET', url: 'get.json'}).
//        success(function(data) {
//            $scope.greeting = data;
//    });
//}

//var app = angular.module('poliedroApp', []);

//app.factory('Project', function ($http) {
//    var path = 'http://localhost.com:15146/get.json';
//    var json = $http.get(path).then(function (response) {
//        return response.data;
//    });

//    var Project = function (data) {
//        if (data) angular.copy(data, this);
//    };

//    Project.query = function () {
//        return json.then(function (data) {
//            return data.map(function (project) {
//                return new Project(project);
//            });
//        })
//    };

//    Project.get = function (id) {
//        return json.then(function (data) {
//            var result = null;
//            angular.forEach(data, function (project) {
//                if (project.id == id) result = new Project(project);
//            });
//            return result;
//        })
//    };

//    return Project;
//});

//app.controller('load', function (Project, $scope) {
//    $scope.result = Project.query();
//    //$http.get('C:\Users\BrunoSato\Documents\github\WebBlock\get.json').then(function (data) {
//    //    $scope.result = data;
//    //});
//    //var path = '\github\WebBlock\js';
//    //$http.get(path).success(function (data) {
//    //    $scope.teams = data;
//    //    console.log(data);
//    //    console.log($scope.teams);
//    //});

//});

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


//}());