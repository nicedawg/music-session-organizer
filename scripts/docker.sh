#!/usr/bin/env sh

mix deps.get
npm install
mix ecto.setup
mix phx.server