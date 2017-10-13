# Packing List Generator
Flatiron school Rails App with a jQuery Front End Final Project

Packing List Generator

This is a Ruby on Rails application that allows users to create accounts and add information about their trips and generate packing lists.  The Models included are:

  User - has many trips and has many categories through trips
  Category - has many trips and has many items through trips
  Trip - belongs to a user, belongs to a category, and has many items through a joins table
  Item - has many trips through a joins table

The main page before logging in gives the user the option of Sign In, Sign Up or Sign In With Facebook.  All pages have a home button in the nav bar.

After signing in, the home page displays all of a user's packing lists and gives the user the option of viewing a list, adding a new list or viewing all lists of a particular category.

When the user adds (or edits) a trip the inputs are validated with appropriate messaging.  The user can select from their previous categories or add a new on.  The user can also select from previous items they have taken on trips of the same category.  Thus skis would not be displayed on a beach trip as an option.  All trip components are easily editable and items can be removed.  

Installation

Pull requests are welcome on Github at https://github.com/curlywallst/travel-packing-list-generator.

Usage

To run the application:
In the terminal:
  $ bundle install
  $ rails s
In the browser:
  localhost:3000/


Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/curlywallst/wine_library. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.


License

This application was developed under the guidance of Flatiron School on learn.co.
