ActiveAdmin.register_page "Dashboard" do
  
  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }
  #
  content title: "Stats" do
    columns do
      column do
        panel "Careers last updated at" do
          h2 JobviteResponse.last.get_created_at
          a button("Force Update"), href: force_pull_jobs_url,
                          :'data-method' => :post,
                          :'data-confirm' => JobviteResponse.force_update_warning
        end
        panel "Number of current Job Listings By Region" do
          Region.all.each do |region|
            ul link_to(region.name, admin_region_path(region)) do
              li region.job_count
            end
          end
        end
        panel "Number of current Job Listings By Location" do
          Location.all.each do |location|
            ul link_to(location.name, admin_location_path(location)) do
              li location.job_count
            end
          end
        end
      end
      column do
        panel "Number of current Job Listings" do
          span JobviteResponse.last.job_listings.count
        end
        panel "Number of current Job Listings By Department" do
          Department.all.each do |department|
            ul link_to(department.name, admin_department_path(department)) do
              li department.job_count
            end
          end
        end
      end
    end
  end
end
