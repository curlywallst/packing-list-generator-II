$(function(){
  $("a.item-selector").on("click", function(e){
    e.preventDefault();
    if ($(this).data("label") === 'all'){
      $.get("/items.json").success(addItemsToExistingForm)
    } else {
      var categoryID = $(this).data("category-id");
      $.get(`/items.json?category_id=${categoryID}`).success(addItemsToExistingForm)
    }
    // fire our ajax.
  })
})

function addItemsToExistingForm(items){
  function Item(itemJSON){
    this.id = itemJSON.id
    this.name = itemJSON.name
  }

  Item.prototype.itemFormHTML = function(){
    return `<input type="radio" value="${this.id}" name="trip[item_ids]" id="trip_item_ids_${this.id}">  ${this.name}   `
  }

  actualItems = []

  items.forEach(function(item) {
    actualItem = new Item(item)
    actualItems.push(actualItem)
  })

  html = " "

  actualItems.forEach(function(actualItem) {
    html += actualItem.itemFormHTML()
  })

  $("#existing_items").html(html)
}

function listItems(tripId) {
  $.get("/trips/" + tripId + "/items", function(response) {
    var items = response;
    var itemsList = '<ul id=items>';
    items.forEach(function(item) {
      var i = item.trip_items.find(function(tripItem) {return tripItem.trip_id === parseInt(tripId)})
      itemsList += '<li>' + item.name + ' - ' + i.quantity + '</li>';
    });
    itemsList += '</ul>'
    $("#items").html(itemsList);
  })
}
