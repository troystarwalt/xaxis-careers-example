# Careers Site, Jobvite testing

## Installation

```
git clone
rake db:create
rake db:migrate
redis-server
foreman start (in new tab - first set of jobs pulled in 20s, then hourly)
to use sendgrid, create a .env file with your sendgrid credentials and start foreman like:  foreman start --env app/.env
to pull jobs immediately
rake careers:pull_jobs
```

- Jobvite API Interaction defined in app/services
- Job Listings are updated by getting the API response, checking to see if the entry exists, updating it if necessary, making new entries if needed, then removing any old entries

- Departments/Locations/Regions all have basic CRUD operations, and can be generated initially through the seed file, or updated later.

- Hero Images (the big guys, per location/region/department) can be edited on the fly through the admin interface.
