# SUN Foundation - Elite NGO Platform (Qualifier Edition)

This repository contains the high-performance, ultra-lightweight web platform for the SUN Foundation. It was engineered from first principles to prioritize perfect Web Vitals, seamless micro-interactions, and a 0kb JavaScript animation budget.

## 🚀 The Architecture (Why it is built this way)

Traditional React Single Page Applications (SPAs) are notorious for massive initial JavaScript payloads and main-thread blocking animations. This project actively subverts those anti-patterns to deliver an elite user experience optimized for slower networks.

* **Vite + React.lazy():** Route-level code splitting ensures users only download the JavaScript necessary for the page they are currently viewing.
* **Hardware-Accelerated Motion:** Zero JavaScript physics libraries (like Framer Motion) are used. All animations (The "Quiet Hero" Ken Burns crossfade) rely strictly on pure CSS `@keyframes` manipulating only `opacity` and `transform` to force GPU compositing.
* **Native Scroll APIs:** The photo gallery utilizes a pure-CSS "Sticky Stack" mechanism (`position: sticky` with dynamic `top` offsets) to create a parallax-style card stacking effect without a single scroll-event listener.
* **Backend integration:** Firebase Firestore is used as a lightweight, serverless NoSQL database to capture volunteer registrations.

## 🛠 Tech Stack

* **Frontend:** React 18, Vite
* **Routing:** React Router DOM v6
* **Styling:** Tailwind CSS + PostCSS
* **Database:** Firebase Firestore (Web SDK)
* **Deployment:** Vercel

## 📁 Project Structure

```text
src/
├── App.jsx                 # Route definitions and Suspense boundaries
├── config/
│   └── firebase.js         # Firebase initialization (You must add your keys here)
├── data/
│   └── content.json        # Static CMS data (Projects, Gallery images)
├── layouts/
│   └── MainLayout.jsx      # Global layout wrapper (Nav + Footer)
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Works.jsx           # Projects grid
│   ├── Gallery.jsx         # Sticky CSS gallery
│   └── Volunteer.jsx       # Firebase mutation form
├── components/
│   ├── GhostPill.jsx       # Glassmorphism navigation
│   ├── QuietHero.jsx       # CSS-only crossfade hero
│   ├── StickyGallery.jsx   # CSS sticky stacking logic
│   └── JoinForm.jsx        # Volunteer registration UI
└── styles/
    └── index.css           # Tailwind base + CSS Custom Properties & Keyframes
