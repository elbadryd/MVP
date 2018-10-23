angular.module('app')
  .component('search', {
    bindings: {
      update: '<',
    },
    controller: function (brew) {
      this.search = function () {
        brew.getAll(this.input, this.update);
      };
    },    templateUrl: '/templates/search.html'
  });