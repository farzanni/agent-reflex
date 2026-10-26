# AgentReflex ⚡

> **Devpost Learn Hackathon Project — "Build With AI: Basics"**
> An interactive prompt and spec diagnostic workbench that stress-tests coding agent prompts for hidden ambiguities, edge cases, and missing context before you hit enter.

---

## 🎯 The Problem
When working with AI coding agents (Claude Code, Cursor, Antigravity, Copilot), developers often provide short, ambiguous prompts like *"Build an auth system"*. The agent subsequently guesses schema, omits error handling, hardcodes secrets, or produces code that fails silently.

## 🚀 The Solution: AgentReflex
AgentReflex provides real-time diagnostic auditing for agent prompts:
- **Clarity & Ambiguity Gauge:** Real-time scoring across 4 critical failure dimensions:
  - Error Boundaries & Fallbacks
  - Data & Schema Specifics
  - Security & Secrets Boundaries
  - Testability & Acceptance Criteria
- **Agent Hallucination Traps:** Flags what the AI is most likely to guess or fail on.
- **1-Click Optimized Agent Spec:** Generates a structured prompt formatted with hard constraints, acceptance criteria, and verification commands.

---

## 🛠️ Quick Start (Run Locally)

You can run this project with zero dependencies:

### Option 1: Direct Open
Simply double-click or open `index.html` in any browser!

### Option 2: Local Server
```bash
# Using Node / npx
npm start
# Or using Python
python3 -m http.server 3000
```
Open `http://localhost:3000` in your browser.

---

## 📋 Devpost Learn Planning Artifacts
In compliance with the **Build With AI: Basics** requirements, all generated planning artifacts are tracked in the repository:
- `devpost/learner-profile.md` — Learner onboarding profile
- `devpost/scope.md` — Project scope, unique kernel, and PoC boundaries
- `devpost/prd.md` — Product requirements, core user journey, and acceptance criteria
- `devpost/spec.md` — Technical specification and zero-setup architecture
- `devpost/checklist.md` — Step-by-step build slices and verification
- `devpost/app-map.html` — Interactive architecture and visual map

---

## 📜 License
MIT
