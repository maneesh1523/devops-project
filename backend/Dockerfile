# Use official Python image
FROM python:3.11

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN pip install flask flask-cors

# Expose port
EXPOSE 5000

# Run app
CMD ["python", "app.py"]