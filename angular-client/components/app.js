angular.module('app')
.controller('AppCtrl', function(revs) {
  this.breweries = null,
  this.reviews = null,
  // brew.getAll((data) => {
  //   this.items = data;
  // });
  // this.searchResults = function (input) {
  //   brew.getAll(input, this.updateBrews);
  // }.bind(this);
  this.$onInit = function(){
    revs.getReviews(this.updateReviews)
    
  }.bind(this)
  this.updateBrews = function (brews) {
    this.breweries = JSON.parse(brews.data.body);
    this.reviews = null;
    console.log(this.breweries)
  }.bind(this);
  this.updateReviews = function (result) {
    this.reviews = result.data 
    console.log(this.reviews)
  }.bind(this);
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});