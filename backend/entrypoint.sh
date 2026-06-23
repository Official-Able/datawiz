#!/bin/sh

# Wait for database to be ready
if [ "$POSTGRES_DB" != "" ]; then
    echo "Waiting for postgres..."
    while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
      sleep 0.1
    done
    echo "PostgreSQL started"
fi

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate --noinput

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Start Gunicorn
echo "Starting Gunicorn..."
exec gunicorn --bind 0.0.0.0:8000 core.wsgi:application
