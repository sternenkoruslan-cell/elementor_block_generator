# Dockerfile

FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml first
cOPY package.json pnpm-lock.yaml ./

# Install dependencies
rUN npm install -g pnpm && pnpm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 5173

# Run the application
CMD ["pnpm", "vite", "dev"]