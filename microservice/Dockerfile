FROM node:alpine
WORKDIR /usr/src/microservice
COPY package*.json ./
RUN npm install
COPY . .
# EXPOSE 3000 - don't need expose here, we doing it in the Compose file
CMD [ "npm", "start" ]