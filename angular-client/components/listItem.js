angular.module('app')
.component('listItem', {
  bindings: {
    brewery: '<',
  },
  controller: function() {
  },
  templateUrl: '/templates/list-item.html'
});