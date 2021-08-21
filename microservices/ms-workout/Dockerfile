FROM node:14.15.0

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 5002:5000

CMD ["node", "server.js"]



