# Use an official nginx image to serve the game
FROM nginx:alpine

# Copy the game files into the nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
