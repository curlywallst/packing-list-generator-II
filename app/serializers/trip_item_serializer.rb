class TripItemSerializer < ActiveModel::Serializer
  attributes :id, :trip_id, :item_id, :quantity
  belongs_to :trip
  belongs_to :item
end
