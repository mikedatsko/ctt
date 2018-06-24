#!/usr/bin/env bash

docker-compose -f deploy/docker-compose.yml down
docker-compose -f deploy/docker-compose-local.yml build --no-cache
docker-compose -f deploy/docker-compose-local.yml up
