FROM mongo:latest

ENV AUTH=false

EXPOSE 27017

CMD ["mongod"]