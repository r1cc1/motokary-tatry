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

    $scope.mainTitle = 'Ready to Win?';

    $scope.category_1 = 'News';
    $scope.category_2 = 'Records';
    $scope.category_3 = 'Video';
    $scope.category_4 = 'Open Hours';
    $scope.category_5 = 'Info';
    $scope.category_6 = 'Photos';
    $scope.category_7 = 'Prices';
    $scope.category_8 = 'Map';

    $scope.newsText = 'Reservations can be accepted ONLY BY PHONE CALL on number +421 949 388 748 after 2 p.m every day.  If you want to use discount coupon, you have to print it before arrival. We do not accept digital version. We are looking forward to see you soon, Motokary Tatry Team';

    $scope.driverTime = 'Time';
    $scope.driverName = 'Name';

    $scope.motoTitle = 'Track and go karts';
    $scope.motoText1 = 'Our go karts are equipped with Honda GX 200 (6,5 HP) and Honda GX 270 (9 HP). In order to drive 9HP go kart, you must finish at the certain time limit on 6,5 HP go kart.';
    $scope.motoText2 = 'Track distance is 230 meters where track width is from 3.5 till 5.5 meters. It is possible to achieve 30 km/h average speed. Constant change of technical and fast track parts will definitely fulfill your expectations.';


    $scope.oneKart = '1 Kart';
    $scope.threeKart = '3 Karts';
    $scope.fourKart = '4 Karts';
    $scope.fiveKart = '5 Karts';

    $scope.maskSell = 'Hygienic mask for sell 2,00 €';
    $scope.maskRent = 'Hygienic mask for rent 1,00 €';

    $scope.highlightText2 = 'You can enjoy our Bar and we organise team-buildings for companies on demand';

    $scope.mapText = 'Go Kart Tatry is located on the second floor of the former production hall in Svit (see map), driving go karts will provide you high quality entertainment.';

    $scope.day1 = 'Monday';
    $scope.day2 = 'Tuesday';
    $scope.day3 = 'Wednesday';
    $scope.day4 = 'Thursday';
    $scope.day5 = 'Friday';
    $scope.day6 = 'Saturday';
    $scope.day7 = 'Sunday';

    $scope.warningTitle = 'Operating Instructions:';

    $scope.rulesText0 = 'All the visitors must be informed with the following rules. If a visitor takes a ride, he/she automatically accepts and follows the rules.';
    $scope.rulesText1 = 'Getting on/off a go-cart is permitted only at the depot advised by the staff';
    $scope.rulesText2 = 'Driving in/out of the depot is permissible only with the approval of the staff';
    $scope.rulesText3 = 'Drive through the depot slowly';
    $scope.rulesText4 = 'In a case of a collision, getting out the go-cart is strictly prohibited. You can raise your hand, and the staff will help you out the collision';
    $scope.rulesText5 = 'Any kind of contact with the other go-carts is prohibited';
    $scope.rulesText6 = 'While driving, hold the steering wheel with both hands';
    $scope.rulesText7 = 'Do not step or walk on the track';

    $scope.rulesText8 = 'Respect all safety instructions from staff';
    $scope.rulesText9 = 'Visitors under 15 must be accompanied by his/her parent';
    $scope.rulesText10 = 'While driving, every visitor must wear mask and helmet';
    $scope.rulesText11 = 'Any shawls and large clothing cannot be worn during the ride. Take any valuable items  out of your pockets';
    $scope.rulesText12 = 'Be careful, at the back of the go-cart seat is hot exhaust stroke. Damage to you or your personnel things is your responsibility';
    $scope.rulesText13 = 'Drive responsibly and fit your ride to your abilities';
    $scope.rulesText14 = 'Any damage to your health or property is your own responsibility';
    $scope.rulesText15 = 'By purchasing the ride you agree on our rules';
    $scope.rulesText16 = 'If you do not follow our instructions, we may finish your ride earlier without any pay back';


    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', './svk/top-year.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    function loadTopMonth(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', './svk/top-month.json', true); // Replace 'my_data' with the path to your file
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

                $('#top-12-year').append( '<tr>'+
                    driverId + driverTime + driverName
                    + '</tr>');
            });

            $('#top-12-year').find('tr').first().addClass('first-place');
        });


        loadTopMonth(function(response) {
            // Parse JSON string into object
            var actual_JSON = JSON.parse(response);

            $.each(actual_JSON, function (index, value) {
                var driverId = '<td>' + value.id + '</td>';
                var driverName = '<td>' + value.name + '</td>';
                var driverTime = '<td>' + value.time + '</td>';

                $('#top-12').append( '<tr>'+
                    driverId + driverTime + driverName
                    + '</tr>');
            });

            $('#top-12').find('tr').first().addClass('first-place');
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