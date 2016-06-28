Rails.application.routes.draw do
  get '/' => 'jobs_json#index', as: :jobs
  get '/:eId' => 'jobs_json#show', as: :job
  get '/:department/:location/:category' => 'jobs_json#index', as: :jobs_with_params
end
