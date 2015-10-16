angular.module('nav', []).controller('NavController', ['$scope', '$element', function($scope, $element) {

    $scope.categories = [
        {
            title: 'About',
            url: '#/about#nav'
        },
        {
            title: 'Tools',
            url: '#/tools#nav'
        },
        {
            title: 'Publications',
            url: '#/publications#nav'
        }
    ];
}]);