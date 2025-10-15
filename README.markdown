# Express.js with Nginx Load Balancer

A Dockerized Express.js application with multiple instances, load-balanced by Nginx, serving a simple HTML page.

## Prerequisites
- Docker
- Docker Compose plugin

## Project Structure
```
express-nginx-loadbalancer/
├── app.js              # Express.js application
├── package.json        # Node.js dependencies
├── Dockerfile          # Docker image for Express app
├── .dockerignore       # Ignores node_modules, etc.
├── nginx.conf          # Nginx load balancer config
├── docker-compose.yml  # Defines services and network
├── public/
│   └── index.html      # HTML page served by Express
├── .gitignore          # Ignores node_modules, etc.
```

## Setup and Running
1. Clone the repository:
   ```bash
   git clone git@github.com:artamim/express-nginx-loadbalancer.git
   cd express-nginx-loadbalancer
   ```
2. Start the application:
   - To build and start the services (use this the first time or after changes to the code or Dockerfile):
     ```bash
     docker compose up -d --build
     ```
   - To start the services without rebuilding (if the images already exist):
      ```bash
      docker compose up -d
      ```
4. Access at `http://localhost`. Refresh to see different container names due to load balancing.
5. Stop the application:
   ```bash
   docker compose down
   ```

## Notes
- Built with Node.js, Express, and Nginx.
- Uses Docker Compose for orchestration.
- Load balancing is handled by Nginx, routing to Express instances.
