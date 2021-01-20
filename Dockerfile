FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

# Coying the app
COPY . .

# Prebuilding the app (to prevent downtime)
RUN yarn build

# Running the app
CMD [ "npm", "start" ]
