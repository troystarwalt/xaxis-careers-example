class ContactsController < ApplicationController
  before_filter :set_nav_items
	skip_before_action :verify_authenticity_token
  # protect_from_forgery except: :create

  def new
    # @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      #send sweet alert
      flash[:notice] = "Message Sent"
      redirect_to root_path
    else
      ##render flash
      flash[:alert] = "Failed to send."
      redirect_to root_path
    end
  end

end
