class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :destination, :year, :notes, :category_id
  belongs_to :user
  belongs_to :category
  has_many :trip_items
  
end
