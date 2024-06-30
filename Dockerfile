FROM node:16.19

# 创建并设置工作目录
WORKDIR /app

# 复制应用程序的依赖文件和源代码
COPY package*.json ./

# 使用 npm 安装依赖
RUN npm install --registry=https://registry.npmmirror.com

# 复制应用程序源代码
COPY . .

RUN npm run build

# 将 public 目录复制到工作目录
COPY public ./public

# 暴露应用端口
EXPOSE 3000

# 启动 Nest.js 应用
CMD ["node", "dist/main.js"]