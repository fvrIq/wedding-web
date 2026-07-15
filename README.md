<div align="center">

# 💍 Wedding Invitation Website

**A beautiful, elegant digital wedding invitation built with React + Vite**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Website-C9A84C?style=for-the-badge&logo=vercel)](https://our-wedding-web.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/fvrIq/wedding-web)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## ✨ Features

- 🎬 **Opening / Loading Screen** — Animated intro with couple names & "Buka Undangan" button
- 💌 **Welcome Section** — Hero image with couple info & parents' names
- 💑 **Love Story** — Scroll-animated story cards with timeline
- 📅 **Event Section** — Real-time countdown timer + session details & maps link
- 🖼️ **Gallery** — Masonry photo grid with lightbox viewer
- 🎁 **Gift Section** — Bank account cards with one-click copy button & QRIS support
- 🎵 **Background Music** — Auto-play on open with floating toggle control
- 📱 **Fully Responsive** — Mobile-first design, looks great on all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [Vercel](https://vercel.com) | Deployment & hosting |

---

## 📁 Project Structure
wedding-web/
├── public/
│   ├── audio/                  # Background music (.mp3)
│   └── images/                 # Cover, gallery & story photos
│       ├── cover.jpg
│       ├── opening.jpg
│       ├── qris.jpg
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       ├── ...
│       ├── story-1.jpg
│       ├── story-2.jpg
│       └── ...
├── src/
│   ├── components/
│   │   ├── sections/           # 7 main page sections
│   │   │   ├── IntroLoading.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── Welcome.jsx
│   │   │   ├── LoveStory.jsx
│   │   │   ├── Event.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Gift.jsx
│   │   │   └── Closing.jsx
│   │   └── ui/                 # Reusable UI components
│   │       └── MusicControl.jsx
│   ├── data/
│   │   └── config.js           # ← Edit this to customize all content
│   ├── hooks/
│   │   ├── useCountdown.js
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── tailwind.config.js

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/fvrIq/wedding-web.git

# Navigate to project folder
cd wedding-web

# Install dependencies
npm install

# Start development server (accessible on local network)
npm run dev -- --host
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## ⚙️ Customization

All content is managed in a single file:

src/data/config.js

| Field | Description |
|---|---|
| `couple` | Groom & bride names, nicknames, parents |
| `event.weddingDate` | ISO date for countdown timer |
| `event.sessions` | Akad & Resepsi time, location, maps link |
| `loveStory` | Timeline cards with date, title, description & photo |
| `gallery` | Array of photo URLs or local paths |
| `gift.banks` | Bank name, account number & account name |
| `music` | Path to background music file |

**To update photos**, replace files in `public/images/` and update the paths in `config.js`.

**To update music**, replace the file in `public/audio/` and update the path in `config.js`.

---

## 📦 Deployment

Deployed on **Vercel** with automatic CI/CD via GitHub integration.

Every push to `main` triggers an automatic redeployment:

```bash
git add .
git commit -m "update: your changes here"
git push
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Font | Playfair Display (serif) |
| Accent Font | Cormorant Garamond (script) |
| Body Font | Lato (sans-serif) |
| Gold | `#C9A84C` |
| Cream | `#FAF7F2` |
| Warm Brown | `#3C2A1E` |

---

## 👨‍💻 Author

**Fariq** — [github.com/fvrIq](https://github.com/fvrIq)

> All couple details, photos, event info, bank accounts, and QRIS can be fully customized in `src/data/config.js` to match the actual wedding details.

---

<div align="center">
Made with ❤️ by Fariq
</div>
