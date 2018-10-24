angular.module('app')
.service('revs', function($http) {
   this.getReviews = function(callback) {
    $http({
      url: '/items',
      method: 'GET',
      headers: {
        async: true,
        crossDomain: true,
      }
    }).then(function(data) {
        console.log(data, 'got reviews from db');
        callback(data);
    })
    .catch(function(err) {
      console.log('error fetching reviews');
    });
  };
});