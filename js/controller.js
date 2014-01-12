(function(){

function Load($scope, $http) {
    $http.get({method: 'GET', url: 'get.json'}).
        success(function(data) {
            $scope.greeting = data;
    });
}
 

}());