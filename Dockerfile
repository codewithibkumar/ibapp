# Multi-stage Dockerfile for Vite + React + TypeScript app
# Builds static files and serves with Nginx
# Fixed issues:
# - Removed `npm ci` (requires package-lock.json, which isn't committed in your repo)
# - Use `npm install` instead (installs all dependencies, including dev deps needed for build)
# - No `--only=production` or `--omit=dev` in builder stage (dev deps like Vite are required for `npm run build`)

FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (dev included – needed for build)
RUN npm install

# Copy source code
COPY . .

# Build the app (outputs to /app/dist)
# VITE_* env vars will be injected by Coolify at build time if you set them in project settings
RUN npm run build

# Production stage: Serve static files with Nginx
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Use your custom nginx.conf (handles SPA routing fallback to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
