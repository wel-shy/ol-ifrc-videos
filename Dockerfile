FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY ./web /app/web

CMD node web/app.js
