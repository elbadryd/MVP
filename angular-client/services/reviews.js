angular.module('app')
  .service('postReview', function ($http) {
     this.add = function (name, brewery, message, callback) {
      
      var req = {
        url: '/reviews',
        method: 'POST',
        headers: {
          async: true,
          crossDomain: true,
        },
        data: { 
          name: name,
          brewery: brewery,
          message: message,
        }
      }
      $http(req).then((data)=>{
        console.log(data, 'review posted');
        callback(data);
      })
        .catch(function (err) {
          console.log(err, 'error posting review');
        });
    };
  });