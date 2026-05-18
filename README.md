# 🧠 InterviewAI — Precision Interview Engineering

InterviewAI is a state-of-the-art, high-fidelity generative web application designed to instantly architect deep, role-specific candidate assessments and grading rubrics. Built with a premium, sleek SaaS aesthetic inspired by modern AI tooling, it empowers recruiters, engineering leads, and HR specialists to generate highly realistic, tailored interview questions and evaluator guides in seconds.

---

## 🚀 Key Features

* **Adaptive Difficulty Slider**: Select custom question counts (from 3 to 10 distinct questions) generated dynamically by the AI.
* **Role-Specific Parameters**: Target specific experience levels (Entry Level, Mid Level, Senior Level, Lead/Manager).
* **Multi-Focus Assessments**: Customize the core testing focus:
  * **Technical Focus**: Coding, architecture, algorithms, and deep systems engineering.
  * **Behavioral Focus**: Soft skills, culture fit, and the structural STAR (Situation, Task, Action, Result) method.
  * **Situational Focus**: Real-world scenario judgment and problem-solving metrics.
  * **Mixed Standard**: A balanced, comprehensive assessment mix.
* **Modern Shimmering Skeleton Loader**: A smooth, glassmorphic loading stack showing simulated pulsing card skeleton previews during live API generation.
* **Dynamic Header & Client-Side Navigation**: Fixed glass-blurred top bar supporting instant routing via Next.js client-side prefetching.
* **Seamless Exports**: One-click copy buttons for individual questions and a master "Export Markdown" feature that packages all questions and rubrics into a beautifully structured `.md` file for immediate local download.

---

## 🛠️ The Tech Stack

InterviewAI utilizes a modern, lightweight, and blazing-fast stack optimized for speed, responsive UI transitions, and modularity:

| Technology / Library | Purpose | Key Benefits |
| :--- | :--- | :--- |
| **Next.js 15+ (App Router)** | Core Web Framework | Server-Side Rendering (SSR), API routing, static page optimization, and instant Link prefetching. |
| **React 19** | Component Logic | Declarative state binding (`useState`, `useMemo`, `useEffect`) and synthetic Form events. |
| **TypeScript** | Static Typing | Robust, compile-time typed interfaces for prompt parameters, questions parsing, and API request schemas. |
| **Vanilla CSS (Modern CSS)** | Styling & Design System | High-performance @layer styles, HSL design tokens, responsive grid templates, and custom GPU-accelerated keyframe animations. |
| **Google Gemini API** | AI Generation Engine | The state-of-the-art generative model supplying rich, situational context-aware questions and guides. |

---

## 🤖 The AI Engine: Google Gemini API

The backend utilizes the official **Google Generative AI SDK** to connect directly to the high-performance, low-latency **Gemini 2.5 Flash** model.

### Library Used:
* **`@google/generative-ai`**: The official Node.js client library for interacting with Google's generative models.

### AI Model:
* **`gemini-2.5-flash`**: Selected for its exceptional text synthesis speed, superior instruction-following capabilities (guaranteeing exact question counts up to 10), and deep context understanding of technical, business, and behavioral engineering roles.

### How the Gemini Integration Works:

#### 1. Client Initialization (`lib/gemini.ts`)
We initialize the generative client cleanly with our custom `GEMINI_API_KEY` stored securely in our environment:
```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateText(prompt: string): Promise<string> {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}
```

#### 2. Strict Prompt Instruction Enforcement (`app/api/questions/route.ts`)
To solve the common issue where models restrict questions to 3 items or include breaking markdown markers, the server sends highly structured parameters, stripping away markdown bold text (`**Question:**`) and numbering structures to guarantee clean, recursive front-end parser compatibility:
```typescript
const prompt = `You are a professional HR specialist and senior hiring manager.
Generate exactly ${count} highly professional, realistic, and thoughtful interview questions for a ${level} ${title}, focusing on ${focus} scenarios.
For each of the ${count} questions, you MUST provide an ideal response guideline or grading rubric for the interviewer.

CRITICAL FORMATTING INSTRUCTIONS:
1. You MUST generate exactly ${count} distinct question blocks. Do not generate 3 questions if the requested number is ${count}.
2. Separate each question block using '---' on a new line.
3. Do NOT use markdown bold formatting like **Question:** or **Rubric:**. Use the exact plain text labels 'Question:' and 'Rubric:'.
4. Do NOT include any introductions, conclusions, explanations, page headers, or numbering like 'Question 1:'.
5. Make sure the output format is exactly as follows:

Question: [Insert question text here]
Rubric: [Insert 1-2 sentence grading rubric or ideal response guidelines here]
---

Remember: You MUST output exactly ${count} distinct blocks separated by '---'.`;
```

---

## 📂 Next.js Multi-Page Project Architecture

The application has been restructured from a single-page website into an elegant multi-route project, utilizing a shared root layout:

```text
interview-question-generator/
├── app/
│   ├── about/
│   │   └── page.tsx        # /about  - Mission statement & glass graphic simulator
│   ├── contact/
│   │   └── page.tsx        # /contact- Simulated secure form & toast alerts
│   ├── features/
│   │   └── page.tsx        # /features - Premium features display cards
│   ├── api/
│   │   └── questions/
│   │       └── route.ts    # Secure POST router calling Gemini 2.5 Flash
│   ├── globals.css         # CSS Variables, resets, skeleton animations, and typography
│   ├── layout.tsx          # Shared root template holding global Header, Footer, and Links
│   └── page.tsx            # /       - High-fidelity Hero & Centered Questions Generator
├── lib/
│   └── gemini.ts           # Gemini API Client SDK configuration
├── .env.local              # Local environment variables containing GEMINI_API_KEY
└── tsconfig.json           # TypeScript compilation settings
```

---

## ⚡ Getting Started & Setup

### 1. Clone & Install Dependencies
First, navigate to the project directory and install all core packages:
```bash
npm install
```

### 2. Configure Your Gemini API Key
Create a `.env.local` file in the root of the project and add your Google Gemini API Key:
```env
GEMINI_API_KEY=AIzaSyBCvWDGNQ2CZoTtjwBnaZyonBMA9pAlkvU
```

### 3. Run the Development Server
Launch the local Turbopack development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the dashboard.

### 4. Build for Production
To generate optimized static pages and prepare the production bundle:
```bash
npm run build
```

---

## 💎 Design System & Visual Aesthetics

* **Curated HSL Color Tokens**: Slate-blues, neutral-grey backgrounds, and brilliant royal blues mapped dynamically through CSS variables.
* **Animated Badges**: Subtle, rotating sparkling stars powered by CPU-friendly transform keyframes.
* **Centered Horizontal Alignment**: Symmetrical fluid margins ensuring beautiful alignment across ultra-wide monitors and tablet screens.
* **Shimmering Skeleton Pulses**: Linear gradient transitions looping continuously over loading cards, preventing layout shifts during AI generation.

---

*Powered by Advanced Generative AI and Antigravity Design.*
