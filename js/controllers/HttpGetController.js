/**
 * Created by Mig on 11-Feb-16.
 */
app.controller("HttpGetController", function ($scope, $http) {

    $scope.SendData = function () {
        // use $.param jQuery function to serialize data from JSON
        var data = $.param({
            username: $scope.username,
            password: $scope.password
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                //'Content-Type': 'application/json;charset=utf-8'
            }
        }

        $http.post('http://posttestserver.com/post.php', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };

});

//http://posttestserver.com/post.php
