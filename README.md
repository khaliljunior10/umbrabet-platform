# UmbraBet Platform

A production-ready monorepo for the UmbraBet platform featuring a Next.js web app, NestJS API, admin dashboard, and Flutter mobile app.

## 🏗️ Architecture

This is a monorepo managed by [Turborepo](https://turbo.build) containing:

### Apps
- **apps/web** - Next.js 15 customer-facing web application
- **apps/api** - NestJS backend API
- **apps/admin** - Next.js admin dashboard
- **apps/mobile** - Flutter mobile application

### Packages
- **packages/ui** - Shared React UI components
- **packages/config** - Shared configuration (ESLint, Prettier, TypeScript)
- **packages/shared** - Shared utilities, types, and constants

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker & Docker Compose
- Flutter SDK (for mobile development)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/khaliljunior10/umbrabet-platform.git
   cd umbrabet-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start services with Docker**
   ```bash
   docker-compose up -d
   ```

5. **Setup database**
   ```bash
   npm run db:migrate
   ```

6. **Start development servers**
   ```bash
   npm run dev
   ```

This will start:
- Web app: http://localhost:3000
- Admin: http://localhost:3002
- API: http://localhost:3001

## 📦 Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, TypeScript
- **Backend**: NestJS, PostgreSQL, Prisma ORM, Redis
- **Mobile**: Flutter
- **DevOps**: Docker, Docker Compose, GitHub Actions
- **Code Quality**: ESLint, Prettier, TypeScript
- **Build**: Turborepo

## 🔐 Authentication

JWT-based authentication implemented in the API with secure token handling across all apps.

## 📚 Available Scripts

```bash
# Development
npm run dev              # Start all apps in dev mode

# Building
npm run build            # Build all apps

# Quality
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking
npm run test             # Run tests

# Database
npm run db:migrate       # Run migrations
npm run db:push          # Push schema to database
npm run db:studio        # Open Prisma Studio
```

## 📋 Database Schema

Initial Prisma schema includes:
- `User` - User accounts and profiles
- `Wallet` - User wallet balances
- `Transaction` - Financial transactions
- `KYC` - Know Your Customer verification
- `Notification` - User notifications

## 🐳 Docker Compose

Services included:
- PostgreSQL database
- Redis cache
- API service
- Web service
- Admin service

## 🔄 CI/CD

GitHub Actions workflows configured for:
- Linting and type checking
- Testing
- Building
- Docker image building

## 📝 Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and development process.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 🤝 Support

For support, please open an issue or contact the development team.
