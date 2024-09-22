FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Install http-server globally to serve the build
RUN npm install -g http-server

# Expose port 3000
EXPOSE 3000

# Use http-server to serve the build directory on port 3000
CMD ["http-server", "build", "-p", "3000"]
