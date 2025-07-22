# Replit.md

## Overview

This is a React Learning Hub application that showcases four different React projects demonstrating various concepts from beginner to advanced levels. The application is built as a full-stack TypeScript project using React for the frontend, Express.js for the backend, and includes a PostgreSQL database setup with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Shadcn/UI component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite with hot module replacement for development

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module")
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured but not yet implemented)
- **Connection**: Neon Database serverless driver
- **Migrations**: Drizzle Kit for schema management

## Key Components

### Learning Projects
1. **myfirstreact**: Basic React component demonstrating JSX and rendering
2. **StudentApp**: Multi-component application with class components (Home, About, Contact)
3. **scorecalculatorapp**: Props handling and calculations with custom CSS styling
4. **blogapp**: Advanced concepts including API integration, error handling, and lifecycle methods

### UI System
- **Design System**: Shadcn/UI with "new-york" style variant
- **Theme**: Neutral base color with CSS variables for light/dark mode support
- **Components**: Comprehensive set of accessible UI components from Radix UI

### Development Features
- **Error Handling**: Runtime error overlay in development
- **Hot Reload**: Vite HMR for instant feedback
- **TypeScript**: Strict type checking across the entire codebase
- **Path Aliases**: Clean import paths with @ aliases

## Data Flow

### Frontend Data Flow
1. React Query manages server state and caching
2. Components use hooks for local state management
3. Wouter handles client-side navigation
4. Custom query functions handle API communication with error handling

### Backend Data Flow
1. Express routes handle API requests (currently minimal)
2. Storage interface provides CRUD operations
3. In-memory storage for development, designed for easy database integration
4. Middleware for request logging and error handling

### Database Integration
- Drizzle schema defines user table structure
- Configured for PostgreSQL but uses in-memory storage in development
- Easy migration path to full database implementation

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Components**: Radix UI primitives, Shadcn/UI components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Database**: Drizzle ORM, Neon Database driver
- **Utilities**: Date-fns, clsx, Zod for validation

### Development Tools
- **Build**: Vite, ESBuild for production builds
- **TypeScript**: Strict configuration with path mapping
- **Linting/Formatting**: Configured for TypeScript and React

### Replit Integration
- **Development Banner**: Replit development environment integration
- **Error Overlay**: Replit-specific error handling
- **Cartographer**: Development tooling for Replit environment

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend with HMR
- **Hot Reload**: Vite provides instant feedback for frontend changes
- **API Proxy**: Vite dev server proxies API requests to Express backend

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves built React app in production

### Database Deployment
- **Schema Management**: `npm run db:push` applies schema changes
- **Environment Variables**: `DATABASE_URL` required for PostgreSQL connection
- **Migration Strategy**: Drizzle Kit handles schema evolution

### Hosting Considerations
- **Server**: Node.js environment with ES Module support
- **Database**: PostgreSQL database (Neon or similar serverless option)
- **Static Assets**: Served directly by Express in production
- **Environment**: Production builds are optimized and minified