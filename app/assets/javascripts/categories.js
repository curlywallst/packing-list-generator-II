$(function () {
  $.get("/categories", function(response) {
    var categories = response;
    var categoriesList = '<fieldset><legend>Trips by Category</legend><ul>';
    categories.forEach(function(category) {
      categoriesList += '<li><a href="#" class="category-selector" data-id="' + category.id + '">' + category.name + '</a></li>'
    });
    categoriesList+='</ul></fieldset>'
    $("#categories_list").html(categoriesList);
  });
  addEventListener()
});

function addEventListener() {
  $(function(){
    $("div#categories_list").on("click", "ul li a.category-selector", function(e) {
      e.preventDefault();
      category_id = parseInt($(this)[0].attributes[2].value)
      $.get("/trips", function(response) {
        itemsHTML = ""
        response.forEach(function(element) {
         if (element.category_id === category_id) {
            itemsHTML += `<li><a href="/trips/${element.id}">${element.title} - ${element.year}</a></li>`
          }
        })
        $("#category_trips").html(itemsHTML)
      });
    });
  });
}
