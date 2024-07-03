# up-skiller

## Project Structure

- `app-backend`: FeathersJS v5 (Dove) backend
- `app-frontend`: Vite / Vue 3 / Tailwind / Headless UI frontend
- `app-docker`: Docker configuration
- `website-frontend`: Website frontend

## Getting Started

1. Ensure Docker is installed on your system.

2. Start the Docker containers:
   ```
   cd app-docker
   docker-compose up -d
   ```

3. Install dependencies and start the backend:
   ```
   cd app-backend
   npm install
   npm run dev
   ```

4. Install dependencies and start the frontend:
   ```
   cd app-frontend
   npm install
   npm run dev
   ```