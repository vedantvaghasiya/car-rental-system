# 🚗 Car Rental System

## 📝 Description

The **Car Rental System** is a full-stack web application designed to simplify and streamline the process of renting cars. Built with a focus on usability and performance, the system allows an administrator to manage cars, customers, and bookings efficiently. Customers can register, log in, view available vehicles, and make bookings through a user-friendly interface.

This project aims to enhance the car rental experience by providing a modern and intuitive platform for both customers and admin users.

---

## 📚 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## ✨ Features

- Admin dashboard to manage cars, customers, and bookings.
- Add, update, or delete car listings.
- Accept or cancel bookings.
- Customer sign-up and login.
- Browse and book available cars.
- Connects to MongoDB for real-time data storage and retrieval.
- Responsive design for ease of use across devices.

---

## ⚙️ Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MongoDB Compass](https://www.mongodb.com/products/compass) (for GUI)

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/car-rental-system.git
    ```

2. **Install backend dependencies**:

    ```bash
    cd car-rental-system/mernbackend
    npm install
    ```

3. **Install frontend dependencies** (if frontend exists in a separate folder):

    ```bash
    cd ../mernfrontend
    npm install
    ```

4. **Ensure MongoDB is running locally**, and open **MongoDB Compass** to monitor data.

---

## 🚀 Usage

1. Navigate to the backend source folder:

    ```bash
    cd mernbackend/src
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```

3. Make sure the backend is connected to your local MongoDB database (configured in your `.env` file).

4. Start the frontend (if applicable):

    ```bash
    cd ../../mernfrontend
    npm start
    ```

5. Open your browser and visit: `http://localhost:3000`

---

## ⚙️ Configuration

Create a `.env` file in the backend directory (`mernbackend/src/`) with the following environment variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/car-rental-db
JWT_SECRET=your_jwt_secret
