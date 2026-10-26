// AgentReflex Core Logic & Heuristic Diagnostic Engine

const PRESETS = {
  auth: "Build an auth system with email login and password reset for my web app.",
  webhook: "Create a Stripe webhook listener endpoint that handles payment_intent.succeeded events and updates user tier.",
  scraper: "Write a python script that scrapes product prices from an e-commerce website and saves them to a CSV file."
};

const promptInput = document.getElementById('prompt-input');
const charCount = document.getElementById('char-count');
const auditBtn = document.getElementById('audit-btn');
const clearBtn = document.getElementById('clear-btn');
const presetChips = document.querySelectorAll('.preset-chip');
const scoreVal = document.getElementById('score-val');
const scoreBadge = document.getElementById('score-badge');
const circleProgress = document.getElementById('circle-progress');
const riskList = document.getElementById('risk-list');
const refactorPreview = document.getElementById('refactor-preview');
const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');

// Metric bars
const metricBoundaries = document.getElementById('metric-boundaries');
const metricSchema = document.getElementById('metric-schema');
const metricSecurity = document.getElementById('metric-security');
const metricTestability = document.getElementById('metric-testability');

// Character counter
promptInput.addEventListener('input', () => {
  charCount.textContent = `${promptInput.value.length} characters`;
});

// Preset switching
presetChips.forEach(chip => {
  chip.addEventListener('click', () => {
    presetChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const presetKey = chip.getAttribute('data-preset');
    promptInput.value = PRESETS[presetKey];
    charCount.textContent = `${promptInput.value.length} characters`;
    runAudit();
  });
});

clearBtn.addEventListener('click', () => {
  promptInput.value = '';
  charCount.textContent = `0 characters`;
  resetDiagnostic();
});

function resetDiagnostic() {
  scoreVal.textContent = '--';
  scoreBadge.textContent = 'Audited: Ready';
  scoreBadge.style.color = 'var(--text-muted)';
  circleProgress.setAttribute('stroke-dasharray', '0, 100');
  circleProgress.style.stroke = 'var(--surface-border)';
  metricBoundaries.style.width = '0%';
  metricSchema.style.width = '0%';
  metricSecurity.style.width = '0%';
  metricTestability.style.width = '0%';
  riskList.innerHTML = '<div class="empty-state">Run an audit to view potential agent traps.</div>';
  refactorPreview.textContent = 'Click "Reflex Audit" to generate an optimized prompt.';
}

function runAudit() {
  const text = promptInput.value.trim();
  if (!text) {
    alert("Please enter a prompt or pick a preset first!");
    return;
  }

  // Heuristic rule scoring
  const lower = text.toLowerCase();
  
  // 1. Error / Boundaries
  const hasErrors = /error|fail|catch|timeout|fallback|retry|invalid|exception|edge case/i.test(lower);
  const boundaryScore = hasErrors ? 85 : 25;

  // 2. Data / Schema
  const hasSchema = /table|column|type|schema|model|json|database|sql|payload|dto/i.test(lower);
  const schemaScore = hasSchema ? 90 : 30;

  // 3. Security / Auth
  const hasSecurity = /hash|bcrypt|jwt|secret|signature|token|sanitize|validate|auth|ssl|env/i.test(lower);
  const securityScore = hasSecurity ? 80 : 35;

  // 4. Testability / Acceptance
  const hasTests = /test|verify|spec|assert|unit|mock|acceptance criteria|curl/i.test(lower);
  const testScore = hasTests ? 95 : 20;

  // Overall Clarity Score calculation
  const compositeScore = Math.round((boundaryScore + schemaScore + securityScore + testScore) / 4);

  // Animate Circular Gauge
  scoreVal.textContent = compositeScore;
  circleProgress.setAttribute('stroke-dasharray', `${compositeScore}, 100`);

  let strokeColor = '#ef4444'; // Red
  let badgeText = 'High Risk';
  if (compositeScore >= 75) {
    strokeColor = '#10b981'; // Green
    badgeText = 'Agent-Ready';
  } else if (compositeScore >= 50) {
    strokeColor = '#f59e0b'; // Amber
    badgeText = 'Needs Context';
  }
  circleProgress.style.stroke = strokeColor;
  scoreBadge.textContent = badgeText;
  scoreBadge.style.color = strokeColor;

  // Update Metric Progress Bars
  metricBoundaries.style.width = `${boundaryScore}%`;
  metricBoundaries.style.backgroundColor = boundaryScore > 50 ? 'var(--accent-green)' : 'var(--accent-amber)';

  metricSchema.style.width = `${schemaScore}%`;
  metricSchema.style.backgroundColor = schemaScore > 50 ? 'var(--accent-green)' : 'var(--accent-amber)';

  metricSecurity.style.width = `${securityScore}%`;
  metricSecurity.style.backgroundColor = securityScore > 50 ? 'var(--accent-green)' : 'var(--accent-amber)';

  metricTestability.style.width = `${testScore}%`;
  metricTestability.style.backgroundColor = testScore > 50 ? 'var(--accent-green)' : 'var(--accent-red)';

  // Build Diagnostic Risk List
  const risks = [];

  if (!hasErrors) {
    risks.push({
      type: 'critical',
      title: 'Missing Error Handling & Edge Cases',
      desc: 'Coding agent will write a "happy path" implementation that will crash silently when requests fail.'
    });
  }

  if (!hasSchema) {
    risks.push({
      type: 'warn',
      title: 'Unspecified Schema & Data Types',
      desc: 'Agent will invent arbitrary database columns or variable names that conflict with your actual data model.'
    });
  }

  if (!hasSecurity) {
    risks.push({
      type: 'warn',
      title: 'Ambiguous Security Boundary',
      desc: 'No token expiration or secret management defined; agent might hardcode API credentials or use plain text.'
    });
  }

  if (!hasTests) {
    risks.push({
      type: 'critical',
      title: 'No Concrete Acceptance Criteria',
      desc: 'Agent has no target verification command or tests to prove the code works before stopping.'
    });
  }

  if (risks.length === 0) {
    risks.push({
      type: 'ok',
      title: 'Prompt is Well-Specified',
      desc: 'Explicit error boundaries, types, and verification criteria detected.'
    });
  }

  riskList.innerHTML = risks.map(r => `
    <div class="risk-card ${r.type === 'ok' ? 'ok' : r.type === 'warn' ? 'warn' : ''}">
      <div class="risk-title">
        <span>${r.title}</span>
        <span class="badge" style="font-size:0.7rem">${r.type.toUpperCase()}</span>
      </div>
      <div class="risk-desc">${r.desc}</div>
    </div>
  `).join('');

  // Generate Structured Bulletproof Refactor
  const optimized = generateOptimizedPrompt(text, {
    boundaryScore,
    schemaScore,
    securityScore,
    testScore
  });

  refactorPreview.textContent = optimized;
}

function generateOptimizedPrompt(rawPrompt, metrics) {
  return `### Role & Context
You are a senior software engineer. Implement the following feature cleanly and defensively.

### Goal
${rawPrompt}

### Hard Constraints & Boundaries
- All user inputs must be strictly validated before processing.
- Error handling: Never fail silently. Return descriptive HTTP status codes and log errors.
- Secrets & Credentials: Store all secrets in environment variables (.env), never committed or hardcoded.
- Handle edge conditions: Timeout handling, duplicate submissions, and missing payload fields.

### Acceptance Criteria & Verification
1. Implementation handles both valid requests and invalid payloads gracefully.
2. Unit test or automated test suite covers the happy path and at least 2 error edge cases.
3. Provide an exact curl command or verification script to demonstrate it working end-to-end.`;
}

// Copy to clipboard
copyBtn.addEventListener('click', () => {
  const textToCopy = refactorPreview.textContent;
  if (!textToCopy || textToCopy.startsWith('Click')) {
    return;
  }

  navigator.clipboard.writeText(textToCopy).then(() => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }).catch(() => {
    // Fallback
    const dummy = document.createElement('textarea');
    dummy.value = textToCopy;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  });
});

auditBtn.addEventListener('click', runAudit);

// Initialize with default preset on load
window.addEventListener('DOMContentLoaded', () => {
  promptInput.value = PRESETS.auth;
  charCount.textContent = `${promptInput.value.length} characters`;
  runAudit();
});
