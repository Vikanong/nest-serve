#!/bin/bash
docker-compose down
docker rmi $(docker image ls -q nest-server)
docker build -t nest-server:1 .
docker-compose stop nest-server
docker-compose rm -f nest-server
docker-compose up -d nest-server

# v=$(date "+%Y%m%d%H%M%S")
# docker stop server
# docker rm server
# docker run --name server -d -p 8088:3000 nest-server:${v}
# docker-compose restart
