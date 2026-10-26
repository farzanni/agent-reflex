---
doc: prd
status: approved
---

# AgentReflex — Product Requirements

An interactive prompt & spec diagnostic workbench that stress-tests coding agent prompts for hidden ambiguities, edge cases, and missing context before you hit enter.
Source: `scope.md > The Unique Kernel`.

## The Core Journey
1. **Arrival:** User opens the application in their browser (served locally or static).
2. **Input:** User types or pastes a coding prompt into the text editor, or clicks a quick sample preset (e.g., "Build an Auth System", "Payment Webhook Handler", "File Upload Pipeline").
3. **Audit:** User clicks **"Reflex Audit"**.
4. **Diagnostic Feedback:** Within 200ms, the Diagnostic Radar displays:
   - **Clarity / Ambiguity Score (0-100)**
   - **Critical Omissions:** Highlighted risks (e.g. missing error handling, unspecified schema, token expiry).
   - **Hidden Agent Assumptions:** What an LLM coding agent is likely to guess or hallucinate.
5. **Action / Refactor:** User views the refactored, high-precision prompt formatted with acceptance criteria and constraints.
6. **Export:** User clicks **"Copy Agent-Ready Prompt"** with instant toast feedback.

## Screens and Layout
A unified single-surface dashboard divided into two responsive panes:
- **Left Pane (Input & Presets):**
  - Prompt text area with line counter.
  - Quick-preset chips for 1-click loading.
  - "Reflex Audit" trigger button.
- **Right Pane (Diagnostic & Output):**
  - Health & Risk Gauge (Ambiguity score & badge).
  - Diagnostic breakdown tabs: "Risks & Hallucinations" and "Optimized Prompt".
  - One-click "Copy to Clipboard" button.

## Look and Feel
- **Theme:** Modern developer dark mode (`#0f172a` slate background, `#10b981` emerald green for high clarity, `#f59e0b` amber / `#ef4444` red for flagged risks, `#38bdf8` cyan accents).
- **Typography:** Clean monospaced font for code/prompts (JetBrains Mono / Inter).
- **Tone:** Fast, developer-grade, zero bloat.

## Features and Behavior

### Prompt Diagnostic Engine
- Analyzes prompts for 5 critical coding agent failure dimensions:
  1. **Boundaries & Error Handling:** Checks for error cases, exceptions, edge conditions.
  2. **Data & Schema Specifics:** Checks for types, data formats, database references.
  3. **Security & Secrets:** Checks for tokens, auth, validation boundaries.
  4. **Testability & Verification:** Checks for acceptance criteria, how to prove it works.
  5. **Scope Bloat / Ambiguity:** Checks for vague adjectives ("fast", "modern", "simple").

### Interactive Preset Library
- 3 built-in realistic developer scenarios ready for instant testing:
  - "Quick & Dirty": Vague prompt with high risks.
  - "Webhook Listener": Moderate prompt missing signature verification.
  - "Data Scraper": Missing rate-limiting and failure retries.

### Smart Refactor Generator
- Formulates a structured, bulletproof prompt using standard agent-friendly structure (Objective, Requirements, Non-Goals, Verification Steps).

## States and Boundaries
- **Empty State:** Shows placeholder with guidance and preset chips.
- **Analyzing State:** Brief animated scan effect on the diagnostic radar.
- **Audited State:** Populated scores, risk list, and optimized output.
- **Copied State:** Visual checkmark badge on the copy button.

## Product Decisions
- **Client-Side First:** All analysis runs in the browser instantaneously with zero API key configuration needed. This guarantees that any hackathon reviewer can test the app immediately without setup issues.

## What We're Building
- Complete single-page web app with real-time heuristic NLP diagnostic engine, risk analysis, score cards, and copyable refactored prompts.

## Deferred From the POC
- Custom LLM API key streaming (available for future release).
- IDE extension / VS Code plugin.

## Non-Goals
- Not a general writing assistant (specifically focused on software engineering prompts for coding agents).
