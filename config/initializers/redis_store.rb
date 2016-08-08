redis_url = ENV["REDISTOGO_URL"] || "redis://127.0.0.1:6379/"

Rails.application.config.cache_store = :redis_store, "#{redis_url}/0/xaxis-careers/cache", { expires_in: 90.minutes }

Rails.application.config.session_store :redis_store, servers: "#{redis_url}/0/xaxis-careers/session"

Rails.application.config.action_dispatch.rack_cache = {
  metastore: "#{redis_url}/1/xaxis-careers/metastore",
  entitystore: "#{redis_url}/1/xaxis-careers/entitystore"
}
