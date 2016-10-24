/**
 * Created by nagesh on 9/10/2016.
 */
//Controllers

app.controller('homeController',['$scope','weatherService','$location', function ($scope, weatherService, $location) {

    $scope.city= weatherService.city;
    $scope.$watch('city',function () {
        weatherService.city=$scope.city;
    });

    $scope.submit = function () {
        $location.path("/forecast");
    }

}]);

app.controller('forecastController',['$scope','$resource','weatherService','$http','$routeParams','newService',
    function ($scope, $resource,weatherService, $http, $routeParams, newService) {

        $scope.city=weatherService.city;
        $scope.days = $routeParams.days || 1;

        $scope.weatherResults = newService.getWeather($scope.city,$scope.days)
            .then(function success(response) {
                    $scope.weatherAPI = response.data;
                     console.log($scope.weatherAPI);
                 }, function error(response) {
            $scope.weatherResult = response.statusCode;
            $scope.weatherResult = response.statusText;
        });



        // $scope.weatherResult = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.city +
        //         '&cnt='+$scope.days +
        //         '&appid=b38b84da2b63dcd73450cd63888ebcb2')
        //     .then(function success(response) {
        //         $scope.weatherAPI = response.data;
        //         console.log($scope.weatherAPI);
        //     }, function error(response){
        //         $scope.weatherResult = response.statusCode;
        //         $scope.weatherResult = response.statusText;
        //     });


        // $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback:"JSON_CALLBACK"},
        //     {get:{method:"JSONP"}});
        //
        // $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt : 2, appid: 'b38b84da2b63dcd73450cd63888ebcb2'});
        //
        //
        // console.log($scope.weatherResult);

        $scope.convertToFahrenheit = function (degk) {
            return Math.round((1.8 *(degk - 273)) + 32);
        }
        $scope.convertToDate = function (dta) {
            return new Date(dta * 1000);
        }


    }]);