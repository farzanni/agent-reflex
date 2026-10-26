---
doc: checklist
status: approved
---

# Build Checklist

Build mode: fast

## Slices

- [x] **1. Core UI Layout and Developer Dashboard**
  Becomes usable: The split-pane layout renders with dark mode styling, text editor, presets, and diagnostic dashboard panels.
  Why now: Proves the whole visual interface immediately so functionality has an exact surface to bind to.
  PRD ref: `prd.md > Screens and Layout`
  Spec ref: `spec.md > Components`, `spec.md > Look and Feel`
  Build: Create `index.html`, `styles.css` with dark theme styling, header, input area, and diagnostic gauge placeholders.
  Verify (mechanical): Verify files exist and open with no syntax errors.
  Learner check: App loads with dark styling and responsive split-pane editor.
  Commit: `Add core UI dashboard layout and theme`

- [x] **2. Diagnostic Engine and Heuristic Rule Analysis**
  Becomes usable: Clicking "Reflex Audit" runs the prompt through 5 diagnostic engines and renders the dynamic radar score, risk tags, and failure explanations.
  Why now: Delivers the unique kernel and primary value proposition of the app.
  PRD ref: `prd.md > Features and Behavior` (Prompt Diagnostic Engine)
  Spec ref: `spec.md > How This Works, In Plain Language`
  Build: Implement `app.js` with heuristic evaluation rules for ambiguity, error handling, schema boundaries, testability, and security.
  Verify (mechanical): Run sample prompt through analyzer function and verify score and risk generation.
  Learner check: Entering a prompt and clicking audit displays score and risk cards.
  Commit: `Implement diagnostic engine and score radar`

- [x] **3. Presets, Refactor Generator, and 1-Click Export**
  Becomes usable: One-click scenario presets load realistic test cases, optimized agent prompt generates automatically, and copy-to-clipboard works with visual feedback.
  Why now: Completes the end-to-end user journey and demo readiness.
  PRD ref: `prd.md > The Core Journey` (steps 4-6)
  Spec ref: `spec.md > Decisions and Open Issues`
  Build: Wire preset buttons, refactor template builder, and clipboard handler.
  Verify (mechanical): Verify preset loading and copy event handler.
  Learner check: Click preset, click audit, copy optimized prompt.
  Commit: `Add presets, prompt refactor engine, and export actions`

## Hands-on Checkpoints

- [x] Early usable behavior explored — dashboard and analyzer functional
- [x] Final kick-the-tires exploration and feedback completed

## Final Review

- [x] Final review complete — feedback resolved and learner confirms ready to ship

## Code Tour and App Map

- [x] Learning activity complete — guided route, focused alternative, prior practice connected, or brief recap
- [x] Optional edit and transfer reflection addressed — offered/declined/already covered/not applicable as appropriate
- [x] `devpost/app-map.html` generated from finished code, checked, and shown, including a project-grounded practice to reuse

Activity and evidence: AgentReflex prompt diagnostic workbench implementation
Route and stops: `index.html` (UI), `styles.css` (layout & styling), `app.js` (rule engine)
Edit outcome: complete
Reflection: Fast-mode execution for hackathon submission
Activity mode: live app

## Revisions
