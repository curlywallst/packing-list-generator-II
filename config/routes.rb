Rails.application.routes.draw do


  resources :categories, only: [:show, :index]

  resources :trips do
    resources :items, only: [:index, :edit, :update, :destroy]
  end

  get '/items' => 'items#index'

  root 'welcome#home'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }


end
