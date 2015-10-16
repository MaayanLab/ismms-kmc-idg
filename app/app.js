angular.module('app', [
    'ngRoute',
    'about',
    'caseStudies',
    'nav',
    'publications',
    'tools'
]);

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/pages/landing/landing.html'
        }).

        when('/about', {
            templateUrl: 'app/pages/about/about.html'
        }).
        when('/case-studies', {
            templateUrl: 'app/pages/case-studies/case-studies.html'
        }).
        when('/publications', {
            templateUrl: 'app/pages/publications/publications.html'
        }).
        when('/tools', {
            templateUrl: 'app/pages/tools/tools.html'
        }).

        otherwise({
            redirectTo: '/'
        });
    }
]);

angular.module('app').run(function ($rootScope, $location, $anchorScroll) {
    $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
        if ($location.hash()) {
            setTimeout(function () {
                $anchorScroll();
            }, 100);
        }
    });
});