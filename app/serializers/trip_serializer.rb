class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :destination, :year, :notes
  belongs_to :user
  belongs_to :category
end
