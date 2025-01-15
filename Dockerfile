# Use an official node image as the base image
FROM node:18.20.5-alpine AS build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use an official nginx image as the base image
FROM nginx:alpine3.20

# Copy the built application from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]