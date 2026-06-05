# Backend API Project

## Overview

This project is a simple Backend API built using Node.js and Express.js. It provides RESTful API endpoints for managing user data and demonstrates CRUD (Create, Read, Update, Delete) operations.

## Features

- Create a new user
- Retrieve all users
- Retrieve a user by ID
- Update user details
- Delete a user
- REST API architecture
- JSON request and response handling

## Technologies Used

- Node.js
- Express.js
- CORS
- Nodemon

## Project Structure

```
Project2/
│
├── server.js
├── package.json
├── package-lock.json
├── routes/
├── controllers/
├── README.md
└── node_modules/
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd Project2
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
npm start
```

For development mode:

```bash
npm run dev
```

## Server Configuration

The server runs on:

```text
http://localhost:8000
```

## API Endpoints

### Home Route

```http
GET /
```

Response:

```json
{
  "message": "Backend API Running Successfully"
}
```

### Get All Users

```http
GET /users
```

### Get User By ID

```http
GET /users/:id
```

### Create User

```http
POST /users
```

Request Body:

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com"
}
```

Response:

```json
{
  "id": 1,
  "name": "Mukesh",
  "email": "Mukesh@gmail.com"
}
```

### Update User

```http
PUT /users/:id
```

Request Body:

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com"
}
```

### Delete User

```http
DELETE /users/:id
```

## Testing the API

You can test the API using:

- Postman
- Thunder Client
- REST Client Extension

Example:

```http
POST http://localhost:8000/users
```

Body:

```json
{
  "name": "Mukesh",
  "email": "Mukesh@gmail.com"
}
``

## Learning Outcomes

- Understanding REST APIs
- Express.js fundamentals
- Routing and middleware
- Handling HTTP requests and responses
- API testing 

# Output Screenshots

## Home Route

![Home Route](screenshots/output1.png)

## Get All Users

![Get All Users](screenshots/output2.png)

## Create User

![Create User](screenshots/output3.png)


## Author

**Navaneetha**

## License

This project is for educational and internship purposes.