(function () {

    var app = angular.module('poliedroApp', []);

    app.controller('load', function ($http, $scope) {
        $http.get('/assets/js/get.js').success(function (data) {
            $scope.result = data;
        });
    });

    app.directive('contenteditable', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                // view -> model
                elm.bind('blur', function () {
                    scope.$apply(function () {
                        ctrl.$setViewValue(elm.html());
                    });
                });

                // model -> view
                ctrl.render = function (value) {
                    elm.html(value);
                };

                // load init value from DOM
                ctrl.$setViewValue(elm.html());

                elm.bind('keydown', function (event) {
                    console.log("keydown " + event.which);
                    var esc = event.which == 27,
                        el = event.target;

                    if (esc) {
                        console.log("esc");
                        ctrl.$setViewValue(elm.html());
                        el.blur();
                        event.preventDefault();
                    }

                });

            }
        };
    });
    
} ());