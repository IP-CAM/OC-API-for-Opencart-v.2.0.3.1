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

app.config(function($routeProvider){
  $routeProvider
    .when('/detailProduct/:id',{
      templateUrl:'detailProduct.html'
    })
    .otherwise({
      templateUrl:'home.html',
      controller :'customersCtrl'
  });
  //routing DOESN'T work without html5Mode
  //$locationProvider.html5Mode(true);
});
