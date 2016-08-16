class DepartmentsController < ApplicationController
  before_filter :set_nav_items, :retrieve_contact
  def index
    @title = "Xaxis Careers | Departments"
  end

  def show
    @department = Department.friendly.find(params[:id])
    @subtitle = @department.name
    @jobs = Rails.cache.fetch("jobs/departments/#{@department.slug}", expires_in: 1.hour) do
      JobListing.in_department(@department.slug)
    end
    @title = "Xaxis Careers | #{@department.name}"
  end

  private
    def department_params
      params.require(:department).permit(:name, :slug, :hero_image)
    end
end
