# 📝 ToDo Application

This project is a **To-Do List Application** designed to help users manage and track their daily tasks with ease. Built using modern web technologies, the app provides an intuitive interface for task creation, editing, and deletion.

## 🚀 Problem Statement

The goal of this project is to develop a simple yet effective to-do list application that allows users to:

- Add new tasks
- Mark tasks as completed
- Edit and delete tasks
- Store tasks persistently using Supabase for backend functionality

By building this application, users can easily keep track of their daily tasks and stay organized.

## 🔧 Technology Stack

| Layer               | Technology Used    |
|---------------------|--------------------|
| **Frontend**         | TypeScript, React, Tailwind CSS |
| **Backend**          | Supabase           |
| **Authentication**   | Supabase Auth      |
| **Deployment**       | Vercel or Netlify |

## 📁 Project Structure

ToDoApp/
├── public/             # Static files  
├── src/                # Main source code for React app  
│   ├── components/     # React components for tasks, modals, etc.  
│   ├── App.tsx         # Main app component  
│   ├── index.tsx       # Entry point of the React app  
│   └── styles/         # Tailwind CSS files and custom styling  
├── supabase/           # Supabase client and integration files  
├── .gitignore          # Git ignore file  
├── tailwind.config.ts  # Tailwind CSS configuration  
├── postcss.config.js   # PostCSS configuration  
├── vite.config.ts      # Vite configuration for build and dev server  
├── package.json        # Dependencies and scripts  
└── README.md           # 📄 Documentation

## 🛠 Features

- **Task Management**: Create, read, update, and delete tasks.  
- **User Authentication**: Users can sign up and log in securely using Supabase Auth.  
- **Responsive Design**: The app works well on both desktop and mobile devices.  
- **Persistent Storage**: Tasks are saved in Supabase for persistence across sessions.

## 🤖 Functionality

### Task Operations

- **Create Task**: Add tasks by providing a title and description.  
- **Edit Task**: Edit existing tasks to update details.  
- **Delete Task**: Remove tasks when no longer needed.  
- **Complete Task**: Mark tasks as completed with a simple toggle.

### Authentication

- Users can register and log in using Supabase Auth for secure authentication.  
- Once logged in, users can view and manage only their own tasks.

### Responsive Design

- The app automatically adapts to different screen sizes for a seamless experience.

## 📝 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Harish8703/todo.git
cd todo
