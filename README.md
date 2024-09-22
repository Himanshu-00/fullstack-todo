# Full Stack To-Do List App

This project is a full-stack to-do list application built using **Node.js**, **WebSockets**, **Redis**, **MongoDB**, and **React**. The backend is powered by Node.js with real-time capabilities using WebSockets, while the frontend is a React app. The project is fully Dockerized and can be easily deployed using Docker Compose.

## Features

- **Real-time task addition** using WebSockets.
- **Redis cache** to store tasks temporarily.
- **MongoDB** for persistent storage when Redis cache exceeds 50 tasks.
- **HTTP API** to fetch all tasks.
- **React frontend** with real-time updates.
- **Dockerized** for easy setup.
- **Hosted on Render (backend)** and **Vercel (frontend)**.

## Tech Stack

- **Backend**: Node.js, Express, Socket.IO, Redis, MongoDB
- **Frontend**: React, Axios, Socket.IO client
- **Database**: MongoDB
- **Cache**: Redis
- **Containerization**: Docker, Docker Compose

## Project Structure

```bash
fullstack-task/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── app.js
│   ├── server.js
│   └── Dockerfile
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
# Full Stack To-Do List App

This project is a full-stack to-do list application built using **Node.js**, **WebSockets**, **Redis**, **MongoDB**, and **React**. The backend is powered by Node.js with real-time capabilities using WebSockets, while the frontend is a React app. The project is fully Dockerized and can be easily deployed using Docker Compose.

## Features

- **Real-time task addition** using WebSockets.
- **Redis cache** to store tasks temporarily.
- **MongoDB** for persistent storage when Redis cache exceeds 50 tasks.
- **HTTP API** to fetch all tasks.
- **React frontend** with real-time updates.
- **Dockerized** for easy setup.
- **Hosted on Render (backend)** and **Vercel (frontend)**.

## Tech Stack

- **Backend**: Node.js, Express, Socket.IO, Redis, MongoDB
- **Frontend**: React, Axios, Socket.IO client
- **Database**: MongoDB
- **Cache**: Redis
- **Containerization**: Docker, Docker Compose

## Project Structure

```bash
fullstack-task/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── app.js
│   ├── server.js
│   └── Dockerfile
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
