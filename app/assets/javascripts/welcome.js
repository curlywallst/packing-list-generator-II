$(document).ready(function() {
  $.get("/trips", function(response) {
    var trips = response;
    var tripsList = '<ul>';
    trips.forEach(function(trip) {
      tripsList += '<li><a href="/trips/' + trip["id"] + '">' + trip["title"] + '</a>'+ " - " + trip["year"] + '</li>';
    });
    tripsList += '</ul>'
    $("#trips").html(tripsList);
  });

  $.get("/categories", function(response) {
    var categories = response;
    var categoriesList = '<fieldset><legend>Trips by Category</legend><ul>';
    categories.forEach(function(category) {
      categoriesList += '<li><a href="/categories/' + category["id"] + '">' + category["name"] + '</a></li>';
    });
    categoriesList+='</ul></fieldset>'
    $("#categories").html(categoriesList);
  });

})
