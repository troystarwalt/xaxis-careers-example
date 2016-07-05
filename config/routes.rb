Rails.application.routes.draw do
  namespace 'careers' do
    get '/' => 'jobs_json#index', as: :jobs
    get '/benefits' => 'jobs_json#benefits', as: :benefits
    get '/culture' => 'jobs_json#culture', as: :culture
    get '/mobility' => 'jobs_json#mobility', as: :mobility
    get '/departments/' => 'jobs_json#departments', as: :jobs_departments
    get '/departments/:department' => 'jobs_json#index', as: :jobs_department
    get '/locations' => 'jobs_json#index', as: :jobs_locations
    get '/locations/:location' => 'jobs_json#index', as: :jobs_location
    get '/view/:eId' => 'jobs_json#show', as: :job
    get '/regions/:region' => 'jobs_json#region_index', as: :jobs_region
    get '/:department/:location' => 'jobs_json#index', as: :jobs_dept_loc
  end
end
