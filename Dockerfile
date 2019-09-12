FROM node:8

WORKDIR /usr/src/app
COPY . .
EXPOSE 4444
CMD [ "node", "app.js" ]