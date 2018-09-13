Rails.application.routes.draw do
  get 'index', to: 'main#index', as: 'index'

  resources :index , controller: 'main'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'
end
