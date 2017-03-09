'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

    function getWindowHeight() {
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
        var firstView = document.getElementById("header-content");
        firstView.style.height = (viewportheight -40) + 'px';
    }
    getWindowHeight();


    function getWindowHeightiFrame() {
        var viewportwidth;
        if (typeof window.innerWidth != 'undefined')
        { viewportwidth = window.innerWidth }

        else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientHeight !=
            'undefined' && document.documentElement.clientHeight != 0)
        {  viewportwidth = document.documentElement.clientWidth }
        else{
            viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
        }
        var youtube = document.getElementById("youtube");
        var newVideoHeight = ((viewportwidth / 3) * 1.65);

        console.log(newVideoHeight);
        youtube.height = newVideoHeight + 'px';

        $("#google-map").height(newVideoHeight);
    }
    getWindowHeightiFrame();


    window.addEventListener('resize', function(event){
        getWindowHeight();
        getWindowHeightiFrame();
    });


    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', './view1/top-12-year.json', true); // Replace 'my_data' with the path to your file
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
        xobj.open('GET', './view1/prices.json', true);
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

                console.log(value.id);
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

    $(document).ready(function () {
      init();
    });

    var mapDiv = $(".map");
    mapDiv.click(function () {
        $('.map iframe').css("pointer-events", "auto");
    });

    mapDiv.mouseleave(function() {
        $('.map iframe').css("pointer-events", "none");
    });

}]);