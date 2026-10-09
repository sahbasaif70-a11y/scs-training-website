# 🚀 SCS Training & Development Management System

A modern, highly responsive, multi-themed web application designed for **SCS Training & Development Center (Muridke & Lahore)**. Built with modern web standards, this platform showcases IT courses, short trainings, admission applications, institute policies, and interactive Google review testimonials.

---

## 🛠️ Technology Stack

### **Frontend (Completed)**
- **Framework & Build Tool**: React 19 + TypeScript + Vite
- **Routing**: React Router DOM (v7)
- **UI Components & Icons**: 
  - Ant Design (`antd`) & `@ant-design/icons`
  - `shadcn/ui`
  - FontAwesome Icons (`@fortawesome/react-fontawesome`)
- **Styling**: Tailwind CSS v4 + `@fontsource/oswald` font family
- **State & Theme Management**: React Context API (`ThemeContext`) with 3 Brand Color Themes & `localStorage` persistence.

### **Backend (Planned / In Roadmap)**
- **Framework**: Python FastAPI
- **Database**: SQL (PostgreSQL / SQLite) + SQLAlchemy ORM
- **Authentication**: JWT Auth (Admin Panel for managing admissions & course catalog)

---

## 🎨 Brand Theme Switcher

The application features a global, dynamic **3-Color Brand Theme Switcher** based on the official SCS Training logo:
1. 🟠 **SCS Orange Theme** (`#f97316`) - *Default*
2. 🔵 **SCS Royal Blue Theme** (`#2c348f` / `#1d4ed8`)
3. 🟢 **SCS Emerald Green Theme** (`#059669` / `#16a34a`)

Clicking the theme palette dots in the Navbar instantly updates top bars, active navigation links, headings, buttons, icons, and footers across the entire site.

---

## 📂 Project Structure

```
training-management-system/
├── public/                 # Static public assets (bg patterns, icons)
├── src/
│   ├── assets/             # Logos, hero images, banners
│   ├── components/         # Reusable UI components
│   │   ├── home/           # HeroCarousel, CourseHeader, CourseCategories, StartCareer, Testimonials, CallToAction
│   │   ├── layout/         # Navbar (with Theme Palette), Footer
│   │   ├── ui/             # shadcn UI primitives (Button, Card, Dialog, Input, Textarea)
│   │   └── ScrollToTop.tsx # Auto scroll-to-top component on route navigation
│   ├── context/            # ThemeContext (Global Orange/Blue/Green Theme Switcher)
│   ├── layouts/            # MainLayout page wrapper
│   ├── pages/              # Route pages:
│   │   ├── Home.tsx        # Homepage
│   │   ├── Courses.tsx     # All 21 IT Trainings & Courses
│   │   ├── ShortCourses.tsx# Fast-Track 1-2 Month Short Courses (PKR 5,000/mo)
│   │   ├── CourseDetails.tsx # Course Curriculum, Prerequisites & Admission Form
│   │   ├── Admission.tsx   # Full Admission Form & Top Specialized Programs
│   │   ├── Contact.tsx     # Contact Form, Office Info & Google Maps Embed
│   │   ├── Policies.tsx    # Institute Rules, Fee Refund Terms & Interactive FAQs
│   │   ├── About.tsx       # About Institute
│   │   └── NotFound.tsx    # 404 Error Page
│   ├── App.tsx             # Central React Router Configuration
│   ├── main.tsx            # Root mounting point wrapped with ThemeProvider
│   └── index.css           # Tailwind CSS imports & CSS theme variables
├── package.json
└── vite.config.ts
```

---

## ⭐ Key Features Implemented

1. **Header & Navigation Bar**:
   - Contact bar with phone, location, apply links, and **SCS Logo Color Switcher**.
   - Sticky navbar with brand logo, dropdown menus for *Short Courses* and *Trainings*, and mobile drawer.
2. **Hero Carousel Slider**:
   - Multi-slide hero banner with smooth fade transitions and call-to-action buttons.
3. **Comprehensive Course Catalog**:
   - **Trainings Page** (`/trainings` / `/courses`): 21 full-scale IT & AI courses with images, descriptions, and details navigation.
   - **Short Courses Page** (`/short-courses`): 10 fast-track 1-2 month programs at PKR 5,000/month with location/contact details & benefits.
   - **Course Details Page** (`/courses/:id`): Curriculum breakdown, introduction, requirements, modules, audience, learning outcomes, and sidebar admission form.
4. **Admission Application Form** (`/admission`):
   - Form with First/Last Name, Mobile, Email, City Selector, Program Duration, and interactive program selector badges.
5. **Contact Us Page** (`/contact`):
   - Glassmorphism Hero header, Information Request form, Call/Email/Location details, and embedded Google Maps.
6. **Institute Policies & FAQs** (`/policies`):
   - 5 core policy sections (Enrollment, Non-Refundable Fee Terms, 80% Attendance, Conduct, Privacy).
   - Interactive Expandable Accordion FAQs for common student questions.
7. **Testimonials & Reviews**:
   - Responsive Google Reviews slider showing star ratings, review cards, read more expansion, and official multi-colored Google logo.
8. **Call-To-Action Banner**:
   - *"Don't Just Dream. Start Earning."* banner with direct links to Admission and WhatsApp.
9. **Scroll Restoration**:
   - Automatically scrolls to top on route change.

---

## ⚡ Getting Started

### **Prerequisites**
Make sure you have **Node.js** (v18 or higher) installed on your machine.

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/scs-training-website.git
   cd training-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Access on local network / mobile:**
   ```bash
   npm run dev -- --host
   ```
   Open `http://localhost:5173` on your laptop, or use the printed Network IP address on your mobile device connected to the same Wi-Fi.

---

## 🚀 Backend Roadmap (Python FastAPI + SQL)

The frontend is fully prepared to integrate with the upcoming Python FastAPI backend:
- `POST /api/admissions` - Submit admission requests
- `POST /api/contact` - Submit contact queries
- `GET /api/courses` - Fetch dynamic course catalog & details
- `GET /api/testimonials` - Fetch student reviews
- `POST /api/admin/login` - Admin dashboard authentication

---

## 📝 License & Copyright

© 2026 **SCS Training & Development Management System**. All rights reserved.
