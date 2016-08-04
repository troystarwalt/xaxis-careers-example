class DepartmentsController < ApplicationController

  def index
    @regions = Region.all
    @departments = Department.all
  end

  def show
    @regions = Region.all
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
