use Mix.Config

# Configure your database
config :music_session_organizer, MusicSessionOrganizer.Repo,
  username: "postgres",
  password: "postgres",
  database: "music_session_organizer_test",
  hostname: "db",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :music_session_organizer, MusicSessionOrganizerWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
