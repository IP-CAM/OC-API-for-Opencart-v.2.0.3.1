app.controller('customersCtrl', function($scope, $http) {
  var req = {
             method: 'POST',
             url: 'http://localhost/oc-api/opencart/index.php?route=api/login/',
                 transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
              },
             data: {
                      username: 'F35In5kqf2aXSSab5dO9dMlXFJQhb5dgzYocTOJzHkNZ3n1yGGxjSZ6XjN5AIYg8',
                      password: 'xKbGZk5gKI5Dvx123pbLFXjokfot4KsrUJxuttQ41M7n9zf2f6EkUoO5K3pEDXvYhiIRSZLKlJxl8TedQjEkNTgYMMcQjNoGwxXENjOysCarV4LldPMrjtFv5hBevqlhe9mrj1gR368P0J0UZDB8wHtrpvMacy86ykoXbKoVHnk8xbSMeULRb48GqLhJAfGyFuLh502CdcAQ3TdYnopEjoLQzsZzNfoTPz1LptNJMOaGh3eLiJPHybYnKxdYSHsi'
                    },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
    $http(req).success(function(response) {$scope.pesan = response.success;});
    $http.get("http://localhost/oc-api/opencart/index.php?route=api/product/").success(function(response) {$scope.products = response.products;});
});
