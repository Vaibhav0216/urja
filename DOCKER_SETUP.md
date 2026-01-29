# Docker Setup Guide for Urja

This guide will help you set up and run the Urja application using Docker for platform-independent development and deployment.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Windows

1. **Docker Desktop for Windows**
   - Download from: https://www.docker.com/products/docker-desktop
   - Requires Windows 10/11 Pro, Enterprise, or Education (64-bit)
   - **WSL2 Backend Required**: Docker Desktop uses WSL2 for better performance
   - Installation guide: https://docs.docker.com/desktop/install/windows-install/

2. **Enable WSL2** (if not already enabled)
   ```powershell
   wsl --install
   ```

### macOS

1. **Docker Desktop for Mac**
   - Download from: https://www.docker.com/products/docker-desktop
   - Supports macOS 11+ (Big Sur or later)
   - Installation guide: https://docs.docker.com/desktop/install/mac-install/

### Linux

1. **Docker Engine**
   ```bash
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install docker.io docker-compose

   # Fedora
   sudo dnf install docker docker-compose
   ```

2. **Start Docker service**
   ```bash
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

3. **Add your user to docker group** (optional, to run without sudo)
   ```bash
   sudo usermod -aG docker $USER
   # Log out and back in for changes to take effect
   ```

## Verify Installation

Check that Docker is installed correctly:

```bash
docker --version
docker-compose --version
```

You should see version information for both commands.

## Quick Start

Follow these steps to get the application running with Docker:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd urja
```

### 2. Set Up Environment Variables

Create a `.env` file from the template:

```bash
# On Windows (PowerShell)
Copy-Item .env.example .env

# On macOS/Linux
cp .env.example .env
```

### 3. Configure Zoho SMTP Credentials

Edit the `.env` file and add your Zoho SMTP credentials:

```env
# Email Configuration (Zoho SMTP)
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=admin@urjacore.in
SMTP_PASS=your_actual_password_here
ADMIN_EMAIL=admin@urjacore.in
```

**Getting Zoho SMTP Credentials:**

1. Login to https://mail.zoho.com with your admin@urjacore.in account
2. Go to **Settings** → **Mail Accounts** → **SMTP Settings**
3. Use the following details:
   - **Host**: smtp.zoho.com
   - **Port**: 587 (TLS) or 465 (SSL)
   - **Username**: admin@urjacore.in
   - **Password**: Your Zoho account password

**If you have Two-Factor Authentication (2FA) enabled:**

1. Go to https://accounts.zoho.com/home#security/application
2. Generate an **App-Specific Password** for "Urja SMTP"
3. Use this app-specific password in the `SMTP_PASS` field

### 4. Build Docker Images

Build the application Docker image:

```bash
npm run docker:build

# Or manually:
docker-compose build
```

This may take a few minutes the first time as it downloads base images and installs dependencies.

### 5. Start the Application

Start all services (PostgreSQL + Application):

```bash
npm run docker:up

# Or manually:
docker-compose up
```

The application will start on **http://localhost:5000**

### 6. Run Database Migrations

In a new terminal window, run database migrations:

```bash
npm run docker:db:push

# Or manually:
docker-compose exec app npm run db:push
```

### 7. Access the Application

Open your browser and navigate to:

- **Application**: http://localhost:5000
- **Contact Form**: http://localhost:5000/contact

## Development Mode

For development with hot reload, use the development Docker Compose configuration:

```bash
npm run docker:dev

# Or manually:
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

This mounts your source code as volumes, so changes are reflected immediately without rebuilding.

## Docker Commands Reference

### Build and Start

```bash
# Build images
npm run docker:build

# Start services (attached mode, shows logs)
npm run docker:up

# Start services in detached mode (background)
docker-compose up -d

# Start development mode
npm run docker:dev
```

### View Logs

```bash
# Follow logs for all services
npm run docker:logs

# Follow logs for specific service
docker-compose logs -f app
docker-compose logs -f postgres
```

### Stop Services

```bash
# Stop services (keeps containers)
npm run docker:down

# Stop and remove containers, networks
docker-compose down

# Stop, remove containers, networks, and volumes (fresh start)
docker-compose down -v
```

### Database Operations

```bash
# Run database migrations
npm run docker:db:push

# Connect to PostgreSQL directly
docker-compose exec postgres psql -U urja_user -d urja

# View inquiries table
docker-compose exec postgres psql -U urja_user -d urja -c "SELECT * FROM inquiries;"
```

### Check Status

```bash
# Check running containers
docker-compose ps

# Check container health
docker ps
```

## Project Structure

```
urja/
├── Dockerfile              # Production Docker image
├── Dockerfile.dev          # Development Docker image
├── docker-compose.yml      # Docker Compose configuration
├── docker-compose.dev.yml  # Development overrides
├── .env.example            # Environment variables template
├── .env                    # Your local environment (not committed)
├── client/                 # React frontend
├── server/                 # Express backend
│   ├── email.ts           # Email service (Nodemailer)
│   ├── routes.ts          # API routes
│   └── ...
└── shared/                 # Shared types and schemas
```

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DATABASE_URL` | Yes | - | PostgreSQL connection string |
| `NODE_ENV` | Yes | `production` | Environment mode |
| `PORT` | Yes | `5000` | Application port |
| `SMTP_HOST` | Yes | - | Zoho SMTP server |
| `SMTP_PORT` | Yes | - | SMTP port (587 or 465) |
| `SMTP_USER` | Yes | - | Zoho email address |
| `SMTP_PASS` | Yes | - | Zoho password |
| `ADMIN_EMAIL` | Yes | - | Notification recipient |

## Testing the Setup

### 1. Verify Services are Running

```bash
docker-compose ps
```

You should see both `urja-postgres` and `urja-app` with status "Up".

### 2. Test Database Connection

```bash
docker-compose exec postgres psql -U urja_user -d urja -c "SELECT version();"
```

### 3. Test the Application

1. Open http://localhost:5000 in your browser
2. Navigate to the Contact page: http://localhost:5000/contact
3. Fill out the contact form with test data
4. Submit the form

**Expected Results:**
- Form submission succeeds (200 OK)
- Entry saved in PostgreSQL database
- Email sent to admin@urjacore.in
- Server logs show "Email sent successfully" or error message

### 4. Verify Email Notification

Check the server logs:

```bash
npm run docker:logs
```

Look for email-related log messages. If successful, you should receive an email at admin@urjacore.in.

### 5. Verify Database Entry

```bash
docker-compose exec postgres psql -U urja_user -d urja -c "SELECT * FROM inquiries;"
```

You should see your test inquiry in the database.

## Troubleshooting

### Port Already in Use

If port 5000 or 5432 is already in use:

1. **Find the process using the port:**
   ```bash
   # Windows
   netstat -ano | findstr :5000

   # macOS/Linux
   lsof -i :5000
   ```

2. **Stop the conflicting process or change the port** in `docker-compose.yml`:
   ```yaml
   services:
     app:
       ports:
         - "3000:5000"  # Maps host port 3000 to container port 5000
   ```

### Docker Build Fails

1. **Clear Docker cache and rebuild:**
   ```bash
   docker-compose build --no-cache
   ```

2. **Check disk space:**
   ```bash
   docker system df
   ```

3. **Clean up unused Docker resources:**
   ```bash
   docker system prune -a
   ```

### Database Connection Errors

1. **Check PostgreSQL health:**
   ```bash
   docker-compose ps
   docker-compose logs postgres
   ```

2. **Verify DATABASE_URL in `.env` matches docker-compose.yml:**
   ```env
   DATABASE_URL=postgresql://urja_user:urja_password@postgres:5432/urja
   ```

3. **Restart PostgreSQL:**
   ```bash
   docker-compose restart postgres
   ```

### Email Not Sending

1. **Check environment variables:**
   ```bash
   docker-compose exec app printenv | grep SMTP
   ```

2. **Verify Zoho SMTP credentials are correct**

3. **Check server logs for email errors:**
   ```bash
   docker-compose logs app | grep -i email
   ```

4. **Test SMTP connection manually** (outside Docker):
   ```bash
   telnet smtp.zoho.com 587
   ```

5. **Common issues:**
   - Wrong password (use app-specific password if 2FA enabled)
   - SMTP port blocked by firewall
   - Zoho account not verified

### Windows-Specific Issues

#### WSL2 Not Installed

```powershell
# Install WSL2
wsl --install

# Restart your computer
```

#### File Watching Not Working in Development Mode

If hot reload doesn't work on Windows:

1. Ensure you're using WSL2 backend in Docker Desktop
2. Try running the code inside WSL2 directly:
   ```bash
   # From PowerShell
   wsl
   cd /mnt/c/Users/YourName/path/to/urja
   docker-compose up
   ```

### macOS-Specific Issues

#### Slow File Mounting

If file mounting is slow on macOS:

1. Consider using Docker volumes instead of bind mounts
2. Or run the application natively: `npm run dev`

## Production Deployment

For production deployment:

1. **Build production image:**
   ```bash
   docker-compose build
   ```

2. **Start in detached mode:**
   ```bash
   docker-compose up -d
   ```

3. **Set up a reverse proxy** (nginx, Caddy) for HTTPS

4. **Use Docker secrets** for sensitive environment variables (advanced)

5. **Set up automated backups** for PostgreSQL data volume

## Data Persistence

PostgreSQL data is stored in a Docker volume named `postgres_data`:

```bash
# List volumes
docker volume ls

# Inspect volume
docker volume inspect urja_postgres_data

# Backup database
docker-compose exec postgres pg_dump -U urja_user urja > backup.sql

# Restore database
docker-compose exec -T postgres psql -U urja_user urja < backup.sql
```

## Stopping and Cleaning Up

```bash
# Stop services
npm run docker:down

# Stop and remove volumes (deletes all data!)
docker-compose down -v

# Remove all Docker images for this project
docker rmi $(docker images -q urja*)
```

## Getting Help

If you encounter issues not covered in this guide:

1. Check Docker logs: `npm run docker:logs`
2. Verify Docker is running: `docker ps`
3. Check environment variables: `cat .env`
4. Ensure all prerequisites are installed
5. Try a fresh start: `docker-compose down -v && docker-compose up --build`

## Next Steps

- Explore the application at http://localhost:5000
- Read the main README.md for development workflow
- Customize the Docker configuration for your needs
- Set up CI/CD pipelines for automated deployments
