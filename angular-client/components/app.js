angular.module('app')
.controller('AppCtrl', function(brew) {
  this.breweries = null,
  this.reviews = null,
  // brew.getAll((data) => {
  //   this.items = data;
  // });
  // this.searchResults = function (input) {
  //   brew.getAll(input, this.updateBrews);
  // }.bind(this);
  this.updateBrews = function (brews) {
    this.breweries = JSON.parse(brews.data.body);
    console.log(this.breweries)
  }.bind(this);
  this.updateReviews = function (reviews) {
    this.reviews = reviews;
  }
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});