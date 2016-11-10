class JobviteUpdated < ActiveRecord::Base
  scope :successfully, -> {where(success: true)}
  def self.force_update_warning
    time = Time.now.localtime
    last_updated_time = successfully.last.updated_at.localtime
    minutes_since_update = ((time - last_updated_time) / 60).to_i
    output_string = "Are you sure? The last update was at #{get_last_updated_at}"
  end

  def self.get_last_updated_at
    successfully.last.updated_at.localtime.strftime("%I:%M %p on %D")
  end
end
