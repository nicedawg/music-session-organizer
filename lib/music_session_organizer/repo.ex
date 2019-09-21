defmodule MusicSessionOrganizer.Repo do
  use Ecto.Repo,
    otp_app: :music_session_organizer,
    adapter: Ecto.Adapters.Postgres
end
