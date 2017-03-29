'use strict';

angular.module('myApp.eng', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/eng', {
    templateUrl: 'eng/eng.html',
    controller: 'engCtrl'
  });
}]).controller('engCtrl', [ '$scope', function($scope) {

    console.log('init engCtrl');
    $scope.lang = 'eng';

    console.log($scope.lang);

}]);