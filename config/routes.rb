require 'sidekiq/web'
require 'sidekiq-scheduler/web'
Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  resources :departments, only: [:index,:show]
  resources :locations, only: [:index,:show]
  resources :regions, only: [:index,:show]
  get '/all-listings' => 'jobvite_response#all_index', as: :jobs
  get '/careers/:e_id' => 'jobvite_response#show', as: :job
  post '/get_all_careers' => 'jobvite_response#force_pull_jobs', as: :force_pull_jobs

  authenticate :admin_user do
    mount Sidekiq::Web => '/sidekiq'
  end

  match '/404' => 'errors#four_oh_four', via: :all, as: :four_oh_four
  match '/500' => 'errors#five_hundred', via: :all, as: :five_hundred
  root to: 'jobvite_response#index'
end
