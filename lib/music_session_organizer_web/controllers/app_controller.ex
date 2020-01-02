defmodule MusicSessionOrganizerWeb.AppController do
  use MusicSessionOrganizerWeb, :controller

  plug :put_layout, "app-app.html"

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
