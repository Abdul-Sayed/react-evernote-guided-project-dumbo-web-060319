Rails.application.routes.draw do
  post "/login", to: "auth#login"
  post "/signup", to: "users#create"
  get "/profile", to: "users#profile"

  resources :users, only: [:show, :create, :update, :delete]
  resources :notes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
