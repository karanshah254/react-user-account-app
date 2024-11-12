# React User Account Management Application

## 📝 Project Overview

This project is a **React application** built with **Vite** (React V16+), enabling users to register, log in, and manage their account information. It features a simple yet effective user interface with functionalities to:

- Register a new user account.
- Log in using the registered credentials.
- View and update profile information, including the option to change the password.
- Log out while retaining user data for future sessions.
- Show/Hide password functionality using icons for better user experience.

The application is styled using **Bootstrap** and custom CSS for a modern look and responsive design.

---

## 💻 Tech Stack

- **Frontend:**
  - React (V16+)
  - Vite
  - JavaScript
  - Bootstrap
  - CSS (Custom styling)
  - Bootstrap Icons

- **Tools & Libraries:**
  - `react-router-dom`: For navigation between different pages (Login, Register, Profile).
  - `localStorage`: Used for persistent data storage (user information).

- **Development Environment:**
  - Vite: For fast and efficient development build.
  - Node.js (LTS version)
  - npm (or yarn): For package management.

---

## 📋 Features

### 1. **User Registration**
- Allows new users to register with a **name**, **email**, and **password**.
- Validates that the password and confirm password fields match before submission.
- Stores user information securely in `localStorage`.

### 2. **User Login**
- Users can log in using their registered email and password.
- Validates the credentials against the data stored in `localStorage`.
- Redirects to the profile page upon successful login.

### 3. **Profile Management**
- Displays user information (name and email).
- Allows users to update their **name** and change their **password**.
- Provides a show/hide password feature using eye icons for better user experience.
- Ensures the updated data is saved back to `localStorage`.

### 4. **Persistent Storage**
- User data is stored in `localStorage`, allowing users to remain logged in even after refreshing the page or reopening the browser.
- Logging out only removes the login status, keeping the user data intact for future login attempts.

### 5. **Responsive UI**
- The application uses **Bootstrap** and custom CSS for a responsive and clean UI design.
- Includes interactive elements like password visibility toggle and form validation alerts.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (LTS version)
- npm (or yarn)

### Installation
1. Clone the repository:
   ```bash
   git clone url
   cd react-user-account-app
2. Install the dependencies
    ```bash
    npm install
3. Start the development server
    ```bash
    npm run dev
4. Open the application in your browser
    ```arduino
    http://localhost:5173

### 🛠️ Project Structure
```arduino
react-user-account-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Profile.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
