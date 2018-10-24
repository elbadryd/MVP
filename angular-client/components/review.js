angular.module('app')
  .component('review', {
    bindings: {
      update: '<',
      list: '<',
    },
    controller: function (postReview) {
      this.updateReviews = function () {
       postReview.add(this.name, this.brewery, this.msg, this.update)
       console.log(this.update)
      };
    }, templateUrl: '/templates/review.html'
  });