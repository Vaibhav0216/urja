#!/bin/sh
# Wait for postgres to be ready
echo "Waiting for postgres..."
sleep 5

# Install drizzle-kit temporarily and run migrations
echo "Installing drizzle-kit..."
npm install drizzle-kit

echo "Running database migrations..."
npm run db:push

echo "Database initialization complete!"
