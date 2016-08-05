require 'test_helper'

class ErrorsControllerTest < ActionController::TestCase
  test "should get four_of_four" do
    get :four_oh_four
    assert_response :success
  end

end
