# Latest version of Erlang-based Elixir installation: https://hub.docker.com/_/elixir/
FROM elixir:1.9.4-alpine


ARG USER_ID
ARG GROUP_ID
ARG APPUSER=phx-dev

RUN if [ ${USER_ID:-0} -ne 0 ] && [ ${GROUP_ID:-0} -ne 0 ]; then \
    addgroup -g ${GROUP_ID} ${APPUSER} &&\
    adduser -u ${USER_ID} -G ${APPUSER} ${APPUSER} -S \
    ;fi

RUN apk --update upgrade && \
    apk add --update \
    inotify-tools \
    npm

USER ${APPUSER}

# Create and set home directory
WORKDIR /opt/music-session-organizer

# Install hex (Elixir package manager)
RUN mix local.hex --force

# Install rebar (Erlang build tool)
RUN mix local.rebar --force

# Run the application itself
CMD ./scripts/docker.sh
