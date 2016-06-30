Rails.application.routes.draw do
  get '/careers' => 'jobs_json#index', as: :jobs
  get '/careers/benefits' => 'jobs_json#benefits', as: :benefits
  get '/careers/culture' => 'jobs_json#culture', as: :culture
  get '/careers/mobility' => 'jobs_json#mobility', as: :mobility
  get '/careers/departments/' => 'jobs_json#departments', as: :jobs_departments
  get '/careers/departments/:department' => 'jobs_json#index', as: :jobs_department
  get '/careers/locations' => 'jobs_json#index', as: :jobs_locations
  get '/careers/locations/:location' => 'jobs_json#index', as: :jobs_location
  get '/careers/view/:eId' => 'jobs_json#show', as: :job
  get '/careers/regions/:region' => 'jobs_json#region_index', as: :jobs_region
  get '/careers/:department/:location' => 'jobs_json#index', as: :jobs_dept_loc
end
