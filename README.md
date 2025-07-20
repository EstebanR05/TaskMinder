# ✅ TaskMinder

A fullstack task management system with a PHP backend and an Angular 18 frontend.

---

## ✨ About

TaskMinder helps teams and individuals organize, track, and manage their tasks efficiently. It features user authentication, task prioritization, state management, and analytics, making it ideal for productivity and project management.

---

## 🚀 Requirements

- [XAMPP](https://www.apachefriends.org/) v8.1.x (for backend)
- [Node.js](https://nodejs.org/) v18.x or v20.x (for frontend)
- [Angular CLI](https://angular.io/cli) v18.x
- Modern web browser

---

## ⚡ Installation

### 🛠️ Backend (PHP)

1. **Copy the `api/` folder into your XAMPP `htdocs` directory.**
2. **Start Apache and MySQL from the XAMPP control panel.**
3. **Import the database:**
   - Open [phpMyAdmin](http://localhost/phpmyadmin)
   - Create a new database (e.g., `taskminder`)
   - Import the SQL file from `api/database/`.
4. **Configure database connection in the PHP files if needed.**
5. **Access the API in your browser:**
   ```
   http://localhost/api/v1/
   ```

---

### 🛠️ Frontend (Angular)

1. **Navigate to the frontend folder:**
   ```sh
   cd TaskMinder/Frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the Angular app:**
   ```sh
   npm start
   ```
   The app will be available at `http://localhost:4200`.

---

## 📝 Notes

- Use XAMPP version 8.1 for best compatibility with the PHP backend.
- Make sure you have Node.js v18.x or v20.x and Angular CLI v18.x for the frontend.
- The backend provides RESTful endpoints for authentication, tasks, priorities, roles, and states.
- The frontend is built with Angular 18 and CoreUI for a modern UI experience.

---

## 🤝 Contributing

Contributions and suggestions are welcome! Please open an issue or pull request. 🙌

---

## 📝 License

This project is licensed under the MIT License.

---

> **Note:**  
> Replace `<your-repo-url>` with your actual repository URL if you wish to share or deploy it online.
