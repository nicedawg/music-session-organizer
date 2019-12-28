#!/usr/bin/env sh

mix deps.get
mix ecto.setup
mix phx.server
