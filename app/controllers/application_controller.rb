class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  unless Rails.application.config.consider_all_requests_local
    rescue_from ActiveRecord::RecordNotFound,
                ActionController::RoutingError,
                ActionController::UnknownController,
                AbstractController::ActionNotFound,
                ActionController::MethodNotAllowed do |exception|
      redirect_to four_oh_four_path
    end
  end

  def set_nav_items
    @regions = Region.all.order(:id)
    @departments = Department.all.order(:name)
    @locations = Location.all.order(:name)
  end

end
