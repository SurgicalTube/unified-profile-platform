# Unified Profile Platform

## Overview
The **Unified Profile Platform** is an advanced React-based application that serves as a centralized solution for managing professional profiles and streamlining the job application process. It features a modern glassmorphism design, secure authentication through Auth0, and comprehensive profile management capabilities.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🌟 Key Features

### Profile Management
- **Multi-Document Support**: Upload and manage multiple versions of resumes, cover letters, and certifications
- **Profile Versioning**: Maintain different versions of profiles for various industries/roles
- **Real-time Updates**: Instant saving and synchronization of profile changes
- **Document Organization**: Structured storage and management of professional documents

### User Interface
- **Modern Design**: Implements glassmorphism design principles for a contemporary look
- **Responsive Layout**: Fully responsive design that works across all devices
- **Animated Interactions**: GSAP-powered animations for smooth user experience
- **Tab-based Navigation**: Organized content presentation through intuitive tabs

### Security & Authentication
- **Auth0 Integration**: Secure authentication and authorization
- **Protected Routes**: Role-based access control for sensitive areas
- **Secure Storage**: Encrypted local storage for user data
- **Session Management**: Robust session handling and persistence

## 🛠 Technology Stack

### Frontend
- React 18.3.1
- Redux Toolkit for state management
- Material-UI (MUI) 6.1.2
- GSAP for animations
- React Router DOM 6.26.2

### State Management & Data
- Redux with Redux Toolkit
- Local Storage persistence
- Real-time state synchronization

### Styling & UI
- Custom CSS with glassmorphism effects
- Material-UI components
- GSAP animations
- Responsive design principles

### Authentication & Security
- Auth0 React SDK
- Protected routes implementation
- Secure session management

### 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Auth0 account and credentials

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SurgicalTube/unified-profile-platform.git
   cd unified-profile-platform
2. Install dependencies for both frontend and backend:
   # For backend
        cd backend
        npm install

# For frontend
        cd ../frontend
        npm install

### Environment Variables

Create a .env file in both the backend and frontend directories, and add the following environment variables:

** Backend (backend/.env)
### MONGODB_URI=<your-mongodb-uri>  -->  This Should be Set up on your own or set it up for this project
PORT=5001
AUTH0_DOMAIN=<your-auth0-domain> --> Again, set up on your own, I cant afford to keep this... If you have other open source options, please do them
AUTH0_CLIENT_ID=<your-auth0-client-id>
AUTH0_CLIENT_SECRET=<your-auth0-client-secret>
**

### Frontend (frontend/.env)
    NEXT_PUBLIC_AUTH0_DOMAIN=<your-auth0-domain>
    NEXT_PUBLIC_AUTH0_CLIENT_ID=<your-auth0-client-id>

Running the Project

	1.	Start the backend server:
      cd backend
      npm start
    2. Start the frontend development server:
    cd frontend
    npm run dev
    	3.	Visit http://localhost:3000 in your browser to view the frontend, and http://localhost:5001 to check the backend.

### Project Structure

	unified-profile-platform/
	├── backend/           # Node.js backend with Express and MongoDB connection
	│   ├── db.js          # Database connection file
	│   ├── server.js      # Main server file
	│   └── .env           # Environment variables for backend
	├── frontend/          # Next.js frontend with React and Tailwind CSS
	│   ├── pages/         # Next.js pages
	│   ├── components/    # Reusable components
	│   └── .env           # Environment variables for frontend
	├── README.md          # Project documentation
	└── .gitignore         # Git ignore file

### Contributing

Contributions are welcome! Please follow these steps to contribute:
	1.	Fork the project.
	2.	Create your feature branch (git checkout -b feature/AmazingFeature).
	3.	Commit your changes (git commit -m 'Add some AmazingFeature').
	4.	Push to the branch (git push origin feature/AmazingFeature).
	5.	Open a pull request.

### License

Distributed under the MIT License. See LICENSE for more information.

Project Link: https://github.com/SurgicalTube/unified-profile-platform
