var app = angular.module('app');

app.controller('mvMainCtrl', function ($scope, mvCachedCourse) {
    $scope.courses = mvCachedCourse.query();
});