'use strict';

angular.module('myApp.eng', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/eng', {
    templateUrl: 'svk/svk.html',
    controller: 'engCtrl'
  });
}]).controller('engCtrl', [ '$scope', function($scope) {

    console.log('init engCtrl');
    $scope.lang = 'eng';

    console.log($scope.lang);

    $scope.category_1 = 'Records';
    $scope.category_2 = 'News';
    $scope.category_3 = 'Video';
    $scope.category_4 = 'Open Hours';
    $scope.category_5 = 'Info';
    $scope.category_6 = 'Prices';
    $scope.category_7 = 'Map';

    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', './svk/top-12-year.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    function loadPrices(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', './svk/prices.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    function init() {

        function getDate() {
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";

            var d = new Date();
            var n = month[d.getMonth()];

            $scope.actualMonth = n;
            console.log($scope.actualMonth);
        }
        getDate();

        loadJSON(function(response) {
            // Parse JSON string into object
            var actual_JSON = JSON.parse(response);

            $.each(actual_JSON, function (index, value) {
                var driverId = '<td>' + value.id + '</td>';
                var driverName = '<td>' + value.name + '</td>';
                var driverTime = '<td>' + value.time + '</td>';

                $('#top-12').append( '<tr>'+
                    driverId + driverTime + driverName
                    + '</tr>');

                $('#top-12-year').append( '<tr>'+
                    driverId + driverTime + driverName
                    + '</tr>');
            });
            $('#top-12').find('tr').first().addClass('first-place');
            $('#top-12-year').find('tr').first().addClass('first-place');
        });

        loadPrices(function(response) {
            var actual_JSON = JSON.parse(response);

            $.each(actual_JSON, function (index, value) {
                var priceId = '<td>' + value.id + '</td>';
                var priceTime = '<td>' + value.time + '</td>';
                var price6hp = '<td>' + value.small + '</td>';
                var price9hp = '<td>' + value.big + '</td>';

                //console.log(value.id);
                if (value.id === '1') {
                    $('#prices-table-1').append( '<tr>'+
                        priceTime + price6hp + price9hp
                        + '</tr>');
                }
            });

            $.each(actual_JSON, function (index, value) {
                var priceId = '<td>' + value.id + '</td>';
                var priceTime = '<td>' + value.time + '</td>';
                var price3 = '<td>' + value.three + '</td>';
                var price4 = '<td>' + value.four + '</td>';
                var price5 = '<td>' + value.five + '</td>';

                if (value.id === '6') {
                    $('#prices-table-2').append( '<tr>'+ priceTime +
                        price3 + price4 + price5
                        + '</tr>');
                }
            });
        });

        var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
        var hamburgers = document.querySelectorAll(".hamburger");
        if (hamburgers.length > 0) {
            forEach(hamburgers, function(hamburger) {
                hamburger.addEventListener("click", function() {
                    this.classList.toggle("is-active");
                }, false);
            });
        }
    }


    var mapDiv = jQuery("#map");
    mapDiv.click(function () {
        jQuery('#map iframe').css("pointer-events", "auto");
        console.log('click')
    });

    mapDiv.mouseleave(function() {
        jQuery('#map iframe').css("pointer-events", "none");
        console.log('mouseleave')
    });

    $(document).ready(function () {
        init();
        $(this).scrollTop(0);
        $scope.isLoaded = true;
        $scope.$apply();
    });

}]);