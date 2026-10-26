---
doc: scope
status: approved
---

# AgentReflex

An interactive prompt and spec diagnostic workbench that stress-tests coding agent prompts for hidden ambiguities, edge cases, and missing context before you hit enter.

## The Unique Kernel
Instead of generic prompt checkers that just say "be clearer", AgentReflex simulates how an AI coding agent misinterprets your prompt: it extracts the implied assumptions, highlights dangerous ambiguities, flags missing test/error boundaries, and provides an instant 1-click optimized refactor.

## Who It's For
Developers and builders who use AI coding agents (Claude Code, Cursor, Antigravity, Copilot) and are tired of agents misinterpreting vague prompts, hallucinating files, or skipping error handling.

## The Core Loop
The user pastes an intended feature prompt or requirement, clicks **"Reflex Audit"**, instantly sees an interactive Diagnostic Radar (Ambiguity Score, Missing Boundaries, Unstated Assumptions), and clicks **"Generate Tight Agent Spec"** to copy an actionable prompt.

## Inspiration & Identity
- High-contrast, clean developer dashboard with terminal aesthetics (dark mode, crisp accents).
- Fast, instantaneous feedback without loading friction.

## Why This Matters to the Learner
Saves wasted tokens, prevents agent debugging rabbit holes, and directly embodies the hackathon's "plan before you build" ethos.

## What "Working" Looks Like
A sleek web application where a user pastes any feature request (e.g., "Build an auth system with email login"), clicks Audit, sees 3 highlighted failure risks (e.g., "Missing token expiration handling", "Undefined database schema"), and receives a structured, bulletproof prompt ready to paste into any coding agent.

## The POC Boundary
- **In:**
  - Interactive web UI (fast, responsive, zero external API key requirements to run locally or demo).
  - Built-in heuristic intelligence engine + prompt analyzer for key agent failure modes (clarity, security boundaries, testing criteria).
  - Visual score card & risk breakdown.
  - 1-click refactored prompt generation & clipboard copy.
  - Sample preset prompts for quick testing and 1-minute video demo.
- **Later:**
  - Multi-agent simulator, direct webhook integration with IDEs.

## Explicitly Cut
- Multi-user authentication: Not needed for single-player developer diagnostic PoC.
- Cloud database storage: Session-based / local storage is faster and portable.
