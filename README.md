# Moniepoint - Year in Review 2025

A pixel-perfect, production-ready replication of the **[Moniepoint 2025 Year in Review](https://2025.moniepoint.com/)** web application, built with modern Next.js (App Router), React 19, TypeScript, Tailwind CSS, and GSAP.

Celebrating a decade of powering Nigeria's financial ecosystem.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations & Physics**: GSAP 3 + ScrollTrigger
- **Icons**: `@hugeicons/core-free-icons` + `@hugeicons/react`
- **Package Manager**: pnpm

---

## ✨ Features & Architecture

### 1. Preloader & Intro Sequence
- Full-viewport intro preloader (`#fff4d1`) featuring a 3D dual-sided spinning metallic coin with the embossed Moniepoint shield emblem.
- Synchronized bobbing physics and dynamic ground shadow.
- Smooth transition: slides upward (`y: "-100%"`) with `power2.inOut` easing, revealing the header and hero simultaneously.
- Custom events: `startAnimationBegin` and `startAnimationComplete`.

### 2. Header & Navigation
- Replicates the exact layout from `2025.moniepoint.com`:
  - Left: Moniepoint Vector Logo.
  - Right: "Our Story" pill (with play icon) and "Download Review" pill (with download icon).
- Smooth scroll navigation to key document landmarks (`#our-story`, `#download-section`).

### 3. Hero Section
- Dynamic split-number entry: staggered reveals for "20", "25", and "In Review".
- Dual floating hero coins with continuous sinusoidal yoyo floating animations.
- Dynamic SVG curve drawing utilizing `getTotalLength()` and animated `strokeDashoffset`.
- "Our Journey So Far" smooth-scroll trigger.

### 4. Milestones & Achievements (Horizontal Scroll Scrub)
- Pinned horizontal scroll container powered by GSAP `ScrollTrigger` and `matchMedia()`.
- Staggered card entrance with back-easing (`back.out(1.4)`).
- Full milestone metrics highlighting 6M+ businesses served, 16M+ individuals banked, ₦30T+ in transactions, and ₦1T+ in credit.

### 5. Credit Impact Section
- Interactive animated bar charts calculating and animating percentage metrics in real time.
- Floating annotation callout with continuous yoyo bounce.
- Decorative curved path stroke animations.

### 6. Industries Section (Curved Wheel Pinning)
- Desktop: 2000px pinned scroll scrubbing with cards fanning across a curved radial axis (`transformOrigin: "center 2600px"`).
- Mobile: Responsive cascading sticky card deck.
- Spiral SVG drawing triggers.

### 7. Global Stage & MonieWorld UK
- Continuous vertical auto-scrolling tweet ticker (`scrollHeight / 2` seamless marquee).
- Interactive globe with pulsing concentric rings on UK and Nigeria operational hubs.
- Dynamic animated SVG dotted flight path connecting London and Lagos.

### 8. Interactive Distribution Map
- State-by-state data switcher and coverage map for Nigeria's largest financial distributor.

### 9. Winning Streak Awards Marquee
- Desktop: Dual award columns scrolling vertically in opposite directions with seamless looping.
- Mobile: Dual rows scrolling horizontally in opposite directions.
- Features accolades from TIME 100, Financial Times, CBN, CNBC, and CB Insights.

### 10. Official Embedded Media
- Official Moniepoint YouTube documentary embeds:
  - *Our Story*: "Moniepoint, 2023 - Blue, Everywhere."
  - *Moniebook*: Official Moniebook platform launch showcase.

---

## 📁 Project Structure

```text
├── app/
│   ├── layout.tsx         # Root layout with fonts, providers, and metadata
│   ├── page.tsx           # Home page aggregating all narrative sections
│   └── cart/              # Cart management view
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Primary top bar navigation
│   │   └── NavbarWrapper.tsx
│   ├── sections/          # Modularized story sections
│   │   ├── HeroSection.tsx
│   │   ├── OurStorySection.tsx
│   │   ├── MilestonesSection.tsx
│   │   ├── CreditImpactSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── GlobalStageSection.tsx
│   │   ├── MoniebookSection.tsx
│   │   ├── DistributionMapSection.tsx
│   │   ├── SpendingHabitsSection.tsx
│   │   ├── SavingsSection.tsx
│   │   ├── PaymentEverydaySection.tsx
│   │   ├── DreamTeamSection.tsx
│   │   ├── WinningStreakSection.tsx
│   │   └── DownloadSection.tsx
│   └── ui/                # Core primitives (Preloader, Button, Input, Modal)
├── constants/             # Site data, milestones, awards, navigation links
├── hooks/                 # Custom React hooks (useCart, animations)
├── lib/                   # Utility helpers and clsx/tailwind-merge
├── public/                # Vector assets, fonts, and media
└── styles/                # Global CSS and typography
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (Node 20+ recommended)
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/Derojuu/moniepoint-year-in-review-2025.git

# Enter project directory
cd moniepoint-year-in-review-2025

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```
