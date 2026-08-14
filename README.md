# 📋 AttendEase

> A smart, student-first attendance tracking web app. Built to solve a real problem every college student faces — never knowing if they're about to fail due to low attendance.

🔗 **Live Demo:** [attendease-jade.vercel.app](https://attendease-jade.vercel.app)

---

## 🎯 The Problem

Most college attendance apps only show you a percentage. They don't tell you:
- How many more classes can I safely miss?
- How many classes must I attend to recover?
- What happens if I miss next week's classes?

**AttendEase answers all of these.**

---

## ✨ Features

### Core
- 🗓️ **Smart Timetable Setup** — Add subjects and assign them to specific weekdays. Done once, works all semester.
- 📅 **Auto Daily Schedule** — Opens to today's classes automatically based on your timetable
- ✅ **Attendance Marking** — Mark each class as Present, Absent, or Cancelled with one tap
- 📊 **Real-time Calculations** — Attendance percentage calculated instantly per subject

### Smart Alerts
- 🟢 **Safe Zone** — Above 80%, you're fine
- 🟡 **Warning Zone** — 75–80%, be careful
- 🔴 **Danger Zone** — Below 75%, immediate action needed

### Decision Tools
- 🧮 **Bunk Calculator** — Exactly how many classes you can still safely miss
- 🔁 **Recovery Calculator** — How many consecutive classes to attend to recover to 75%
- 🤔 **What If Simulator** — Simulate missing X classes and instantly see the impact on your percentage

### Other
- 📅 **Attendance Calendar** — GitHub-style visual heatmap of your full attendance history
- 📄 **PDF Export** — Download a professional attendance report anytime
- 📲 **PWA** — Install directly on your phone from the browser, no App Store needed
- ⚡ **Offline Support** — Works without internet using service workers
- 📱 **Fully Responsive** — Works perfectly on any phone, tablet, or laptop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Tailwind CSS |
| Routing | React Router v6 |
| State Management | React useState (lifted state pattern) |
| PDF Export | jsPDF |
| PWA | Web App Manifest + Service Worker |
| Deployment | Vercel |
| Version Control | Git + GitHub |

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/Zafin-Mohamed/attendease.git

# Navigate to frontend
cd attendease/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure
attendease/
└── frontend/
└── src/
├── components/
│ └── Navbar.jsx # Bottom navigation bar
├── pages/
│ ├── Landing.jsx # Home/intro page
│ ├── Register.jsx # Account creation
│ ├── Login.jsx # Login page
│ ├── Dashboard.jsx # Main dashboard
│ ├── MarkAttendance.jsx # Daily attendance marking
│ ├── TimetableSetup.jsx # Subject & timetable configuration
│ ├── SubjectDetail.jsx # Per-subject stats & history
│ ├── WhatIf.jsx # What If simulator
│ ├── Calendar.jsx # Attendance heatmap
│ └── Settings.jsx # Profile & PDF export
└── utils/
├── calculations.js # All attendance logic & formulas
└── exportPDF.js # PDF report generation
---

## 🧮 Calculation Logic
Attendance % = (Present classes / Total held classes) × 100

Total held = Present + Absent (Cancelled classes excluded)

Safe to miss = Maximum absences while staying above 75%

Classes to recover = Minimum consecutive attendance needed to reach 75%

What If = Recalculated % after adding hypothetical absences
---

## 🗺️ Roadmap (v2)

- [ ] Backend API with Node.js + Express
- [ ] PostgreSQL database via Supabase
- [ ] User authentication with JWT
- [ ] Cloud sync — access data from any device
- [ ] Multiple timetable versions (for when college changes schedule)
- [ ] Timetable file/image upload with parsing
- [ ] Term-end projection — minimum attendance needed before semester ends
- [ ] Docker containerization
- [ ] CI/CD pipeline with GitHub Actions

---

## 👨‍💻 Author

**Zafin Mohamed Kamal**
- GitHub: [@Zafin-Mohamed](https://github.com/Zafin-Mohamed)
- LinkedIn: [linkedin.com/in/zafinmohamed](https://linkedin.com/in/zafinmohamed)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> *Built for students, by a student. Free • Private • Works on any device.*
