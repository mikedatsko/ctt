#!/usr/bin/env bash

docker-compose -f deploy/docker-compose.yml down
docker-compose -f deploy/docker-compose.yml build --no-cache
docker-compose -f deploy/docker-compose.yml up -d
