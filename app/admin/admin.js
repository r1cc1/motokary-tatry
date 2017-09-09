'use strict';

angular.module('myApp.admin', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/admin', {
    templateUrl: 'admin/admin.html',
    controller: 'adminCtrl'
  });

}]).controller('adminCtrl', [ '$scope','$rootScope', function($scope, $rootScope) {

    console.log('init adminCtrl');
    // set Language
    $scope.lang = 'svk';

    $scope.adminLogin = true;
    $scope.adminCenter = false;
    $scope.adminUser = 'admin@motokarytatry.sk';

    $scope.adminPass = 'admin123gnmt';

    $scope.logMeIn = function (loginEmail, loginPass) {
        if(loginEmail === $scope.adminUser) {
            console.log('MSG: good-email');

            if(loginPass === $scope.adminPass) {
                console.log('MSG: good-pass');
                /// open dashboard
                $scope.adminCenter = true;
                /// close Login
                $scope.adminLogin = false;
            } else {
                console.log('ERROR: wrong-pass');
                $scope.showError = true;
                $scope.adminCenter = false;
                $scope.adminLogin = true;
                return;
            }

        }else {
            $scope.showError = true;
            console.log('wrong-email');
            $scope.adminLogin = true;
            $scope.adminCenter = false;
        }
    };


    $scope.formsubmit = function () {

        /// news
        console.log('newsTextsk.$value ' + $scope.newsTextsk.$value);
        $scope.newsTextsk.$save();
        console.log('newsTexten.$value ' + $scope.newsTexten.$value);
        $scope.newsTexten.$save();

        /// cena
        console.log('maskSellPrice.$value ' + $scope.maskSellPrice.$value);
        $scope.maskSellPrice.$save();
        console.log('maskRentPrice.$value ' + $scope.maskRentPrice.$value);
        $scope.maskRentPrice.$save();

        /// cena
        console.log('maskSellPrice.$value ' + $scope.maskSellPrice.$value);
        $scope.maskSellPrice.$save();
        console.log('maskRentPrice.$value ' + $scope.maskRentPrice.$value);
        $scope.maskRentPrice.$save();



        /// top driver TIMES
        $scope.topYear1name.$save();
        $scope.topYear1time.$save();
        $scope.topYear2name.$save();
        $scope.topYear2time.$save();
        $scope.topYear3name.$save();
        $scope.topYear3time.$save();
        $scope.topYear4name.$save();
        $scope.topYear4time.$save();
        $scope.topYear5name.$save();
        $scope.topYear5time.$save();

        console.log('topYear1name.$value ' + $scope.topYear1name.$value);
        console.log('topYear1time.$value ' + $scope.topYear1time.$value);
        console.log('topYear2name.$value ' + $scope.topYear2name.$value);
        console.log('topYear2time.$value ' + $scope.topYear2time.$value);
        console.log('topYear3name.$value ' + $scope.topYear3name.$value);
        console.log('topYear3time.$value ' + $scope.topYear3time.$value);
        console.log('topYear4name.$value ' + $scope.topYear4name.$value);
        console.log('topYear4time.$value ' + $scope.topYear4time.$value);
        console.log('topYear5name.$value ' + $scope.topYear5name.$value);
        console.log('topYear5time.$value ' + $scope.topYear5time.$value);


        $scope.topMonth1name.$save();
        $scope.topMonth1time.$save();
        $scope.topMonth2name.$save();
        $scope.topMonth2time.$save();
        $scope.topMonth3name.$save();
        $scope.topMonth3time.$save();
        $scope.topMonth4name.$save();
        $scope.topMonth4time.$save();
        $scope.topMonth5name.$save();
        $scope.topMonth5time.$save();

        console.log('topMonth1name.$value ' + $scope.topMonth1name.$value);
        console.log('topMonth1time.$value ' + $scope.topMonth1time.$value);
        console.log('topMonth2name.$value ' + $scope.topMonth2name.$value);
        console.log('topMonth2time.$value ' + $scope.topMonth2time.$value);
        console.log('topMonth3name.$value ' + $scope.topMonth3name.$value);
        console.log('topMonth3time.$value ' + $scope.topMonth3time.$value);
        console.log('topMonth4name.$value ' + $scope.topMonth4name.$value);
        console.log('topMonth4time.$value ' + $scope.topMonth4time.$value);
        console.log('topMonth5name.$value ' + $scope.topMonth5name.$value);
        console.log('topMonth5time.$value ' + $scope.topMonth5time.$value);



        $scope.price1time.$save();
        $scope.price1small.$save();
        $scope.price1big.$save();

        console.log('price1time.$value ' + $scope.price1time.$value);
        console.log('price1small.$value ' + $scope.price1small.$value);
        console.log('price1big.$value ' + $scope.price1big.$value);

        $scope.price2time.$save();
        $scope.price2small.$save();
        $scope.price2big.$save();

        console.log('price2time.$value ' + $scope.price2time.$value);
        console.log('price2small.$value ' + $scope.price2small.$value);
        console.log('price2big.$value ' + $scope.price2big.$value);

        $scope.price3time.$save();
        $scope.price3small.$save();
        $scope.price3big.$save();

        console.log('price3time.$value ' + $scope.price3time.$value);
        console.log('price3small.$value ' + $scope.price3small.$value);
        console.log('price3big.$value ' + $scope.price3big.$value);

        $scope.price4time.$save();
        $scope.price4small.$save();
        $scope.price4big.$save();

        console.log('price4time.$value ' + $scope.price4time.$value);
        console.log('price4small.$value ' + $scope.price4small.$value);
        console.log('price4big.$value ' + $scope.price4big.$value);


        $scope.price5time.$save();
        $scope.price5three.$save();
        $scope.price5four.$save();
        $scope.price5five.$save();

        console.log('price5time.$value ' + $scope.price5time.$value);
        console.log('price5three.$value ' + $scope.price5three.$value);
        console.log('price5four.$value ' + $scope.price5four.$value);
        console.log('price5five.$value ' + $scope.price5five.$value);


        $scope.price6time.$save();
        $scope.price6three.$save();
        $scope.price6four.$save();
        $scope.price6five.$save();

        console.log('price6time.$value ' + $scope.price6time.$value);
        console.log('price6three.$value ' + $scope.price6three.$value);
        console.log('price6four.$value ' + $scope.price6four.$value);
        console.log('price6five.$value ' + $scope.price6five.$value);

        $scope.price7time.$save();
        $scope.price7three.$save();
        $scope.price7four.$save();
        $scope.price7five.$save();

        console.log('price7time.$value ' + $scope.price7time.$value);
        console.log('price7three.$value ' + $scope.price7three.$value);
        console.log('price7four.$value ' + $scope.price7four.$value);
        console.log('price7five.$value ' + $scope.price7five.$value);


        $scope.price8time.$save();
        $scope.price8three.$save();
        $scope.price8four.$save();
        $scope.price8five.$save();

        console.log('price8time.$value ' + $scope.price8time.$value);
        console.log('price8three.$value ' + $scope.price8three.$value);
        console.log('price8four.$value ' + $scope.price8four.$value);
        console.log('price8five.$value ' + $scope.price8five.$value);

    };

    //// custom Texts
    $scope.mainTitle = 'Ready to Win?';

    $scope.category_1 = 'Aktuality';
    $scope.category_2 = 'Rekordy';
    $scope.category_3 = 'Video';
    $scope.category_4 = 'Otváracie Hodiny';
    $scope.category_5 = 'Info';
    $scope.category_6 = 'Fotky';
    $scope.category_7 = 'Cenník';
    $scope.category_8 = 'Mapa';

    //$scope.newsText = 'Dňa 17.4.2017 bude Hala celý deň zatvorená. Prajeme príjemné Veľkonočné sviatky. Rezervácie a informácie s tým spojené prijímame IBA TELEFONICKY na O2 čísle 0949 388 748 po 14.00 hod každý deň. Ak chcete jazdiť na zľavnený kupón, musíte ho doniesť vytlačený. My netlaćíme a ani neakceptujeme fotky v mobile... Tešíme sa na Vašu návštevu, Motokary Tatry Team';

    $scope.driverTime = 'Čas';
    $scope.driverName = 'Meno';

    $scope.motoTitle = 'Dráha a motokáry';
    $scope.motoText1 = 'V našom motokárovom parku máme motokáry s motorom Honda GX 200 (s výkonom 6,5 HP) a Honda GX 270 (s výkonom 9 HP). Aby ste si mohli vychutnať pocit z jazdy na 9 koňovej motokáre, musíte splniť časový limit na 6,5 ke.';
    $scope.motoText2 = 'Dĺžka dráhy je 230 metrov pri šírke dráhy od 3,5 metra až do 5,5 metra. Na trati je možné dosiahnuť priemernú rýchlosť nad 30 km/h. Striedavé technické úseky s rovinkou Vám zaručene splnia Vaše očakávania.';

    $scope.oneKart = '1 Kára';
    $scope.threeKart = '3 Káry';
    $scope.fourKart = '4 Káry';
    $scope.fiveKart = '5 Kár';


    $scope.maskSell = 'Hygienická kukla predaj ';
    $scope.maskRent = 'Hygienická kukla prenájom ';

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


    // function loadTopYear(callback) {
    //
    //     var xobj = new XMLHttpRequest();
    //     xobj.overrideMimeType("application/json");
    //     xobj.open('GET', './svk/top-year.json', true); // Replace 'my_data' with the path to your file
    //     xobj.onreadystatechange = function () {
    //         if (xobj.readyState == 4 && xobj.status == "200") {
    //             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
    //             callback(xobj.responseText);
    //         }
    //     };
    //     xobj.send(null);
    // }
    //

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


        // loadTopYear(function(response) {
        //     // Parse JSON string into object
        //     var actual_JSON = JSON.parse(response);
        //
        //     $.each(actual_JSON, function (index, value) {
        //         var driverId = '<td>' + value.id + '</td>';
        //         var driverName = '<td>' + value.name + '</td>';
        //         var driverTime = '<td>' + value.time + '</td>';
        //
        //         $('#top-12-year').append( '<tr>'+
        //             driverId + driverTime + driverName
        //             + '</tr>');
        //     });
        //
        //     $('#top-12-year').find('tr').first().addClass('first-place');
        //
        //     $scope.recordTime = actual_JSON[0].time;
        //     $scope.$apply();
        // });

        //
        // $scope.loadPrices = function() {
        //     console.log('newLoadPrices');
        //     console.log($scope.prices);
        //
        //     $.each($scope.prices, function (index, value) {
        //         var priceId = '<td>' + value.id + '</td>';
        //         var priceTime = '<td>' + value.time + '</td>';
        //         var price6hp = '<td>' + value.small + '</td>';
        //         var price9hp = '<td>' + value.big + '</td>';
        //
        //         console.log(value.id);
        //         if (value.id === '1') {
        //             $('#prices-table-1').append( '<tr>'+
        //                 priceTime + price6hp + price9hp
        //                 + '</tr>');
        //         }
        //     });
        //
        //     $.each($scope.prices, function (index, value) {
        //         var priceId = '<td>' + value.id + '</td>';
        //         var priceTime = '<td>' + value.time + '</td>';
        //         var price3 = '<td>' + value.three + '</td>';
        //         var price4 = '<td>' + value.four + '</td>';
        //         var price5 = '<td>' + value.five + '</td>';
        //
        //         if (value.id === '6') {
        //             $('#prices-table-2').append( '<tr>'+ priceTime +
        //                 price3 + price4 + price5
        //                 + '</tr>');
        //         }
        //     });
        // };


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



    jQuery(window).scroll(function() {

        var scroll = $(window).scrollTop();
        if (scroll >= 0) {
            jQuery(".navbar-default").removeClass("navbar-start");
            jQuery(".navbar-default").addClass("navbar-default");
        } else {
            jQuery(".navbar-default").removeClass("navbar-start");
            jQuery(".navbar-default").addClass("navbar-default");
        }

    });

    angular.element(document).ready(function () {
        init();
        $(this).scrollTop(0);
        $scope.isLoaded = true;
        $scope.$apply();

    });

}]);