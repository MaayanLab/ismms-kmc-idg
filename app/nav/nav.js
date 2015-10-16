angular.module('nav', []).controller('NavController', ['$scope', function($scope) {

    $scope.categories = [
        {
            title: 'About',
            url: '#/about#nav'
        },
        {
            title: 'Publications',
            url: '#/publications#nav'
        },
        {
            title: 'Case Studies',
            url: '#/case-studies#nav'
        },
        {
            title: 'Tools',
            url: '#/tools#nav'
        }
    ];
}]);