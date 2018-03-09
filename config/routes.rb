Rails.application.routes.draw do

  get '/api/stops/:id', to: 'api/stops#index'
  get '/api/addresses/:id', to: 'api/addresses#index'
  namespace :api do
    resources :trips
    resources :stops
  end
end
