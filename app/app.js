'use strict';

angular.module('myApp', ['ngRoute','duScroll','firebase','myApp.svk', 'myApp.eng', 'myApp.admin']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    //$locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/svk'})

}]).controller('mainCtrl', ['$scope','$rootScope','$firebaseArray', '$firebaseObject','$location', '$window', function ($scope, $rootScope, $firebaseArray, $firebaseObject, $location) {

    console.log('init mainCtrl');

    // Submenu State init
    $scope.subeMenuState = false;

    //// init FireBase
    $rootScope.config = {
        apiKey: "AIzaSyD2VdusZutZIrCeUX3cDNqirHcUsEefVPo",
        authDomain: "motokarytatrysk.firebaseapp.com",
        databaseURL: "https://motokarytatrysk.firebaseio.com",
        projectId: "motokarytatrysk",
        storageBucket: "motokarytatrysk.appspot.com",
        messagingSenderId: "1092396280178"
    };

    angular.element(document).ready(function () {

        /// load data from FireBase database
        firebase.initializeApp($rootScope.config);
        var rootRef = firebase.database().ref();
        $rootScope.prices = $firebaseArray(rootRef.child('prices'));
        $rootScope.topMonth = $firebaseArray(rootRef.child('top_month'));
        $rootScope.topYear = $firebaseArray(rootRef.child('top_year'));
        $rootScope.newsTextsk = $firebaseObject(rootRef.child('newsTextsk'));
        $rootScope.newsTexten = $firebaseObject(rootRef.child('newsTexten'));
        $rootScope.maskSellPrice = $firebaseObject(rootRef.child('maskSellPrice'));
        $rootScope.maskRentPrice = $firebaseObject(rootRef.child('maskRentPrice'));


        $rootScope.topYear1name = $firebaseObject(rootRef.child('top_year1name'));
        $rootScope.topYear2name = $firebaseObject(rootRef.child('top_year2name'));
        $rootScope.topYear3name = $firebaseObject(rootRef.child('top_year3name'));
        $rootScope.topYear4name = $firebaseObject(rootRef.child('top_year4name'));
        $rootScope.topYear5name = $firebaseObject(rootRef.child('top_year5name'));

        $rootScope.topYear1time = $firebaseObject(rootRef.child('top_year1time'));
        $rootScope.topYear2time = $firebaseObject(rootRef.child('top_year2time'));
        $rootScope.topYear3time = $firebaseObject(rootRef.child('top_year3time'));
        $rootScope.topYear4time = $firebaseObject(rootRef.child('top_year4time'));
        $rootScope.topYear5time = $firebaseObject(rootRef.child('top_year5time'));

        $rootScope.topMonth1name = $firebaseObject(rootRef.child('top_month1name'));
        $rootScope.topMonth2name = $firebaseObject(rootRef.child('top_month2name'));
        $rootScope.topMonth3name = $firebaseObject(rootRef.child('top_month3name'));
        $rootScope.topMonth4name = $firebaseObject(rootRef.child('top_month4name'));
        $rootScope.topMonth5name = $firebaseObject(rootRef.child('top_month5name'));

        $rootScope.topMonth1time = $firebaseObject(rootRef.child('top_month1time'));
        $rootScope.topMonth2time = $firebaseObject(rootRef.child('top_month2time'));
        $rootScope.topMonth3time = $firebaseObject(rootRef.child('top_month3time'));
        $rootScope.topMonth4time = $firebaseObject(rootRef.child('top_month4time'));
        $rootScope.topMonth5time = $firebaseObject(rootRef.child('top_month5time'));

        $rootScope.price1time = $firebaseObject(rootRef.child('price1time'));
        $rootScope.price1small = $firebaseObject(rootRef.child('price1small'));
        $rootScope.price1big = $firebaseObject(rootRef.child('price1big'));

        $rootScope.price2time = $firebaseObject(rootRef.child('price2time'));
        $rootScope.price2small = $firebaseObject(rootRef.child('price2small'));
        $rootScope.price2big = $firebaseObject(rootRef.child('price2big'));

        $rootScope.price3time = $firebaseObject(rootRef.child('price3time'));
        $rootScope.price3small = $firebaseObject(rootRef.child('price3small'));
        $rootScope.price3big = $firebaseObject(rootRef.child('price3big'));

        $rootScope.price4time = $firebaseObject(rootRef.child('price4time'));
        $rootScope.price4small = $firebaseObject(rootRef.child('price4small'));
        $rootScope.price4big = $firebaseObject(rootRef.child('price4big'));


        $rootScope.price5time = $firebaseObject(rootRef.child('price5time'));
        $rootScope.price5three = $firebaseObject(rootRef.child('price5three'));
        $rootScope.price5four = $firebaseObject(rootRef.child('price5four'));
        $rootScope.price5five = $firebaseObject(rootRef.child('price5five'));

        $rootScope.price6time = $firebaseObject(rootRef.child('price6time'));
        $rootScope.price6three = $firebaseObject(rootRef.child('price6three'));
        $rootScope.price6four = $firebaseObject(rootRef.child('price6four'));
        $rootScope.price6five = $firebaseObject(rootRef.child('price6five'));

        $rootScope.price7time = $firebaseObject(rootRef.child('price7time'));
        $rootScope.price7three = $firebaseObject(rootRef.child('price7three'));
        $rootScope.price7four = $firebaseObject(rootRef.child('price7four'));
        $rootScope.price7five = $firebaseObject(rootRef.child('price7five'));

        $rootScope.price8time = $firebaseObject(rootRef.child('price8time'));
        $rootScope.price8three = $firebaseObject(rootRef.child('price8three'));
        $rootScope.price8four = $firebaseObject(rootRef.child('price8four'));
        $rootScope.price8five = $firebaseObject(rootRef.child('price8five'));
    });


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
        $scope.videoHeight = $scope.displayHeight / 1.5;
        $scope.mapHeight = $scope.displayHeight / 1.5;

        $scope.adminHeight = viewportheight - 103;
    }

    function getWindowWidth() {
        var viewportWidth;
        if (typeof window.innerHeight != 'undefined') {
            viewportWidth = window.innerWidth
        }
        else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientHeight !=
            'undefined' && document.documentElement.clientHeight != 0) {
            viewportWidth = document.documentElement.clientWidth
        }
        else {
            viewportWidth = document.getElementsByTagName('body')[0].clientWidth
        }


        $scope.viewportWidth = viewportWidth;
        $scope.moreHeight = $scope.viewportWidth /2;
    }

    function onScroll() {
        var scroll = $(window).scrollTop();

        $scope.moveReady = 0;

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
        getWindowWidth();
        var iOS = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);

        if( iOS ) {
            console.log('iOS: ');
            $scope.ios = true;
        } else {
            console.log('not iOS');
            $scope.ios = false;
        }
    });



    window.addEventListener('resize', function () {
        getWindowHeight();
        getWindowWidth();
    });



}]).value('duScrollOffset', 50);


