FROM node:13
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY ./src ./src
COPY ./server.js .

EXPOSE 4343
CMD ["npm","run","prod"]