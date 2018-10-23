angular.module('app')
.service('reviews', function($http) {
   this.getReviews = function(callback) {
    $http.get('/', {
      async: true,
      crossDomain: true,
    }).then(function(data) {
        console.log(data, 'got reviews from db');
        callback(data);
    })
    .catch(function(err) {
      console.log('error fetching reviews');
    });
  };
});