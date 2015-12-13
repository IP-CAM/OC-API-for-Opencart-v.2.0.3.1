var app = angular.module('afterlogin', ['ngRoute']);

app.directive('headerMain',function(){
  return{
    restrict : 'E',
    templateUrl : 'header.html'
  }
});
app.directive('footerMain',function(){
  return{
    restrict : 'E',
    templateUrl : 'footer.html'
  }
});

app.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider){
  $routeProvider
    .when('/detailProduct/:id',{
      templateUrl:'detailProduct.html',
      controller : 'productdetailCtrl'
    })
    .otherwise({
      templateUrl:'home.html',
      controller :'homeCtrl'
  });
  //routing DOESN'T work without html5Mode
  //$locationProvider.html5Mode(true);
}]);
