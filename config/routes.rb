Rails.application.routes.draw do
  get '/' => 'jobs_json#index', as: :jobs
  get '/:eId' => 'jobs_json#show', as: :job
end
