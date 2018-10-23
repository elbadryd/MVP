angular.module('app')
  .component('search', {
    bindings: {
      update: '<',
    },
    controller: function (brew) {
      this.search = function () {
        console.log(this)
        brew.getAll(this.input, this.input2, this.update);
      };
    },    templateUrl: '/templates/search.html'
  });