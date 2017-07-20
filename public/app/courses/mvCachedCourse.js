var app = angular.module('app');

app.factory('mvCachedCourse', function(mvCourse) {
    var courseList;

    return {
        query: function() {
            if(!courseList) {
                courseList = mvCourse.query();
            }
            return courseList;
        }
    }
});