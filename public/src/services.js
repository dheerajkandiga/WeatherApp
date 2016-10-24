/**
 * Created by nagesh on 9/10/2016.
 */
//services

app.service('weatherService',function () {

     this.city="London , LA";

});



 app.service('newService',[ '$http',function ($http) {

     this.getWeather = function (city, days) {
         var weatherAPI = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city +
             '&cnt=' + days +
             '&appid=b38b84da2b63dcd73450cd63888ebcb2');
         //console.log(weatherAPI);
         return weatherAPI;
     };

 }]);