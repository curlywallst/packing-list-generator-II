class ItemsController < ApplicationController

  def index

    @trip = Trip.find(params[:trip_id])
    @items = @trip.items

    render json: @items
  end

  def edit
    @item = Item.find(params[:id])
    @trip = Trip.find(params[:trip_id])
    @trip_item = @trip.trip_items.find_by(item_id: @item.id)
  end

  def update
    @item_check = Item.new(:name => params[:item][:items][:name])
    @trip = Trip.find(params[:trip_id])
    @trip_item = @trip.trip_items.find_by(item_id: params[:id])
    if @item_check.valid?
      @item = Item.find(params[:id])
      @item.name = params[:item][:items][:name]
      @trip_item.quantity = params[:trip_item][:quantity]
      @trip_item.save
      @item.save
      redirect_to trip_items_path
    else
      @item = Item.find(params[:id])
      render '/items/edit'
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @trip = Trip.find(params[:trip_id])
    @trip_item = @trip.trip_items.find_by(item_id: @item.id)
    @trip_item.delete
    redirect_to trip_items_path(@trip)
  end

  private

  def item_params
    params.require(:item).permit(:name, :category_id, :description, trip_ids:[], trip_attributes: [:title, :year, :category])
  end
end
