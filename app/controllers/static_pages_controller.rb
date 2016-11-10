class StaticPagesController < ApplicationController
  before_filter :set_nav_items, :retrieve_contact

  def home
    @title = "Xaxis Careers"
    @subtitle = "Careers at Xaxis"
  end

  def careers
    @title = "Xaxis Careers"
    @subtitle = "Careers at Xaxis"
  end

  def benefits
    @title = "Xaxis Careers"
    @subtitle = "Xaxis Benefits"
  end

  def culture
    @title = "Xaxis Careers"
    @subtitle = "Xaxis Culture"
  end
end
