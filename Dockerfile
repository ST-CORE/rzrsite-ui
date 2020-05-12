FROM node:13
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY ./src ./src

EXPOSE 4343
CMD ["npm", "prod"]