Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :departments, only: [:index,:show]
  resources :locations, only: [:index,:show]
  resources :regions, only: [:index,:show]

  get '/benefits' => 'jobvite_response#benefits', as: :benefits
  get '/culture' => 'jobvite_response#culture', as: :culture
  get '/mobility' => 'jobvite_response#mobility', as: :mobility
  get '/careers/:e_id' => 'jobvite_response#show', as: :job

  root to: 'jobvite_response#index'
end
