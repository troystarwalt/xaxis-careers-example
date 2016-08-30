module ApplicationHelper
  def nav_link(link_text, link_path)
    class_name = current_page?(link_path) ? 'current' : ''
    content_tag(:li, :class => class_name) do
      link_to link_text, link_path
    end
  end

  # Custom helper methods to return flash types.
  def bootstrap_class_for flash_type
    { success: "alert-success", error: "alert-danger", alert: "alert-warning", notice: "alert-info" }[flash_type.to_sym] || flash_type.to_s
  end

  # We can call this below helper by putting =flash_messages on
  # application.html.haml. It checks the type of message returns that
  # bootstrap style, adds a close button and adds in the message.
  def flash_messages(opts = {})
    flash.each do |msg_type, message|
      concat(content_tag(:div, message, class: "alert #{bootstrap_class_for(msg_type)} fade in alert-dismissible", id: "flash_container") do
              concat content_tag(:button, 'x', class: "close", data: { dismiss: 'alert' })
              concat message
            end)
    end
    nil
  end
end
