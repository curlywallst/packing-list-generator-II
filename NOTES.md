Include choices of common Items
Include templates for different types of trips - eg: beach, city, ski
Models
  User - includes login with passport, has_many trips
  Trip - has_many categories, through trip_categories
  Item  - belongs_to a category_items, has_many categories, through category_items
  Category - has_many items, through category_items, has_many trips, through trip_categories
  trip_categories - belongs_to trip, belongs_to category
  category_items - belongs_to category, belongs_to item
  <Todo - before I go list of things to do to get ready??>


  1. I need to iterate over the items that were returned

  2. For each item, I need to build the "Radio Box" based on some valid HTML template or something.

  3. Erase the current radio boxes

  4. inject the new html.
