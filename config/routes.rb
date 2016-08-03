Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :departments
  resources :locations
  resources :regions

  get '/benefits' => 'jobvite_response#benefits', as: :benefits
  get '/culture' => 'jobvite_response#culture', as: :culture
  get '/mobility' => 'jobvite_response#mobility', as: :mobility
  get '/careers/:e_id' => 'jobvite_response#show', as: :job

  root to: 'jobvite_response#index'
end
