#!/bin/bash
v=$(date "+%Y%m%d%H%M%S")
docker stop nest-server
docker rm nest-server
# 删除现有的 nest-server 镜像
if [ "$(docker image ls -q nest-server)" ]; then
    docker rmi $(docker image ls -q nest-server)
fi

# 重新构建 nest-server 镜像
docker build -t nest-server:1 .
docker run --name nest-server --network=my-network -p 8088:3000 -d nest-server:1

# # 停止并删除现有的 nest-server 容器
# docker-compose stop nest-server
# docker-compose rm -f nest-server

# # 删除现有的 nest-server 镜像
# if [ "$(docker image ls -q nest-server)" ]; then
#     docker rmi $(docker image ls -q nest-server)
# fi

# # 重新构建 nest-server 镜像
# docker build -t nest-server:1 .

# # 启动 MySQL 容器并等待其初始化完成
# docker-compose up -d mysql-container

# # 等待 MySQL 容器完全启动并准备好接受连接
# echo "Waiting for MySQL to initialize..."
# while ! docker exec nestserver_mysql-container_1 mysqladmin ping -u root -p123456 --silent; do
#     sleep 2
# done

# # 启动 nest-server 容器
# docker-compose up -d nest-server