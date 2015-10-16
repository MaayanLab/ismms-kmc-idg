angular.module('tools', []).controller('ToolController', ['$scope', function($scope) {

    $scope.tools = [
        {
            name: 'Harmonizome',
            description: 'Built on top of information about genes and proteins from 114 datasets, the Harmonizome is a knowledge engine for a diverse set of integrated resources.',
            url: 'http://amp.pharm.mssm.edu/Harmonizome',
            logo: 'harmonizome.png'
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
            logo: ''
        },
        {
            name: 'Harmonizome Phone App',
            description: '',
            url: '',
            logo: ''
        }
    ];
}]);