'use strict';

angular.module('myApp.svk', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/svk', {
    templateUrl: 'svk/svk.html',
    controller: 'svkCtrl'
  });

}]).controller('svkCtrl', [ '$scope', function($scope) {

    console.log('init svkCtrl');
    // set Language
    $scope.lang = 'svk';

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
                if (value.id === '3') {
                    $('#prices-table-2').append( '<tr>'+
                        priceTime + price6hp + price9hp
                        + '</tr>');
                }
                if (value.id === '4') {
                    $('#prices-table-3').append( '<tr>'+
                        priceTime + price6hp
                        + '</tr>');
                }
                if (value.id === '5') {
                    $('#prices-table-4').append( '<tr>'+
                        priceTime + price6hp
                        + '</tr>');
                }
            });
        });
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
    });

}]);