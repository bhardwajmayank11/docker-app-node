FROM node:18-slim

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy all project files
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
