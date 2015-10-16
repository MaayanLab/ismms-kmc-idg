var mod = angular.module('app', [
    'ngRoute'
]);

mod.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/layout/main-container.html'
        }).
        /* Default */
        otherwise({
            redirectTo: '/'
        });
}
]);

mod.run(function ($rootScope, $location, $anchorScroll) {
    $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
        if ($location.hash()) {
            setTimeout(function () {
                $anchorScroll();
            }, 100);
        }
    });
});