/**
 * Created by Mig on 12-Feb-16.
 */
app.controller('ForecastController', ['$scope', 'forecast', function ($scope, forecast) {
    forecast.success(function (data) {
        $scope.fiveDay = data;
    });
}]);