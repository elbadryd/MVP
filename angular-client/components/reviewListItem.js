angular.module('app')
  .component('reviewListItem', {
    bindings: {
      review: '<',
    },
    controller: function () {
    },
    templateUrl: '/templates/review-list.html'
  });