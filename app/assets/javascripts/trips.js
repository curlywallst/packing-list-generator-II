$(document).ready(function() {
  $.get("/trips", function(response) {
    var trips = response;
    var tripsList = '<ul>';
    trips.forEach(function(trip) {
      tripsList += '<li><a href="/trips/' + trip["id"] + '">' + trip["title"] + '</a>'+ " - " + trip["year"] + '</li>';
    });
    tripsList += '</ul>'
    $("#trips").html(tripsList);
    // attachTripListeners();
  });

  $.get("/categories", function(response) {
    var categories = response;
    var categoriesList = '<fieldset><legend>Trips by Category</legend><ul>';
    categories.forEach(function(category) {
      categoriesList += '<li><a href="#" data-id="' + category["id"] + '">' + category["name"] + '</a></li>';
    });
    categoriesList+='</ul></fieldset>'
    $("#categories").html(categoriesList);
    attachCategoryListeners();
  });

  attachListeners()
})

function attachListeners() {

  $("#add").on('click', function() {
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
}

// function attachTripListeners() {
//   $("#trips ul li a").on("click", function() {
//     var tripId = parseInt($(this).attr("data-id"));
//     $.get("/trips/" + tripId + ".json", function(response) {
//         $(this).load("/trips/" + tripId);
//         debugger
//         var trip = response
//         var tripInfo = "<h1><strong>" + trip.title + "</strong> - " + trip.year + " - Destination: " + trip.destination + "</h1>";
//         $("#tripInformation").html(tripInfo);
//
//     });
//   });
// }

function attachCategoryListeners() {
  $("#categories ul li a").on("click", function() {
    debugger

  });
}
