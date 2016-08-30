class ContactsController < ApplicationController
  before_filter :set_nav_items
  def new
    # @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
      if @contact.valid?
        respond_to do |format|
        ContactMailer.contact_email(@contact).deliver
        format.html { redirect_to root_path, :success => "Email Sent!"}
        format.json { render :json => @contact, :status => :created, :location => @contact }
        end
      else
        errors = @contact.errors.full_messages
        @contact_errors = "#{errors.join(" & ")}"
        flash.keep[:error] = "Failed to send because: " + @contact_errors + "."
        redirect_to :back
      end
  end
end
