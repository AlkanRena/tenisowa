var appCmd = angular.module('infoShowApp', []);

appCmd.controller('menuController', function menuController($scope){

    $scope.upLeftInfo = true;
    $scope.upMiddleInfo = true;
    $scope.upRightInfo = true;
    $scope.middleLeftInfo = true;
    $scope.middleRightInfo = true;
    $scope.bottomLeftInfo = true;
    $scope.bottomMiddleInfo = true;
    $scope.bottomRightInfo = true;

});

appCmd.directive('upLeftDir', function () {
    return {
        restrict: 'AE',
        templateUrl: 'html/upLeftInfo.html'
    }
});

appCmd.directive('up-middle', function () {
    return {
        restrict: 'E',
        templateUrl: html/upMiddleInfo.html
    }
});

appCmd.directive('up-right', function () {
    return {
        restrict: 'E',
        templateUrl: html/upRightInfo.html
    }
});

appCmd.directive('middle-left', function () {
    return {
        restrict: 'E',
        templateUrl: html/middleLeftInfo.html
    }
});

appCmd.directive('middle-right', function () {
    return {
        restrict: 'E',
        templateUrl: html/upLeftInfo.html
    }
});

appCmd.directive('bottom-left', function () {
    return {
        restrict: 'E',
        templateUrl: html/upLeftInfo.html
    }
});

appCmd.directive('bottom-middle', function () {
    return {
        restrict: 'E',
        templateUrl: html/upLeftInfo.html
    }
});

appCmd.directive('bottom-right', function () {
    return {
        restrict: 'E',
        templateUrl: html/upLeftInfo.html
    }
});