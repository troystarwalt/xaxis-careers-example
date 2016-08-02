# Careers Site, Jobvite testing

## Installation

```
git clone
rake db:created
rake db:migrate
rails s
```

- Jobvite API Interaction defined in app/services
- Json response is being saved in JobviteResponse table, as response
- Response is parsed and each listing is separately saved as an entry on the JobListing table

- Departments/Locations/Regions all have basic CRUD operations, and can be generated initially through the seed file, or updated later.

- Hero Images (the big guys, per location/region/department) can be edited on the fly through the admin interface. 
