NimbusFlow Frontend

AI-Powered Resume Matching Platform UI

⸻

Overview

NimbusFlow Frontend is a modern React-based user interface for the NimbusFlow AI Resume Matching Platform.

The frontend allows users to:

* Upload resumes
* Create and manage job descriptions
* Analyze resume-job match scores
* View AI-powered ATS recommendations
* Detect missing skills
* Authenticate securely using JWT

The application communicates with a cloud-native Spring Boot microservices backend through an API Gateway.

⸻

Features

Authentication

* JWT-based login
* Secure API integration
* Protected routes
* Token persistence

Resume Management

* Upload resumes
* View uploaded resumes
* Analyze resume-job compatibility

Job Management

* Create job descriptions
* View job listings
* Manage skills and requirements

AI Resume Analysis

* AI semantic matching
* Match score visualization
* Missing skills detection
* ATS optimization suggestions
* LLM-generated recommendations

Modern UI

* Responsive design
* Tailwind CSS styling
* Dashboard-style layout
* Interactive analysis cards
* User-friendly workflow

⸻

Technology Stack

Technology	Usage
React	Frontend framework
Tailwind CSS	Styling
Axios	API communication
JWT	Authentication
React Hooks	State management
Docker	Containerization

⸻

Project Structure

nimbusflow-frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── App.js
│
├── Dockerfile
├── package.json
└── README.md

⸻

Frontend Screens

Dashboard

* Resume upload
* Job management
* Match analysis
* AI insights

Match Analysis

Displays:

* Match Score
* Semantic Score
* Alignment Score
* Matched Skills
* Missing Skills
* AI Recommendations

⸻

Backend Integration

The frontend communicates through:

http://localhost:8080

using:

* Spring Cloud Gateway
* JWT-secured APIs
* REST endpoints

⸻

Local Development Setup

Prerequisites

Install:

* Node.js
* npm
* Docker (optional)

⸻

Clone Repository

git clone <your-frontend-repository-url>

⸻

Install Dependencies

npm install

⸻

Start Development Server

npm start

Frontend runs at:

http://localhost:3000

⸻

Environment Configuration

Create:

.env

Example:

REACT_APP_API_URL=http://localhost:8080

⸻

Docker Setup

Build Frontend

docker build -t nimbusflow-frontend .

Run Frontend

docker run -p 3000:3000 nimbusflow-frontend

⸻

API Features

Resume APIs

* Upload resume
* Retrieve resumes
* Match analysis

Job APIs

* Create job
* Retrieve jobs
* Manage skills

Auth APIs

* Login
* JWT token generation
* Secure API access

⸻

Security

The frontend supports:

* JWT token storage
* Secure API authorization
* Protected API requests
* Session persistence

⸻

Future Enhancements

Frontend Improvements

* Dark mode
* Real-time notifications
* Analytics dashboard
* Resume preview
* AI chat assistant
* Drag-and-drop uploads
* Advanced charts

Cloud-Native Enhancements

* Kubernetes deployment
* CI/CD pipeline
* CDN hosting
* Monitoring dashboards

⸻

Production Deployment Goals

Planned deployment targets:

* Kubernetes
* Docker containers
* Nginx reverse proxy
* Cloud hosting
* CI/CD automation

⸻

Related Backend Repository

NimbusFlow Backend contains:

* Spring Boot microservices
* AI matching engine
* PostgreSQL integration
* Docker infrastructure
* JWT authentication
* API Gateway

⸻

Author

Sapan Bhandari

Software Engineer | Java | Spring Boot | React | AI | Cloud Engineering

⸻

License

This project is for educational and portfolio purposes.
