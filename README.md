# 🎟️ EVORA — Event Booking Platform

**EVORA** is a full-stack **MERN event booking platform** that makes it easy for users to discover events, request tickets, and manage their bookings.

Event organizers can use the **Admin Dashboard** to create and manage events, review booking requests, confirm payments, and track event performance — all from one place.

---

## ✨ What Can EVORA Do?

### 👤 For Users

* 🔐 Secure registration and login using **JWT + bcrypt**
* 📧 Email **OTP verification** for account activation
* 🎟️ Book tickets with **OTP-based verification**
* 🔎 Browse upcoming events
* 📝 Submit booking requests
* 📊 Track booking status from the dashboard
* ❌ Cancel bookings
* 📩 Receive email notifications when bookings are confirmed

### 🛡️ For Admins

* ➕ Create new events
* ✏️ Edit existing events
* 🗑️ Delete events
* 👥 View all booking requests
* ✅ Confirm or ❌ reject bookings
* 💰 Mark bookings as **Paid / Not Paid**
* 📊 Monitor revenue and confirmed bookings
* 🎫 Manage event seating capacity
* 🔒 Admin access restricted to authorized database users

---

## 🚀 Key Features

### 🔐 1. Secure Authentication

EVORA uses **JWT authentication** and **bcrypt password hashing** to protect user accounts.

Users must verify their email using an **OTP** before their account becomes active.

---

### 🔑 2. OTP-Based Booking Security

Every booking requires email OTP verification.

**Booking Flow:**

```text
User selects event
       ↓
Requests ticket
       ↓
OTP sent to email
       ↓
User verifies OTP
       ↓
Booking enters Pending Queue
       ↓
Admin reviews request
       ↓
Admin confirms / rejects
       ↓
User receives email notification
```

This adds an extra layer of security and prevents unauthorized bookings.

---

### 🎫 3. Smart Booking System

EVORA supports both:

* 🆓 **Free Events**
* 💳 **Paid Events**

All booking requests first enter a **Pending** state.

The system also validates available seats before confirming a booking to prevent **overbooking**.

```text
Available Seats
      ↓
Booking Request
      ↓
Seat Validation
      ↓
OTP Verification
      ↓
Admin Approval
      ↓
Confirmed Booking
```

---

### 📊 4. Admin Analytics Dashboard

Admins can monitor important event statistics in real time, including:

* 📌 Pending Booking Requests
* 👥 Confirmed Clients
* 💰 Total Revenue
* 🎟️ Available Seats
* 📅 Event Information

This gives organizers a quick overview of their platform activity.

---

### 📧 5. Email Notifications

EVORA uses **Nodemailer** to automatically send emails for important actions such as:

* Account verification
* Booking OTP
* Booking confirmation
* Booking status updates

---

### 🎨 6. Modern UI/UX

The frontend is built using:

* ⚛️ React.js
* 🎨 Tailwind CSS
* ✨ Micro-interactions
* 📱 Responsive design

The goal is to keep the interface simple, modern, and easy to use.

---

# 🛠️ Tech Stack

| Layer           | Technology               |
| --------------- | ------------------------ |
| Frontend        | React.js                 |
| Styling         | Tailwind CSS             |
| Backend         | Node.js + Express.js     |
| Database        | MongoDB                  |
| Authentication  | JWT + bcrypt             |
| Email           | Nodemailer               |
| OTP             | Email-based verification |
| Development     | Vite                     |
| Package Manager | npm                      |

---

# 📁 Project Structure

```text
EVORA/
│
├── client/              # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/              # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── utils/
│   ├── .env
│   └── package.json
│
├── package.json         # Root configuration
└── README.md
```

---

# ⚙️ Getting Started

## 1️⃣ Prerequisites

Before running EVORA, make sure you have:

* **Node.js** installed
* **MongoDB** database
* **Git** (optional, if cloning from GitHub)

You can use **MongoDB Atlas** for a free cloud database.

---

## 2️⃣ Configure Environment Variables

Open:

```text
server/.env
```

Add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
PORT=5000
```

### 📧 Gmail App Password

For `EMAIL_PASS`, use a **Google App Password** instead of your normal Gmail password.

You need to enable **2-Step Verification** on your Google account before creating an App Password.

---

# ▶️ 3️⃣ Install Dependencies

From the **EVORA root folder**:

```bash
npm install
npm run install:all
```

This installs the required dependencies for both the frontend and backend.

---

# 🚀 4️⃣ Start the Application

The easiest way is to run both servers together:

```bash
npm run dev
```

This starts:

```text
Frontend  →  Vite
Backend   →  Express
```

You should see something similar to:

```text
Frontend → http://localhost:5173
Backend  → http://localhost:5000
```

> The frontend port may be different if port `5173` is already being used.

---

# 🧩 Alternative: Run Frontend & Backend Separately

If you want to run them in separate terminals:

### Backend

```bash
cd server
npm install --legacy-peer-deps
npm run dev
```

Backend:

```text
http://localhost:5000
```

### Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 📌 Available Commands

From the project root:

| Command               | Purpose                                    |
| --------------------- | ------------------------------------------ |
| `npm install`         | Install root dependencies                  |
| `npm run install:all` | Install frontend + backend dependencies    |
| `npm run dev`         | Start frontend + backend                   |
| `npm run dev:all`     | Install dependencies and start application |
| `npm run start`       | Start backend + frontend preview           |

---

# 🔄 How EVORA Works

```text
                    ┌──────────────┐
                    │     USER     │
                    └──────┬───────┘
                           │
                           ▼
                  Browse Available Events
                           │
                           ▼
                    Select an Event
                           │
                           ▼
                    Request a Ticket
                           │
                           ▼
                    Email OTP Sent
                           │
                           ▼
                    Verify OTP
                           │
                           ▼
                  Booking → PENDING
                           │
                           ▼
                    ┌──────────────┐
                    │    ADMIN     │
                    └──────┬───────┘
                           │
                    Review Booking
                      /          \
                     /            \
                 Reject          Approve
                   │                │
                   ▼                ▼
               Rejected       Confirmed
                                    │
                                    ▼
                              Email Notification
```

---

# 🎯 Project Goal

EVORA aims to provide a **secure, simple, and centralized event booking experience** for both users and event organizers.

Instead of relying on multiple external tools for registration, booking management, payment tracking, and notifications, EVORA brings these processes together into **one platform**.

---

## 🌟 Why EVORA?

**Discover → Book → Verify → Approve → Manage**

A complete event management and booking experience built with the **MERN stack**.

---

## 👨‍💻 Built With

**React • Node.js • Express.js • MongoDB • Tailwind CSS • JWT • Nodemailer**
