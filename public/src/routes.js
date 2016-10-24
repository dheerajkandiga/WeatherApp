/**
 * Created by nagesh on 9/10/2016.
 */

//routes

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            controller :'homeController',
            templateUrl : 'views/home.html'
        })
        .when('/forecast',{
            controller :'forecastController',
            templateUrl : 'views/forecast.html'
        })
        .when('/forecast/:days',{
            controller :'forecastController',
            templateUrl : 'views/forecast.html'
        })

});
