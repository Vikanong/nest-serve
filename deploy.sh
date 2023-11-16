#!/bin/bash
docker rmi $(docker image ls -q nest-server)
v=$(date "+%Y%m%d%H%M%S")
docker build -t  nest-server:1 .
docker stop server
docker rm server
# docker run --name server -d -p 8088:3000 nest-server:${v}
# docker-compose restart
docker-compose up -d
