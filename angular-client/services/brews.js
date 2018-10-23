angular.module('app')
.service('brew', function($http) {
   this.getAll = function(city, state, callback) {
    $http.get('/breweries', {
      async: true,
      crossDomain: true,
      params: {
        by_city: city,
        by_state: state
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