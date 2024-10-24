
# EasyTeam Backend API

### Node.js, Express, Mongoose Backend API

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Authentication](#authentication)
- [Running the Project](#running-the-project)

---

## Project Description

This is the backend API for the EasyTeam time tracking application. The backend is built using **Node.js**, **Express**, and **Mongoose**. It provides endpoints for managing employees, locations, authentication, and various settings required for time tracking and employee management.

The API supports role-based access control, JWT-based authentication, and settings management. It uses **RS256** algorithm for signing JWT tokens.

## Features

- **Employee Management**: Create, update, and manage employees in the system.
- **Location Management**: Manage work locations for employees.
- **Settings Management**: Manage global settings, such as enabling or disabling global tracking.
- **JWT Authentication**: Uses RS256 algorithm for secure JWT authentication.
- **Role-based Access Control**: Protects endpoints with middleware for authorization.

## Tech Stack

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Mongoose**: ODM for MongoDB.
- **JWT (JSON Web Token)**: For secure user authentication.
- **RS256 Algorithm**: For signing JWTs using a private key.

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure that the following are installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (Local or cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aimal09/EastTeamTaskServer
   cd easyteam-backend-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```bash
   MONGODB_URL=your-mongodb-url
   PORT=your-port
   PARTNER_ID=your-partner-id
   JWT_SECRET=your-jwt-secret
   IS_GLOBAL_TRACKING_ENABLED=false
   ```

   Replace `your-mongodb-url`, `your-port`, `your-partner-id`, and `your-jwt-secret` with appropriate values.

### Environment Variables

The app requires the following environment variables, which should be defined in a `.env` file in the root of the project:

- **MONGODB_URL**: MongoDB connection URL.
- **PORT**: The port on which the app will run.
- **PARTNER_ID**: Partner ID for authenticating requests.
- **JWT_SECRET**: Secret for JWT authentication.
- **IS_GLOBAL_TRACKING_ENABLED**: Boolean flag to enable/disable global tracking (can be modified via settings API).

## API Endpoints

### Authentication
- **POST /login**: Authenticate users and issue JWT token.

### Employees
- **GET /employees**: Get all employees.
- **POST /employees**: Create a new employee.
- **PUT /employees/:id**: Update an employee.
- **DELETE /employees/:id**: Delete an employee.

### Locations
- **GET /locations**: Get all locations.
- **POST /locations**: Create a new location.
- **PUT /locations/:id**: Update a location.
- **DELETE /locations/:id**: Delete a location.

### Settings
- **GET /settings**: Retrieve global settings.
- **PUT /settings**: Update global settings (e.g., enable/disable global tracking).

## Folder Structure

The project is organized as follows:

```bash
.
├── controllers/                # Business logic for handling requests
│   ├── LoginController.js       # Handles user authentication and JWT issuance
│   ├── EmployeeController.js    # Handles employee management
│   ├── LocationController.js    # Handles location management
│   └── SettingsController.js    # Handles global settings management
├── middleware/                 # Middleware for request handling
│   └── auth.js                 # JWT authentication middleware
├── models/                     # Mongoose models for MongoDB collections
│   ├── EmployeeModel.js         # Schema for Employee
│   └── LocationModel.js         # Schema for Location
├── .env                        # Environment variables (should not be included in version control)
├── private_key.key              # Private key for JWT signing (RS256 algorithm)
├── index.js                    # Entry point for the server
└── package.json                # NPM package dependencies and scripts
```

## Authentication

Authentication is done using JWT, with the tokens signed using the **RS256** algorithm. The private key for signing JWTs is stored in the `private_key.key` file. Contact EasyTeam's team to get your ```private_key.key``` file

- The **auth.js** middleware is used to protect routes that require authentication.
- The JWT tokens include user-specific claims and are validated before access to protected routes is granted.

## Running the Project

To start the server locally:

1. **Start MongoDB** (if not already running locally or using a cloud instance like MongoDB Atlas).
2. **Run the app**:

   ```bash
   npm start
   ```

3. The server will start on the port defined in the `.env` file (default is `PORT=5001`).
