require 'sidekiq/web'
require 'sidekiq-scheduler/web'
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
  post '/get_all_careers' => 'jobvite_response#force_pull_jobs', as: :force_pull_jobs
  get '/searchresults' => 'searches#index'

  authenticate :admin_user do
    mount Sidekiq::Web => '/sidekiq'
  end

  root to: 'jobvite_response#index'
end
