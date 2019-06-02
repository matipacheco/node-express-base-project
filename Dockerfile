FROM node:10

# File Author / Maintainer
MAINTAINER Matias Pacheco

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "yarn", "start" ]