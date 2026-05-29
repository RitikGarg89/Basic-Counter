# ✨ Glassmorphic React Counter

A highly polished, premium, and fully responsive React Counter application built on **Vite** and **React**. It features a modern dark-mode aesthetic, glowing glassmorphic elements, CSS grid layouts, and advanced media queries for touch-optimized responsiveness.

---

## 🚀 Key Features

* **Glassmorphism UI**: Stunning translucent card element featuring subtle borders, intense background blurs (`backdrop-filter`), and soft ambient shadows.
* **Ambient Floating Orbs**: Custom CSS keyframe-animated glow fields floating in the background, creating a deep parallax aesthetic.
* **Smart Mobile-First CSS Grid**:
  - **Desktop / Tablet**: Beautiful side-by-side positioning for primary actions (Increment / Decrement) with the Reset action spanning full-width at the bottom.
  - **Mobile (`max-width: 480px`)**: Compact scaling of paddings, margins, and typography sizes.
  - **Ultra-Small Screen (`max-width: 360px`)**: Automatic fallback to a single-column layout, stacking buttons vertically to avoid text clipping.
* **Intelligent Hover Handling**: Leverages `@media (hover: hover)` queries to restrict micro-interaction animations and glow filters exclusively to devices that support true pointer inputs, eliminating stuck hover highlights on smartphones.
* **Micro-interactions**: Elastic bounce active states (`transform: scale(0.96)`) mapped to button clicks.

---

## 🛠️ Project Structure

```bash
my-app/
├── public/
├── src/
│   ├── App.css        # Premium custom styles (Gradients, Glassmorphism, Responsive rules)
│   ├── App.jsx        # Root component handling counter state & layout
│   ├── main.jsx       # Root mount configuration
│   └── index.css      # Base document margins & global overrides
├── index.html
├── package.json
└── vite.config.js
```

---

## 💻 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have **Node.js** installed on your system.

### 1. Install Dependencies

Navigate to the project root directory (`my-app`) and run:

```bash
npm install
```

### 2. Run the Development Server

Launch the development environment:

```bash
npm run dev
```

The application will run locally, usually at `http://localhost:5173`. Open this URL in your web browser.

### 3. Build for Production

To create an optimized production bundle:

```bash
npm run build
```

The output will be generated in the `dist` directory.
