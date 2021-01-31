FROM node:14.15.4-alpine3.10

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start:docker" ]
