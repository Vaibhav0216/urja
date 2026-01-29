# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for building)
RUN npm ci

# Copy source code
COPY . .

# Build the application (builds both client and server)
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Change ownership to non-root user
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose the application port
EXPOSE 5000

# Set environment variable
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/index.cjs"]
