Description of the app 
https://github.com/rjametge-collab/travelAndspeakProject-VoyageFrancais.description/blob/main/Voyage_Francais_README.md

local environment: http://localhost:5174/

Render: https://frontendcapstonevoyagefrancais.onrender.com/

https://github.com/rjametge-collab/FrontEndCapstoneVoyageFrancais



# Voyage Français — Backend API 🇫🇷🚀

## Overview

The Voyage Français backend is a RESTful API built with Node.js, Express, and MongoDB.

It manages authentication, users, French lessons, destinations, and travel planning features.

The backend provides the data layer and API services consumed by the React frontend.

## Features

### Authentication

* User registration
* User login
* Password hashing with bcrypt
* Session-based authentication
* MongoDB session storage

### Users

User accounts include:

* First name
* Last name
* Email
* Password
* Completed lessons
* Saved trips

### French Lessons

* Create lessons
* Retrieve lessons
* Update lessons
* Delete lessons

### Destinations

* Create destinations
* Retrieve destinations
* Update destinations
* Delete destinations
* Destination image uploads

### Trips

* Create trips
* Retrieve trips
* Update trips
* Delete trips

## Technologies Used

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcrypt
* express-session
* connect-mongo
* dotenv
* CORS

## Project Structure

```
backend
│
├── src
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── lessonController.js
│   │   ├── destinationController.js
│   │   └── tripController.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Lesson.js
│   │   ├── Destination.js
│   │   └── Trip.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── lessonRoutes.js
│   │   ├── destinationRoutes.js
│   │   └── tripRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

SESSION_SECRET=your_session_secret
```

## Running the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

## API Endpoints

## Authentication

### Register User

```
POST /api/auth/register
```

Example:

```json
{
  "firstName": "Romain",
  "lastName": "Metge",
  "email": "example@email.com",
  "password": "password123"
}
```

---

### Login User

```
POST /api/auth/login
```

Example:

```json
{
  "email": "example@email.com",
  "password": "password123"
}
```

---

## Lessons

Get all lessons:

```
GET /api/lessons
```

Get lesson:

```
GET /api/lessons/:id
```

Create lesson:

```
POST /api/lessons
```

Update lesson:

```
PUT /api/lessons/:id
```

Delete lesson:

```
DELETE /api/lessons/:id
```

---

## Destinations

Get destinations:

```
GET /api/destinations
```

Create destination:

```
POST /api/destinations
```

Update destination:

```
PUT /api/destinations/:id
```

Delete destination:

```
DELETE /api/destinations/:id
```

---

## Trips

Get trips:

```
GET /api/trips
```

Create trip:

```
POST /api/trips
```

Update trip:

```
PUT /api/trips/:id
```

Delete trip:

```
DELETE /api/trips/:id
```

---

## Database Design

MongoDB collections:

### Users

Stores:

* User information
* Authentication data
* Completed lessons
* Saved trips

### Lessons

Stores:

* French lesson content
* Vocabulary
* Phrases
* Grammar information

### Destinations

Stores:

* French cities
* Regions
* Descriptions
* Images

### Trips

Stores:

* User travel plans
* Destinations
* Dates
* Notes

## Deployment

Recommended production stack:

Frontend:

* Vercel

Backend:

* Render

Database:

* MongoDB Atlas

## Future Improvements

* User-specific trip management
* Lesson progress tracking
* Premium subscriptions
* Payment integration
* AI travel assistant
* Advanced recommendation system

## Author

Voyage Français was created as a full-stack web development capstone project.

## License

This project is for educational and portfolio purposes.


