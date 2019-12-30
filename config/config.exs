# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :music_session_organizer,
  ecto_repos: [MusicSessionOrganizer.Repo]

# Configures the endpoint
config :music_session_organizer, MusicSessionOrganizerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ux3oHu4/J9f26adtykEZZ6MJdgDUnO8gtxBIdOw5rNZryehbiqCmv+hps4Wr4U/e",
  render_errors: [view: MusicSessionOrganizerWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: MusicSessionOrganizer.PubSub, adapter: Phoenix.PubSub.PG2]

config :music_session_organizer, :pow,
  user: MusicSessionOrganizer.Users.User,
  repo: MusicSessionOrganizer.Repo

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
