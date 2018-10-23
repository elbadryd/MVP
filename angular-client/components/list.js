angular.module('app')
.component('list', {
  bindings: {
    items: '<',
  },
  controller: function() {
    console.log(this.items)
  },
  templateUrl: '/templates/list.html'
});