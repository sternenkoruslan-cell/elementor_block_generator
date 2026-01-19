#!/bin/bash

# Function to check if MySQL is ready
wait_for_mysql() {
  while ! nc -z mysql 3306; do
    echo "Waiting for MySQL to be ready..."
    sleep 2  # wait for 2 seconds before checking again
  done
  echo "MySQL is ready!"
}

# Wait for MySQL to be ready
wait_for_mysql

# Run database migrations
pnpm db:push

# Start the service
exec "$@"