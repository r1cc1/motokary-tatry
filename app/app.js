'use strict';

angular.module('myApp', ['ngRoute','duScroll', 'myApp.svk', 'myApp.eng']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    //$locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/svk'})

}]).controller('mainCtrl', ['$scope','$location', function ($scope, $location) {
    console.log('init mainCtrl');

    // Submenu State init
    $scope.subeMenuState = false;


    $scope.english = function () {
        $scope.lang = 'eng';
        console.log('$scope.lang ' + $scope.lang);
    };
    $scope.slovak = function () {
        $scope.lang = 'svk';
        console.log('$scope.lang ' + $scope.lang);
    };


    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    };

    function getWindowHeight() {
        var viewportheight;
        if (typeof window.innerWidth != 'undefined') {
            viewportheight = window.innerHeight
        }
        else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0) {
            viewportheight = document.documentElement.clientHeight
        }
        else {
            viewportheight = document.getElementsByTagName('body')[0].clientHeight
        }
        $scope.displayHeight = viewportheight;
        $scope.video = $scope.displayHeight / 2;
        $scope.mapHeight = $scope.displayHeight / 2;
    }

    function onScroll() {
        var scroll = $(window).scrollTop();
        if(scroll >= $scope.displayHeight) {
            $scope.subMenuState = true;
            $scope.$apply();
        } else {
            $scope.subMenuState = false;
            $scope.$apply()
        }
    }


    jQuery(window).scroll(function() {
        var viewportheight;

        if (typeof window.innerWidth != 'undefined')
        { viewportheight = window.innerHeight }
        else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0)
        {  viewportheight = document.documentElement.clientHeight }
        else{
            viewportheight = document.getElementsByTagName('body')[0].clientHeight
        }
        var scroll = $(window).scrollTop();

        if (scroll >= (viewportheight-100)) {
            jQuery(".navbar-default").removeClass("navbar-start");
        } else {
            jQuery(".navbar-default").addClass("navbar-start");
        }

        onScroll();
    });



    $(window).scroll(function () {
        onScroll();
    });

    $(document).ready(function () {
        getWindowHeight();
    });

    window.addEventListener('resize', function () {
        getWindowHeight();
    });

}]);


