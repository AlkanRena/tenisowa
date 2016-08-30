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

appCmd.directive('upMiddle', function () {
    return {
        restrict: 'AE',
        templateUrl: 'html/upMiddleInfo.html'
    }
});

appCmd.directive('upRight', function () {
    return {
        restrict: 'AE',
        templateUrl: 'html/upRightInfo.html'
    }
});

appCmd.directive('middleLeft', function () {
    return {
        restrict: 'AE',
        templateUrl: 'html/middleLeftInfo.html'
    }
});

appCmd.directive('middleRight', function () {
    return {
        restrict: 'AE',
        templateUrl: 'html/middleRightInfo.html'
    }
});

appCmd.directive('bottomLeft', function () {
    return {
        restrict: 'AE',
        templateUrl: 'html/bottomLeftInfo.html'
    }
});

appCmd.directive('bottomMiddle', function () {
    return {
        restrict: 'AE',
        templateUrl: 'html/bottomMiddleInfo.html'
    }
});

appCmd.directive('bottomRight', function () {
    return {
        restrict: 'AE',
        templateUrl: 'html/bottomRightInfo.html'
    }
});