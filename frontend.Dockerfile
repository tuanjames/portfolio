# Stage 1: Build
FROM node:20-bullseye AS build

WORKDIR /app

# Copy dependency files
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install

# Copy the rest of the code
COPY frontend/ .

# Build the production files
RUN npm run build

# # Stage 2: Serve with a lightweight web server
# FROM nginx:alpine

# # Copy built files from Vite build
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose the port
# EXPOSE 80
# Expose Vite's dev port
EXPOSE 5173

# Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "run", "dev", "--", "--host"]
