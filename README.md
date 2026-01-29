# Urja - Full-Stack Web Application

A modern, full-stack web application built with React, Express.js, and PostgreSQL. Platform-independent deployment with Docker support.

## Overview

Urja is a professional web application featuring:
- Modern React frontend with TypeScript and Tailwind CSS
- Express.js backend with type-safe APIs
- PostgreSQL database with Drizzle ORM
- Email notifications via Zoho SMTP
- Docker containerization for platform independence
- Contact form with database persistence and email alerts

## Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **React Hook Form + Zod** - Form validation
- **TanStack Query** - Data fetching and caching
- **Wouter** - Lightweight routing
- **Framer Motion** - Animations

### Backend
- **Express.js 4.21** - Web framework
- **Node.js 20** - Runtime
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM
- **Zod** - Schema validation
- **Nodemailer** - Email service

### Database
- **PostgreSQL 16** - Primary database
- **Drizzle Kit** - Database migrations

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## Project Structure

```
urja/
├── client/              # React frontend application
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable UI components
│   │   └── lib/        # Utilities and hooks
│   └── ...
├── server/              # Express backend application
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   ├── storage.ts      # Database layer
│   ├── email.ts        # Email service
│   ├── db.ts           # Database connection
│   └── ...
├── shared/              # Shared code between client/server
│   ├── schema.ts       # Database schemas
│   └── routes.ts       # API route contracts
├── script/              # Build scripts
├── Dockerfile           # Production Docker image
├── Dockerfile.dev       # Development Docker image
├── docker-compose.yml   # Docker orchestration
├── .env.example         # Environment variables template
└── README.md            # This file
```

## Features

### Contact Form
- Fully validated contact form with React Hook Form
- Real-time validation with Zod schemas
- PostgreSQL database persistence
- Email notifications to admin@urjacore.in via Zoho SMTP
- Loading states and error handling
- Responsive design

### Platform Independence
- Docker containerization
- Multi-stage builds for optimized images
- PostgreSQL in Docker container
- Consistent environment across all platforms

### Email Notifications
- Automated email alerts on form submission
- HTML email templates
- Non-blocking email sending (doesn't delay responses)
- Graceful failure handling

## Getting Started

You can run this application in two ways:

1. **Native Development** - Run directly on your machine
2. **Docker** - Run in containers (recommended for consistency)

### Prerequisites

#### For Native Development
- Node.js 20+ (https://nodejs.org)
- PostgreSQL 16+ (https://www.postgresql.org/download)
- npm (comes with Node.js)

#### For Docker Development
- Docker Desktop (https://www.docker.com/products/docker-desktop)
- Docker Compose (included with Docker Desktop)

## Setup Instructions

### Option 1: Native Development

#### 1. Install Dependencies

```bash
npm install
```

#### 2. Set Up PostgreSQL

Install PostgreSQL and create a database:

```sql
CREATE DATABASE urja;
CREATE USER urja_user WITH PASSWORD 'urja_password';
GRANT ALL PRIVILEGES ON DATABASE urja TO urja_user;
```

#### 3. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and configure your settings
```

Edit `.env`:

```env
DATABASE_URL=postgresql://urja_user:urja_password@localhost:5432/urja
NODE_ENV=development
PORT=5000

# Zoho SMTP Configuration
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=admin@urjacore.in
SMTP_PASS=your_zoho_password
ADMIN_EMAIL=admin@urjacore.in
```

#### 4. Run Database Migrations

```bash
npm run db:push
```

#### 5. Start Development Server

```bash
npm run dev
```

The application will be available at **http://localhost:5000**

### Option 2: Docker (Recommended)

See **[DOCKER_SETUP.md](./DOCKER_SETUP.md)** for comprehensive Docker setup instructions.

#### Quick Docker Start

```bash
# 1. Create environment file
cp .env.example .env

# 2. Edit .env with your Zoho SMTP credentials
# (See Zoho SMTP Setup section below)

# 3. Build and start services
npm run docker:build
npm run docker:up

# 4. In a new terminal, run migrations
npm run docker:db:push

# 5. Access the application
# http://localhost:5000
```

## Zoho SMTP Setup

To enable email notifications, configure your Zoho SMTP credentials:

### Getting Credentials

1. Login to https://mail.zoho.com with admin@urjacore.in
2. Go to **Settings** → **Mail Accounts** → **SMTP Settings**
3. Use these settings in `.env`:
   - `SMTP_HOST=smtp.zoho.com`
   - `SMTP_PORT=587` (for TLS) or `465` (for SSL)
   - `SMTP_USER=admin@urjacore.in`
   - `SMTP_PASS=your_password`

### If Two-Factor Authentication (2FA) is Enabled

1. Go to https://accounts.zoho.com/home#security/application
2. Generate an **App-Specific Password** for "Urja SMTP"
3. Use this app-specific password in `SMTP_PASS`

## Available Scripts

### Development

```bash
npm run dev           # Start development server (native)
npm run docker:dev    # Start development server (Docker with hot reload)
```

### Building

```bash
npm run build         # Build production bundle
npm run docker:build  # Build Docker images
```

### Production

```bash
npm start            # Start production server (native)
npm run docker:up    # Start production server (Docker)
```

### Database

```bash
npm run db:push           # Run database migrations (native)
npm run docker:db:push    # Run database migrations (Docker)
```

### Docker Operations

```bash
npm run docker:build   # Build Docker images
npm run docker:up      # Start all services
npm run docker:down    # Stop all services
npm run docker:dev     # Start with hot reload
npm run docker:logs    # View logs
```

### Type Checking

```bash
npm run check         # Run TypeScript type checking
```

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DATABASE_URL` | ✓ | - | PostgreSQL connection string |
| `NODE_ENV` | ✓ | `production` | Environment mode (`development` or `production`) |
| `PORT` | ✓ | `5000` | Application server port |
| `SMTP_HOST` | ✓ | - | SMTP server hostname (smtp.zoho.com) |
| `SMTP_PORT` | ✓ | - | SMTP port (587 for TLS, 465 for SSL) |
| `SMTP_USER` | ✓ | - | SMTP username (email address) |
| `SMTP_PASS` | ✓ | - | SMTP password or app-specific password |
| `ADMIN_EMAIL` | ✓ | - | Email address to receive notifications |

## Application Routes

- `/` - Home page
- `/solutions` - Solutions page
- `/case-studies` - Case studies page
- `/about` - About page
- `/contact` - Contact form page

## API Endpoints

### Contact Form Submission

**POST** `/api/contact`

Submit a contact form inquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "company": "Acme Inc",
  "email": "john@example.com",
  "phone": "+91 86259 47016",
  "requirement": "We need help with..."
}
```

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "company": "Acme Inc",
  "email": "john@example.com",
  "phone": "+91 86259 47016",
  "requirement": "We need help with...",
  "createdAt": "2026-01-29T10:30:00.000Z"
}
```

**Email Behavior:**
- Email is sent asynchronously (non-blocking)
- Form submission succeeds even if email fails
- Email errors are logged but don't affect the response

## Database Schema

### Inquiries Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | serial | PRIMARY KEY | Auto-incrementing ID |
| `name` | text | NOT NULL | Contact person's name |
| `company` | text | NOT NULL | Company name |
| `email` | text | NOT NULL | Email address |
| `phone` | text | NOT NULL | Phone number |
| `requirement` | text | NOT NULL | Project requirement details |
| `createdAt` | timestamp | DEFAULT NOW() | Submission timestamp |

## Development Workflow

### 1. Making Changes

```bash
# Native development
npm run dev

# Docker development (with hot reload)
npm run docker:dev
```

Changes to the code will automatically reload the application.

### 2. Running Type Checks

```bash
npm run check
```

### 3. Building for Production

```bash
# Native build
npm run build

# Docker build
npm run docker:build
```

### 4. Testing Email Functionality

1. Start the application
2. Navigate to http://localhost:5000/contact
3. Fill out and submit the contact form
4. Check server logs for email status
5. Verify email received at admin@urjacore.in
6. Verify database entry created

## Troubleshooting

### Port Already in Use

```bash
# Find and kill the process using port 5000
# Windows
netstat -ano | findstr :5000

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

### Database Connection Issues

1. Verify PostgreSQL is running
2. Check DATABASE_URL in `.env`
3. Ensure database exists and user has permissions
4. For Docker: Check container health with `docker-compose ps`

### Email Not Sending

1. Verify SMTP credentials in `.env`
2. Check if 2FA is enabled (use app-specific password)
3. Review server logs for email errors
4. Test SMTP connection: `telnet smtp.zoho.com 587`

### Docker Issues

See **[DOCKER_SETUP.md](./DOCKER_SETUP.md)** for comprehensive Docker troubleshooting.

## Production Deployment

### Using Docker (Recommended)

1. **Set environment variables** in `.env`
2. **Build production image**: `npm run docker:build`
3. **Start services**: `npm run docker:up -d`
4. **Run migrations**: `npm run docker:db:push`
5. **Set up reverse proxy** (nginx, Caddy) for HTTPS
6. **Configure automated backups** for PostgreSQL

### Native Deployment

1. **Build the application**: `npm run build`
2. **Set NODE_ENV=production**
3. **Start the server**: `npm start`
4. **Use a process manager** (PM2, systemd) for reliability
5. **Set up reverse proxy** for HTTPS

## Security Considerations

- Environment variables stored in `.env` (not committed to git)
- SMTP credentials protected
- Docker containers run as non-root user
- Input validation with Zod
- SQL injection protection via Drizzle ORM
- CORS and security headers (add in production)

## Performance

- Multi-stage Docker builds for smaller images (~150MB)
- Production builds optimized with Vite
- PostgreSQL connection pooling
- Non-blocking email sending
- Efficient database queries with Drizzle ORM

## License

MIT

## Contact

For questions or support, please contact:
- Email: admin@urjacore.in
- Phone: +91 7498236616

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type checks: `npm run check`
5. Test thoroughly
6. Submit a pull request

## Acknowledgments

Built with modern technologies:
- React, Express, PostgreSQL
- Tailwind CSS, shadcn/ui
- Drizzle ORM, Zod
- Docker, Nodemailer
