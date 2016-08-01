Rails.application.routes.draw do
  namespace :careers, path: '/' do
    get '/' => 'jobvite_response#index', as: :jobs
    get '/benefits' => 'jobvite_response#benefits', as: :benefits
    get '/culture' => 'jobvite_response#culture', as: :culture
    get '/mobility' => 'jobvite_response#mobility', as: :mobility
    get '/departments/' => 'jobvite_response#departments', as: :jobs_departments
    get '/departments/:department' => 'jobvite_response#index', as: :jobs_department
    get '/locations' => 'jobvite_response#index', as: :jobs_locations
    get '/locations/:location' => 'jobvite_response#index', as: :jobs_location
    get '/view/:e_id' => 'jobvite_response#show', as: :job
    get '/regions/:region' => 'jobvite_response#region_index', as: :jobs_region
    get '/:department/:location' => 'jobvite_response#index', as: :jobs_dept_loc
  end

end
