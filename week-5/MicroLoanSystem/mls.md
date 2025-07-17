# Microservices API - Account & Loan Services

## Overview

This is a Node.js Express application that provides microservices for account and loan management. The application serves as a unified API gateway that handles both account and loan operations through RESTful endpoints. It includes a web-based frontend for testing the API endpoints and provides a simple, clean architecture for financial service operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend Architecture
- **Framework**: Node.js with Express.js 5.1.0
- **Architecture Pattern**: Modular routing with separation of concerns
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error handling with custom 404 and error middleware
- **CORS**: Configured to allow cross-origin requests from any origin

### Frontend Architecture
- **Type**: Single Page Application (SPA)
- **Technology**: Vanilla HTML, CSS, JavaScript
- **UI Framework**: Bootstrap 5.3.0 for responsive design
- **Icons**: Font Awesome 6.0.0 for visual elements
- **Styling**: Custom CSS with modern design patterns

## Key Components

### 1. Server Configuration (server.js)
- Main application entry point
- Middleware configuration for JSON parsing and CORS
- Route mounting for accounts and loans
- Health check endpoint for monitoring
- Static file serving for the frontend
- Error handling middleware

### 2. Account Service (routes/accounts.js)
- **Purpose**: Handles account-related operations
- **Main Endpoint**: `GET /api/accounts/{number}`
- **Features**:
  - Account number validation
  - Mock account data generation
  - Error handling for invalid inputs
  - Returns account details including balance, type, and holder information

### 3. Loan Service (routes/loans.js)
- **Purpose**: Handles loan-related operations
- **Main Endpoint**: `GET /api/loans/{number}`
- **Features**:
  - Loan number validation
  - Mock loan data generation
  - Error handling for invalid inputs
  - Returns loan details including EMI, tenure, and borrower information

### 4. Frontend Interface
- **Main Page**: Interactive web interface for testing APIs
- **Account Section**: Form to query account details
- **Loan Section**: Form to query loan details
- **Response Display**: Formatted JSON response viewer with syntax highlighting

## Data Flow

1. **Client Request**: User interacts with the web interface or makes direct API calls
2. **Server Processing**: Express server receives requests and routes them to appropriate handlers
3. **Route Handling**: Account or loan route handlers validate input and generate mock responses
4. **Response Generation**: Structured JSON responses are sent back to the client
5. **Frontend Display**: Web interface formats and displays the API responses

## External Dependencies

### Runtime Dependencies
- **express**: Web application framework for Node.js
- **Standard Node.js modules**: path for file system operations

### Frontend Dependencies (CDN)
- **Bootstrap 5.3.0**: CSS framework for responsive design
- **Font Awesome 6.0.0**: Icon library for UI elements

## Deployment Strategy

### Current Setup
- **Environment**: Development/Local
- **Port Configuration**: Uses environment variable PORT or defaults to 5000
- **Static Assets**: Served directly from the public directory
- **Process Management**: Basic Node.js process with npm start script

### Production Considerations
- The application is configured for easy deployment with environment-based port configuration
- CORS is currently open to all origins (suitable for development, needs restriction for production)
- Health check endpoint available for load balancer monitoring
- Static file serving is handled by Express (consider using a reverse proxy in production)

### Architecture Decisions

1. **Monolithic Structure**: Chose to implement both services in a single Express application for simplicity and development efficiency
2. **Mock Data**: Used hardcoded mock responses instead of database integration for rapid prototyping
3. **RESTful Design**: Followed REST principles for API endpoint design
4. **Error Handling**: Implemented comprehensive error handling with appropriate HTTP status codes
5. **Frontend Integration**: Included a web interface for easy testing and demonstration

The system is designed to be easily extensible, allowing for future addition of database integration, authentication, and more complex business logic while maintaining the current API structure.