angular.module('app', [])
  .service('postReview', function ($http) {
    this.add = function (name, brewery, message, callback) {
      $http.post('/reviews', {
        async: true,
        crossDomain: true,
        params: {
          name: name,
          brewery: brewery,
          message: message
        }
      }).then(function (data) {
        console.log(data, 'review posted');
        callback(data);
      })
        .catch(function (err) {
          console.log(err);
        });
    };
  });