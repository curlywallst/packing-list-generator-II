class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :trip_items
end
