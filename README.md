# Toki ✨

> A clean, full-stack task manager app with Pomodoro integration. Built from scratch to defeat tutorial hell and embrace real-world development.

---

![Toki Preview](./frontend/src/assets/images/README/Login.png)

---

## 🧠 Why Toki?

Toki isn’t just another task manager — it’s the first app I’ve fully built on my own, from UI to backend logic. After months of tutorials, I wanted to break free and **build something real**, something I could iterate on, refine, and deploy. That’s how Toki was born.

---

## ✨ Features

### 📂 Task Management
- Create, update, delete tasks
- Set priority levels (high/low)
- Filter by priority
- Sort by:
  - Recent updates
  - Due date
  - Estimated time
  - Progress (based on Pomodoro sessions)
- Toggle between **Board View** (card layout) and **List View** (rows)

### 🍅 Pomodoro Integration
- Focus, Short Break, Long Break sessions
- Auto-starts **Breaks** after focus ends
- **Manual-start for Focus** (ensures user is ready to work)
- Tracks focus sessions per task

### 🎨 User Customization
- Set your own Pomodoro durations
- Customize session colors (Focus, Breaks)
- Change password and set a fun username

### 🔐 Authentication & Security
- JWT-based login/register
- Auto-logout on token expiry (with redirection + toast)

### 📱 Visuals & UX
- Fully responsive (desktop & mobile)
- Clean, intuitive interface
- Animated icons & tooltips for better guidance

---

## 📸 Screenshots

Here’s a guided tour of Toki from login to productivity:

### 🔑 Authentication

| **Login** | **Register** |
|----------|--------------|
| ![Login](./frontend/src/assets/images/README/MobileView-Login.png) | ![Register](./frontend/src/assets/images/README/Register.png) |

---

### 🏠 Dashboard & Task Management

| **Dashboard – Board View** | **Dashboard – List View** |
|----------------------------|----------------------------|
| ![Board View](./frontend/src/assets/images/README/Dashboard-boardView.png) | ![List View](./frontend/src/assets/images/README/Dashboard-listView.png) |

- **Sort & Filter:**
  | Sorting | Filtering |
  |---------|-----------|
  | ![Sorting](./frontend/src/assets/images/README/Dashboard-sorting.png) | ![Filtering](./frontend/src/assets/images/README/Dashboard-filtering.png) |

- **Add / Edit Tasks:**
  | Add Task | Edit Task |
  |----------|-----------|
  | ![Add Task](./frontend/src/assets/images/README/AddTask.png) | ![Edit Task](./frontend/src/assets/images/README/EditTask.png) |

- **Empty State:**
  > When no tasks are found, Toki welcomes you with a sad tomato 🍅
  ![No Tasks](./frontend/src/assets/images/README/Dashboard-noTasks.png)

---

### ⏱️ Pomodoro Sessions

| **Focus** | **Short Break** | **Long Break** |
|----------|------------------|----------------|
| ![Focus](./frontend/src/assets/images/README/Pomodoro-focus.png) | ![Short Break](./frontend/src/assets/images/README/Pomodoro-shortBreak.png) | ![Long Break](./frontend/src/assets/images/README/Pomodoro-longBreak.png) |

> Sessions auto-switch from Focus → Break, and wait for manual confirmation before Focus restarts.

---

### ⚙️ Settings

| **Durations / Theme** | **Profile Tab (Username & Password)** |
|------------------------|---------------------------------------|
| ![General Settings](./frontend/src/assets/images/README/MobileView-Settings-generalTab.png) | ![Profile Settings](./frontend/src/assets/images/README/MobileView-Settings-profileTab.png) |

---

### 📱 Mobile Experience

| **Dashboard** | **Pomodoro** |
|---------------|--------------|
| ![Mobile Dashboard](./frontend/src/assets/images/README/MobileView-Dashboard-boardView.png) | ![Mobile Pomodoro](./frontend/src/assets/images/README/MobileView-Pomodoro.png) |

---

## 🛠️ Tech Stack

### Frontend
- React + TypeScript
- TailwindCSS
- Axios
- Vite

### Backend
- Spring Boot
- Spring Security (JWT)
- H2 (In-Memory DB)
- RESTful APIs

---

## 📁 Project Structure

```
frontend/src
├── App.tsx                  # Main app entry
├── assets/images            # Logos, illustrations, mascot
├── components/              # Layout, Navbar, Toasts, Floating Add Btn
├── features/
│   ├── auth                 # Login/Register forms + pages
│   ├── pomodoro             # Timer logic and UI
│   ├── settings             # Theme, duration, profile
│   └── tasks                # Task views, forms, filters
├── hooks/                   # useTasks, useOverflow (for UI)
├── services/                # API abstraction layer
├── routes/                  # Client-side routing
└── types/                   # Shared types

backend/src/main/java/com/taskmanager/taskmanager
├── entity/                  # Task, User, UserSettings
├── repository/              # Data access layers
├── service/                 # Business logic (Task, User, Settings)
├── security/                # JWT config, filter, controller
├── web/                     # REST controllers
└── ApplicationExceptionHandler.java
```

---

## 🔮 Getting Started

### Prerequisites
- Node.js & npm
- Java 17+

### Run the App Locally

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
./mvnw spring-boot:run
```

Both apps run independently. Frontend fetches from `http://localhost:8080`.

---

## 👨‍💻 About the Author

Hey! I'm **Alae**, a **first-year software engineering student** from Morocco 🇲🇦.

Toki is the **first real app** I’ve built after escaping tutorial hell — a full-stack project that challenged me to understand architecture, flow, and deployment from scratch.

My dream? To **work or intern in Japan** and grow through purposeful development.

> [LinkedIn Post – Read My Journey](https://www.linkedin.com/posts/alae-j_react-springboot-typescript-activity-7314630940557758464-Mjp5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFe4T4BHDpxbykZe3TD05IcNi1FlZSi0tw)

---

## 💡 Dynamic Motivation System

Each task generates a unique motivational quote based on:
- Estimated time
- Time left before deadline
- Sessions completed

It’s a tiny system that nudges you to **break it down, focus, and win.**

---

## 📃 License

This project is not licensed. It’s a personal learning milestone.

---

*Built with grit, vision, and a tomato.* 🍅

