FROM node:alpine

RUN mkdir /app
WORKDIR /app

RUN npm install -g nodemon

COPY package.json /app/package.json
RUN npm install

COPY ./web /app/web

CMD nodemon web/app.js
