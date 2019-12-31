defmodule MusicSessionOrganizerWeb.AppControllerTest do
  use MusicSessionOrganizerWeb.ConnCase

  test "GET /app", %{conn: conn} do
    conn = get(conn, "/app")
    assert html_response(conn, 200) =~ "react-app"
  end
end
