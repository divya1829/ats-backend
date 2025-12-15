# ats-backend
# ATS Backend – Job Application Tracking System

## Overview
This project implements a backend system for a Job Application Tracking System (ATS).
It manages job postings, candidate applications, and application workflows using
role-based access control (RBAC) and a state-machine-driven process.

## Architecture
The application follows a layered architecture:
- Routes handle HTTP requests
- Controllers and services manage business logic
- Middleware enforces authentication and RBAC
- Background workers handle asynchronous email notifications

Asynchronous processing ensures API responsiveness.

## Roles and Permissions (RBAC)

| Role | Permissions |
|------|-------------|
| Candidate | Apply for jobs, view own applications |
| Recruiter | Create jobs, review and update application stages |
| Hiring Manager | View applications |

## Application Workflow
The application follows a strict workflow:
Applied → Screening → Interview → Offer → Hired

The application can be moved to **Rejected** from any stage.
Invalid transitions (e.g., Applied → Offer) are blocked by the state machine.

## API Endpoints

### Authentication
- POST /auth/register
- POST /auth/login

### Jobs
- POST /jobs (Recruiter only)

### Applications
- POST /applications/change-stage

## Asynchronous Email Notifications
Email notifications are handled asynchronously by a background worker to prevent
blocking the main API. Notifications are triggered on key events such as application
submission and stage changes.

## Environment Setup

Install dependencies:
```bash
npm install
