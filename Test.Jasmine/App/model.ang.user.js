var app = angular.module('app', []);
app.controller('userModel', function ($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function () {
        var name = $scope.firstName + " " + $scope.lastName;
        name = $.trim(name);
        return name;
    };
});