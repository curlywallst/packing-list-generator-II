class Trip < ActiveRecord::Base
  belongs_to :user
  belongs_to :category
  has_many :trip_items
  has_many :items, through: :trip_items
  validates :title, presence: true
  validates :destination, presence: true
  validates :year, presence: true, format: { with: /(19|20)\d{2}/i, message: "should be a four-digit year" }
  validates :category, presence: true

  def items_attributes=(item_attributes)
    item_attributes.value.each do |item_attribute|
      item = Item.find_or_create_by(item_attribute)
      self.items << item
    end
  end

  def add_item
    trip_item = self.trip_items.build
  end

  def update_items(item_ids, items_attributes, trip_item_quantity)
    @item = Item.new(name: items_attributes.first[1][:name])
    if @item.valid? || item_ids.present?
      if @item.valid?
        @item = Item.find_or_create_by(name: items_attributes.first[1][:name])
      else item_ids.present?
        @item = Item.find(item_ids)
      end
      @trip_item = TripItem.new(trip_id: self.id, item_id: @item.id, quantity: trip_item_quantity.to_i)
      @trip_item.save
    else
      @item.valid?
    end
  end

  def add_category(category_id, category_name)
    category = Category.new(:name => category_name)
    if category.valid?
      self.category = Category.find_or_create_by(name: category_name)
    elsif !category_id.nil? && category_id != ""
      self.category = Category.find(category_id)
    else
      category.valid?
    end
  end

  def items_in_category
    trips = self.user.trips.select { |e| e.category.id == category.id }
    items = []
    trips.each do |trip|
      items << trip.items
    end
    items = items.flatten.uniq
  end

  def items_of_user
    trips = self.user.trips
    items = []
    trips.each do |trip|
      items << trip.items
    end
    items = items.flatten.uniq
  end


end
