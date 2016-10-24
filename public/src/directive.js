/**
 * Created by nagesh on 9/10/2016.
 */
//Directive
app.directive("weatherDirective", function () {
    return{
        restrict : 'E',
        templateUrl : 'views/directive.html',
        scope :{
            dateFormat : "@",
            convertToStandard : "&",
            convertDate : "&",
            weatherObject : "="
        }
    }
});
