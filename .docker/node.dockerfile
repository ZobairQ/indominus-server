FROM node:latest

LABEL maintainer="ZobairQ"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 4000

ENV DATABASE_HOST mongo

CMD [ "npm", "start" ]