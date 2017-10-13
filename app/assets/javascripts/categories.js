$(function () {
  $.get("/categories").success(addCategoriessToPage)
  addCategoryEventListener()
});

function addCategoryEventListener() {
  $(function(){
    $("div#categories").on("click", "ul li a.category-selector", function(e) {
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
