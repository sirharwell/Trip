Rails.application.routes.draw do

  get '/api/stops/:id', to: 'api/stops#index'
  namespace :api do
    resources :trips
    resources :stops
  end
end
