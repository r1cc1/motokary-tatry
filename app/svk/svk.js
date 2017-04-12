'use strict';

angular.module('myApp.svk', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/svk', {
    templateUrl: 'svk/svk.html',
    controller: 'svkCtrl'
  });

}]).controller('svkCtrl', [ '$scope','$rootScope', function($scope, $rootScope) {

    console.log('init svkCtrl');
    // set Language
    $scope.lang = 'svk';

    $scope.mainTitle = 'Ready to Win?';

    $scope.category_1 = 'Aktuality';
    $scope.category_2 = 'Rekordy';
    $scope.category_3 = 'Video';
    $scope.category_4 = 'Otváracie Hodiny';
    $scope.category_5 = 'Info';
    $scope.category_6 = 'Fotky';
    $scope.category_7 = 'Cenník';
    $scope.category_8 = 'Mapa';

    $scope.newsText = 'Rezervácie a informácie s tým spojené prijímame IBA TELEFONICKY na O2 čísle 0949 388 748 po 14.00 hod každý deň. Ak chcete jazdiť na zľavnený kupón, musíte ho doniesť vytlačený. My netlaćíme a ani neakceptujeme fotky v mobile... Tešíme sa na Vašu návštevu, Motokary Tatry Team';

    $scope.driverTime = 'Čas';
    $scope.driverName = 'Meno';

    $scope.motoTitle = 'Dráha a motokáry';
    $scope.motoText1 = 'V našom motokárovom parku máme motokáry s motorom Honda GX 200 (s výkonom 6,5 HP) a Honda GX 270 (s výkonom 9 HP). Aby ste si mohli vychutnať pocit z jazdy na 9 koňovej motokáre, musíte splniť časový limit na 6,5 ke.';
    $scope.motoText2 = 'Dĺžka dráhy je 230 metrov pri šírke dráhy od 3,5 metra až do 5,5 metra. Na trati je možné dosiahnuť priemernú rýchlosť nad 30 km/h. Striedavé technické úseky s rovinkou Vám zaručene splnia Vaše očakávania.';

    $scope.oneKart = '1 Kára';
    $scope.threeKart = '3 Káry';
    $scope.fourKart = '4 Káry';
    $scope.fiveKart = '5 Kár';

    $scope.maskSell = 'Hygienická kukla predaj 2,00 €';
    $scope.maskRent = 'Hygienická kukla prenájom 1,00 €';

    $scope.highlightText2 = 'Poskytujeme príjemné posedenie v bare a organizujeme firemné akcie na objednávku';

    $scope.mapText = 'Motokáry Tatry sa nachádzajú na druhom poschodí bývalej výrobnej haly vo Svite (viď mapu), kde poskytujeme kvalitnú adrenalínovú zábavu na motokárach.';

    $scope.day1 = 'Pondelok';
    $scope.day2 = 'Utorok';
    $scope.day3 = 'Streda';
    $scope.day4 = 'Štvrtok';
    $scope.day5 = 'Piatok';
    $scope.day6 = 'Sobota';
    $scope.day7 = 'Nedeľa';

    $scope.warningTitle = 'Prevádzkové pokyny:';

    $scope.rulesText0 = 'Každý návštevník je povinný pred použitím motokáry zoznámiť sa s týmito prevádzkovými a bezpečnostnými podmienkami. Prevzatím stroja od prevádzkovateľa (obsluhy) k jazde zákazník potvrdzuje, že sa s týmito podmienkami zoznámil a zaväzuje sa k ich dodržiavaniu.';
    $scope.rulesText1 = 'Nastupovanie do motokár a vystupovanie z motokár sa prevádza výhradne v priestoroch depa za pokynu personálu';
    $scope.rulesText2 = 'Výjazd z depa a príjazdy do depa riadi personál';
    $scope.rulesText3 = 'Pri vjazde do depa je povinnosť signalizácie (odbočenie) zdvihnutou rukou pri spomalenej jazde';
    $scope.rulesText4 = 'V prípade kolízie zákaz vystupovať z motokáry, môže dôjsť k ohrozeniu inou motokárou a následne k úrazu. Zdvihnutím ruky privoláte obslužný personál';
    $scope.rulesText5 = 'Pri jazde prísny zákaz akéhokoľvek kontaktu s inou motokárou';
    $scope.rulesText6 = 'Počas jazdy zákaz púšťania volantu a mávania rukami, prípadne nohami';
    $scope.rulesText7 = 'Prísny zákaz vstupu na dráhu';
    $scope.rulesText8 = 'Rešpektovať bezpečnostné a obslužné pokyny personálu';

    $scope.rulesText9 = 'Jazda maloletých do 15 rokov len v sprievode rodičov (zákonných zástupcov)';
    $scope.rulesText10 = 'Pri jazde je povinnosť používať hygienickú kuklu (možnosť zakúpiť pri bare) a ochrannú helmu, ktorá musí byť zapnutá.';
    $scope.rulesText11 = 'Zákaz jazdenia v nad-rozmernom oblečení ( veľké vetrovky, košele, šále, dlhé vlasy)';
    $scope.rulesText12 = 'Pozor na horúci výfuk!!! (hlavne pri vystupovaní) - v prípade poškodenia odevu nezodpovedáme za vzniknuté škody';
    $scope.rulesText13 = 'Zákaz jazdy pri podozrení použitia alkoholu, hypnotizujúcich a omamných látok';
    $scope.rulesText14 = 'V priestoroch dráhy a depa zákaz fajčenia a vstupu s pohármi';
    $scope.rulesText15 = 'Doporučujeme vo vlastnom záujme odloženie kľúčov, mobilných telefónov a iných cenností, ktoré môžu vypadnúť z vreciek';
    $scope.rulesText16 = 'V prípade nedodržania prevádzkových a bezpečnostných pokynov prevádzkovateľ nezodpovedá za škody vzniknuté na zdraví a majetku.';


    function loadTopYear(callback) {

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
            month[0] = "Január";
            month[1] = "Február";
            month[2] = "Marec";
            month[3] = "Apríl";
            month[4] = "Máj";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "August";
            month[8] = "September";
            month[9] = "Oktober";
            month[10] = "November";
            month[11] = "December";

            var d = new Date();
            var n = month[d.getMonth()];

            $scope.actualMonth = n;
        }
        getDate();


        loadTopYear(function(response) {
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

            $scope.recordTime = actual_JSON[0].time;
            $scope.$apply();
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