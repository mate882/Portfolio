FROM node:18-alpine

WORKDIR /app

# 👇 Install Vite globally
RUN npm install -g vite

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]
