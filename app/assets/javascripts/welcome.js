$(document).ready(function() {
  $.get("/trips").success(addTripsToPage)
  $.get("/categories").success(addCategoriessToPage)
})

function addTripsToPage(trips) {
  function Trip(tripJSON){
    this.title = tripJSON.title
    this.year = tripJSON.year
    this.id = tripJSON.id
  }

  Trip.prototype.tripHTML = function(){
    return `<li><a href="/trips/${this.id}">${this.title}</a> - ${this.year}</li>`
  }

  actualTrips = []

  trips.forEach(function(trip) {
    actualTrip = new Trip(trip)
    actualTrips.push(actualTrip)
  })

  html = "<ul>"

  actualTrips.forEach(function(actualTrip) {
    html += actualTrip.tripHTML()
  })

  html += "</ul>"

   $("#trips").html(html);
}

function addCategoriessToPage(categories) {
  function Category(categoryJSON){
    this.name = categoryJSON.name
    this.id = categoryJSON.id
  }

  Category.prototype.categoryHTML = function(){
    return `<li><a href="/categories/${this.id}">${this.name}</a></li>`
  }

  actualCategories = []

  categories.forEach(function(category) {
    actualCategory = new Category(category)
    actualCategories.push(actualCategory)
  })

  html = "<fieldset><legend>Trips by Category</legend><ul>"

  actualCategories.forEach(function(actualCategory) {
    html += actualCategory.categoryHTML()
  })

  html += '</ul></fieldset>'
  
   $("#categories").html(html);
}
