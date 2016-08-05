class ErrorsController < ApplicationController

  def four_oh_four
    render(:status => 404)
  end

  def five_hundred
    render(:status => 500)
  end

end
