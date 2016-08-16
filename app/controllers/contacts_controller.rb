class ContactsController < ApplicationController
  before_filter :set_nav_items
  def new
    # @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.valid?
      flash.keep[:notice] = "Thanks " + @contact.name + ", message sent! We will get back to you soon."
      redirect_to root_path
    else
      # collect errors
      errors = @contact.errors.full_messages
      @contact_errors = "#{errors.join(" & ")}"
      flash.keep[:alert] = "Failed to send because: " + @contact_errors + "."
      redirect_to :back
    end
  end

end
