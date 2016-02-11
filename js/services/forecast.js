/**
 * Created by Mig on 12-Feb-16.
 */
app.factory('forecast', ['$http', function ($http) {
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);
