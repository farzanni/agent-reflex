---
doc: spec
status: approved
---

# AgentReflex — Technical Spec

## How This Works, In Plain Language
AgentReflex runs directly in the browser as a modern, self-contained web application. When a user pastes a prompt and clicks "Reflex Audit", a client-side diagnostic analyzer inspects the prompt against common coding agent failure patterns (lack of acceptance criteria, absent error handling, vague constraints, missing tech stack). It computes a composite clarity score and renders an interactive breakdown with risk flags and an actionable, structured prompt ready for AI coding agents.

## The Core Journey Through the System
1. User enters text in `#prompt-input` or selects a preset chip.
2. `auditPrompt()` parses input against heuristic rule engines (`rule_boundaries`, `rule_schemas`, `rule_security`, `rule_testing`, `rule_ambiguity`).
3. Scores and diagnostic items are compiled into a `DiagnosticResult` object.
4. DOM updates dynamically: the circular score dial animates, risk tags render with color-coded severity, and the refactored prompt is generated.
5. User clicks `#copy-btn`, invoking `navigator.clipboard.writeText()` with a visual toast.

## Stack
- **Frontend Core:** Pure modern HTML5, CSS3, ES6 JavaScript.
- **Styling:** Custom developer dark theme with CSS variables and responsive flex/grid layouts.
- **Icons & Visuals:** Inline SVG icons for zero external asset network latency.
- **Server:** Node.js static server or direct browser open (`index.html`).

## Where It Runs and How Someone Tries It
- **Runtime:** Any modern web browser (Chrome, Firefox, Safari, Edge).
- **Start Command:**
  - `npx serve .` or `python3 -m http.server 3000` or opening `index.html` directly in the browser.
- **Demo Recording:** Shows opening the app, clicking a preset, running the audit, inspecting the diagnostic warnings, and copying the refactored prompt.

## Look and Feel
- **Theme:** Dark slate (`#090d16` canvas, `#131b2e` cards, `#1e293b` borders).
- **Accents:** Emerald `#10b981` (high score), Amber `#f59e0b` (warning), Rose `#f43f5e` (critical), Cyan `#38bdf8` (interactive).
- **Fonts:** System monospace (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`).

## Components
- **Header:** Title, badge, and quick GitHub link.
- **EditorPane:** Input textarea, preset buttons, character count, audit action button.
- **AuditRadar:** Circular gauge showing score (0-100), health assessment rating.
- **RiskFeed:** Collapsible risk cards showing severity, description, and agent risk impact.
- **PromptRefactorView:** Formatted output with 1-click clipboard copy.

## File Structure
```
ai-dream/
├── index.html        # Main dashboard UI
├── app.js            # Diagnostic rule engine & UI controller
├── styles.css        # Developer dark mode styling
├── devpost/          # Hackathon planning artifacts
│   ├── learner-profile.md
│   ├── scope.md
│   ├── prd.md
│   ├── spec.md
│   └── checklist.md
├── package.json      # Project metadata & start script
└── README.md         # Documentation & run instructions
```

## Important Failure Modes
- **Empty Prompt:** User clicks audit without typing → Shows informative empty-state message and prompts to try a preset.
- **Clipboard Permissions:** Fallback selection range copy if `navigator.clipboard` is restricted.

## Decisions and Open Issues
- **Decision:** Client-side rule engine instead of required remote API key to ensure zero setup friction for hackathon judges and 100% offline reliability.
