# Latest version of Erlang-based Elixir installation: https://hub.docker.com/_/elixir/
FROM elixir:1.9.4-alpine

RUN apk --update upgrade && \
    apk add --update \
    inotify-tools \
    npm

# Create and set home directory
WORKDIR /opt/music-session-organizer

# Install hex (Elixir package manager)
RUN mix local.hex --force

# Install rebar (Erlang build tool)
RUN mix local.rebar --force

# Run the application itself
CMD ./scripts/docker.sh
