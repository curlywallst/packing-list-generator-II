$(document).ready(function() {
  $.get("/trips", function(response) {
    var trips = response;
    var tripsList = '<ul>';
    trips.forEach(function(trip) {
      tripsList += '<li><a href="#" class="js-trip" data-id="' + trip["id"] + '">' + trip["title"] + '</a>'+ " - " + trip["year"] + '</li>';
    });
    tripsList += '</ul>'
    $("#trips").html(tripsList);
  });

  $.get("/categories", function(response) {
    var categories = response;
    var categoriesList = '<fieldset><legend>Trips by Category</legend><ul>';
    categories.forEach(function(category) {
      categoriesList += '<li><a href="#" class="js-category" data-id="' + category["id"] + '">' + category["name"] + '</a>' + '</li>';
    });
    categoriesList+='</ul></fieldset>'
    $("#categories").html(categoriesList);
  });

  attachListeners()
})

function attachListeners() {
  $("#add").on('click', function() {
    debugger
    $('form').submit(function(event) {
      debugger
      event.preventDefault();
      var values = $(this).serialize();
      var posting = $.post('/trips', values)
      debugger
      posting.done(function(response){
        var trip = data
        $("#tripTitle").text(trip["title"])
        $("#tripDestination").text(trip["destination"])
        $("#tripYear").text(trip["year"])
        $("#tripNotes").text(trip["notes"])
      })
    })
  })

  $(".js-trip").on("click", function() {
    debugger
    var tripId = parseInt($(".js-trip").attr("data-id")) + 1;
    $.get("/trips/" + tripId + ".json", function(data) {
      var trip = data;
      $(".tripTitle").text(trip["title"]);
      $(".tripDestination").text(trip["destination"]);
      $(".tripYear").text(trip["year"]);
      $(".tripNotes").text(trip["notes"]);
      // re-set the id to current on the link
      $(".js-trip").attr("data-id", trip["id"]);
    });
  });
}
