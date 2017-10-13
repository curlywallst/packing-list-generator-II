function addEventListener() {
  $('form#add_items').submit(function(event) {
    event.preventDefault();
    var values = $(this).serialize();
    var postingItems = $.post(this.action, values)
    tripId = parseInt($('#trip')[0].dataset.id)
    postingItems.done(function(response) {
      var item_indexes = $('#existing_items input')
      var name = ""
      for (var i=0; i < item_indexes.length; i++) {
        if (item_indexes[i].checked) {
          name = item_indexes[i].name
          item_indexes[i].checked = false
        }
      }

      if (!name) {
        name = $('#new_item_name')[0].children[1].value
        $('#new_item_name')[0].children[1].value = ""
        html = "<li>" + name + ' - ' + $('#new_item_quantity')[0].children[1].value + "</li>"
        $('#new_item_quantity')[0].children[1].value = 1
        $('ul#items').append(html)
      } else {
        listItems(tripId)
      }
    })
  })
}
