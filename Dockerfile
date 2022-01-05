FROM node:12 AS react-build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source. Copy layer here after RUN npm install better utilizes cache.
COPY . .

# Make optimized production build of react app
RUN npm run-script build

FROM nginx:latest

# Copy optimized react build created from the state above into final destination
COPY --from="react-build" /usr/src/app/build /usr/share/nginx/html