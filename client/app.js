(function() {
  
  var app = angular.module("app", ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider){

    $routeProvider
      .when('/add', {
        templateUrl: 'addProperty/addProperty.html',
        controller: 'addPropertyCtrl',
        controllerAs: 'ctrl',
      })
      .when('/about', {
        templateUrl: 'about/about.html',
      })
      .when('/', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardCtrl',
        controllerAs: 'ctrl',
      })
  }]);

})();