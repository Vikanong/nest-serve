FROM node:16.19

# 使用 Yarn 作为包管理器
ENV PATH="/app/node_modules/.bin:$PATH" \
    NODE_OPTIONS="--max_old_space_size=4096"

# 创建工作目录
RUN mkdir -p /app

# 设置工作目录
WORKDIR /app

# 将 package.json 和 yarn.lock 复制到工作目录
COPY package.json yarn.lock ./

# 安装项目依赖
RUN yarn install

COPY dist ./dist

# 将 public 目录复制到工作目录
COPY public ./public

# 暴露应用端口
EXPOSE 3000

# 启动 Nest.js 应用
CMD ["node", "dist/main.js"]
