require 'sidekiq/web'
require 'sidekiq-scheduler/web'
Rails.application.routes.draw do

  get '/culture' => 'static_pages#culture'
  get '/benefits' => 'static_pages#benefits'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  resources :departments, only: [:index,:show]
  resources :locations, only: [:index,:show]
  resources :regions, only: [:index,:show]

  get '/careers' => 'static_pages#careers', as: :jobs
  get '/careers/search' => 'job_listings#index', as: :job_search
  get '/careers/:e_id' => 'job_listings#show', as: :job

  post '/get_all_careers' => 'job_listings#force_pull_jobs', as: :force_pull_jobs

  get '/search-results' => 'searches#index'

  match '/contacts', to: 'contacts#new', via: 'get'
  resources "contacts", only: [:new, :create]

  authenticate :admin_user do
    mount Sidekiq::Web => '/sidekiq'
  end

  match '/404' => 'errors#four_oh_four', via: :all, as: :four_oh_four
  match '/500' => 'errors#five_hundred', via: :all, as: :five_hundred
  root to: 'static_pages#home'
end
