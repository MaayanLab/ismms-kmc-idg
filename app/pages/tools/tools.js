angular.module('tools', []).controller('ToolController', ['$scope', function($scope) {

    $scope.test = 2;

    $scope.tools = [
        {
            name: 'Harmonizome',
            description: '',
            url: '',
            target: '',
            logo: ''
        },
        {
            name: 'KEA2',
            description: '',
            url: '',
            target: '',
            logo: ''
        },
        {
            name: 'Network Visualization of the Target Families',
            description: '',
            url: '',
            target: '',
            logo: ''
        },
        {
            name: 'Harmonizome Phone App',
            description: '',
            url: '',
            target: '',
            logo: ''
        }
    ];
}]);