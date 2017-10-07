class CategoriesController < ApplicationController

  def index
    @categories = current_user.categories.uniq
    render json: @categories
  end

  def show
    @category = Category.find(params[:id])
  end
end
