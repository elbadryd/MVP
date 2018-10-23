angular.module('app', [])
.service('brew', function($http) {
  this.getAll = function(query, callback) {
    $http.get('/breweries', {
      async: true,
      crossDomain: true,
      params: {
        by_city: query,
      }
    }).then(function(data) {
        console.log(data, 'got brew data');
        callback(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});