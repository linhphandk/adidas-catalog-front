FROM node:14.15.4-alpine3.10

WORKDIR /app

RUN ls

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start:docker" ]
