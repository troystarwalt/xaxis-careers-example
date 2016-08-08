class DepartmentsController < ApplicationController

  def index
    @regions = Region.all.order(:id)
    @departments = Department.all.order(:name)
    @locations = Location.all.order(:name)
  end

  def show
    @regions = Region.all.order(:id)
    @departments = Department.all.order(:name)
    @locations = Location.all.order(:name)
    @department = Department.friendly.find(params[:id])
    @subtitle = @department.name
    @jobs = Rails.cache.fetch("jobs/departments/#{@department.slug}", expires_in: 1.hour) do
      JobListing.in_department(@department.slug)
    end
  end

  # GET /departments/new
  def new
    @department = Department.new
  end

  private
    def department_params
      params.require(:department).permit(:name, :slug, :hero_image)
    end
end
