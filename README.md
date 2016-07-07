# Careers Site, Jobvite testing

## Installation

```
git clone
rake db:created
rake db:migrate
rails s
```

- Jobvite API Interaction defined in app/services
- Json response is being saved in JobsJson table, as jobvite_return
- Response is parsed and each listing is separately saved as an entry on the JobListing table.
