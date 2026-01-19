#!/bin/bash

# Run database migrations
composer migrate

# Start the server
php -S 0.0.0.0:8000 -t public
