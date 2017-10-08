class TripsController < ApplicationController
  def index
    @trips = current_user.trips
    render json: @trips
  end

  def new
    @trip = Trip.new
    @categories = Category.all
  end

  def create
    @trip = Trip.create(trip_params)
    @trip.add_category(params[:trip][:category_id], params[:trip][:categories][:name])
    if @trip.category
      @trip.save
      current_user.trips << @trip
      render json: @trip
    else
      @categories = Category.all
      render json: @trip
    end
  end

  def edit
    @trip = Trip.find(params[:id])
    @categories = Category.all
  end

  def update
    if params[:trip][:display_option].present?
      @trip = Trip.find(params[:id])
      @trip.display_option = params[:trip][:display_option]
      @trip.save
      redirect_to trip_path(@trip)
    elsif params[:trip][:items_attributes].present?
      @trip = Trip.find(params[:id])
      @trip.update_items(params[:trip][:item_ids], params[:trip][:items_attributes], params[:trip_item][:quantity])
      if @item.present?
        redirect_to trip_path(@trip)
      else
        @trip_item = TripItem.new
        render '/trips/show'
      end
    else
      @trip_check = Trip.new (trip_params)
      if @trip_check.valid?
        @trip = Trip.find(params[:id])
        if @trip.add_category(params[:trip][:category_id], params[:trip][:categories][:name])
          @trip.update(trip_params)
          redirect_to trip_path(@trip)
        end
      else
        @trip_check.add_category(params[:trip][:category_id], params[:trip][:categories][:name])
        @categories = Category.all
        @trip = Trip.find(params[:id])
        render template: "trips/edit"
      end
    end
  end

  def display_option
    @trip = Trip.find(params[:id])
    render 'trips/display_option'
  end


  def show
    binding.pry
    @trip = Trip.find(params[:id])
    @trip_item = TripItem.new
    binding.pry
    respond_to do |format|
      binding.pry
      format.html { render :show }
      format.json { render json: @trip}
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    trip_items = @trip.trip_items.select { |e| e.trip_id == @trip.id }.each do |trip_item|
      trip_item.delete
    end
    @trip.delete
    redirect_to root_path
  end


  private

  def trip_params
    params.require(:trip).permit(:title, :destination, :year, :notes, :category_id, :display_option, item_ids:[], item_attributes: [:name])
  end
end
