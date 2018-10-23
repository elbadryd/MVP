angular.module('app')
  .component('review', {
    bindings: {
      update: '<',
    },
    controller: function (postReview) {
      this.updateReviews = function () {
       postReview.add(this.name, this.brewery, this.msg, this.update)
      };
    }, templateUrl: '/templates/review.html'
  });