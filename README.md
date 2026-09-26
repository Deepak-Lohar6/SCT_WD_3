# ❖ DevAcademy — Web Development Quiz Application

A multi-page client-side web application featuring authentication, dashboard analytics, a 15-question web development assessment with a 30-minute timer, automated scoring, and detailed answer review. Developed using HTML5, CSS3, and JavaScript.

---

## 🌐 Live Demo

<a href="https://deepak-lohar6.github.io/SCT_WD_3/" target="_blank">Click here to view the live app</a>

---

## 🚀 Overview

**DevAcademy** provides a complete web development quiz environment. Split cleanly into modular pages and scripts, it supports registration, secure login, password resets, real-time timed quiz execution, persistent score histories, and comprehensive question explanations—built with native web technologies.

This project fulfills **Task 03: Quiz & Learning Application** for the **SkillCraft Technology Web Development Internship**.

---

## ✨ Features

* **Multi-Page Web Architecture:** Dedicated pages for landing, login, registration, password recovery, dashboard, quiz testing, results, and answer reviewing.
* **Authentication System:** Account creation, credentials validation, password resets, and LocalStorage session persistence.
* **Student Dashboard:** Personal statistics tracking maximum score, total assessment attempts, and last attempt performance.
* **15-Question Quiz System:** 30-minute real-time countdown timer, progress bar tracking, and bidirectional question navigation.
* **Result Calculation & Performance Tags:** Score and percentage calculation accompanied by automated performance badges.
* **Answer Review System:** Step-by-step breakdown highlighting user selections against correct options and detailed explanations.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic markup structure.
* **CSS3:** Custom styles, CSS variables, Flexbox, Grid layouts, glassmorphism backdrop filters, and animations.
* **JavaScript (ES6+):** State management, LocalStorage session persistence, countdown timer logic, DOM manipulation, metrics calculations, and review rendering.

---

## 📁 Poject Structure

```text
SCT_WD_3/
├── index.html            # Public landing page
├── login.html            # User authentication login
├── signup.html           # User registration
├── forgot-password.html  # Password recovery screen
├── dashboard.html        # Student statistics & course dashboard
├── quiz.html             # 15-question timed assessment view
├── result.html           # Score breakdown & feedback screen
├── review.html           # Answer key & detailed explanations feed
│
├── style.css             # Unified global stylesheet
│
├── script.js            # Landing page session handler
├── signup.js            # User registration event logic
├── login.js             # Authentication validator
├── forgot-password.js   # Password reset engine
├── dashboard.js         # Dashboard statistics calculator
├── quiz.js              # Timer engine & quiz navigator
├── questions.js         # Assessment question database
├── result.js            # Score evaluation & result display
├── review.js            # Answer key feed generator
│
└── README.md            # Comprehensive project documentation