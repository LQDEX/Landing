# Base Image
FROM node:8.11-alpine

# Our workdir
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

RUN mkdir ./client
COPY ./client/package*.json ./client/

RUN cd client && npm install

# Bundle app source
COPY . .

# Build Client
RUN cd client && npm run build

# Define the port used by the container
EXPOSE 5000

CMD ["npm", "start"]