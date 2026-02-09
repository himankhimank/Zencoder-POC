# Contributing to ZenCoder Salesforce POC

Thank you for your interest in contributing to the **ZenCoder Salesforce POC – Jira-Driven AI Development**.

This repository is not a generic AI playground.  
It is a **strict, constraint-driven Proof of Concept** focused on **safe, deterministic, and non-hallucinating Salesforce development** controlled by Jira user stories.

The primary goal is to **enforce discipline**, not to maximize flexibility.

---

## Contribution Philosophy

- This POC exists to demonstrate that an AI agent can develop and deploy Salesforce components **only** from explicitly defined Jira requirements.
- All changes must preserve or strengthen:
  - Zero-assumption behavior  
  - Scope control  
  - Deterministic execution  
  - Deployment safety  
- Features that increase ambiguity, loosen guardrails, or encourage creativity are **not aligned** with this project.

---

## Non-Negotiable Principles

The following principles **must never be violated**:

- The AI must operate only on **explicitly provided context** (primarily Jira `User Story Ask` and `Development Notes`).
- No assumptions, inferred behavior, or hidden “intelligence” are allowed.
- No hallucination of objects, fields, APIs, integrations, or requirements.
- No generic “improvement” or “optimization” unless explicitly requested in the story.
- Execution must be deterministic: the same input must produce the same output.
- Missing, unclear, or conflicting requirements must trigger **fail-fast** behavior (stop and report), not guessing.

---

## Salesforce-Specific Guardrails

All Salesforce-related contributions must:

- Respect platform limits and best practices:
  - Bulkification  
  - Governor limit safety  
  - Security (CRUD, FLS, sharing)  
  - Clear naming conventions  
  - Robust error handling  
- Enforce that:
  - Every Apex class has a corresponding test class.
  - Tests cover explicitly defined success and failure scenarios.
  - Code coverage is at least **80%**, validated via Salesforce CLI.
- Maintain strict deployment discipline:
  - **Only components created or modified by the AI may be deployed.**
  - **Full manifest or entire package deployment is strictly forbidden.**
  - Deployment must use Salesforce CLI and respect dependency ordering.
  - On deployment failure, only required components may be adjusted and re-deployed.
  - At no point should a full manifest be deployed as a fallback strategy.

---

## Allowed Contributions

You are encouraged to contribute in ways that **strengthen** the core principles, such as:

- Improving documentation (README, diagrams, examples, clarifications).
- Enhancing instruction clarity for the AI (without loosening constraints).
- Adding more robust validation, safety checks, or logging around:
  - Instruction enforcement  
  - Deployment safety  
  - Test execution and coverage reporting  
- Adding or improving diagrams (e.g., Mermaid diagrams for architecture and flows).
- Extending examples of Jira user stories or templates (while keeping them explicit and strict).

---

## Forbidden Changes

The following types of changes will **not be accepted**:

- Any feature that allows:
  - AI creativity, “smart guessing,” or speculative behavior.
  - Automatic refactoring, optimization, or redesign not explicitly requested.
  - Relaxation of the zero-hallucination or zero-assumption rules.
- Any change that:
  - Enables or encourages full manifest / entire package deployments.
  - Expands AI scope into QA, UAT, documentation, or non-development activities by default.
  - Introduces hidden defaults, implicit behavior, or “magic” behind the scenes.
- Any change that weakens or bypasses:
  - Instruction layers (General or Salesforce-Specific).
  - Deterministic execution guarantees.

---

## Change Review Guidelines

When submitting a pull request, ensure:

1. **Alignment Check**  
   - Does this change reduce hallucination or scope creep?
   - Does it improve safety, traceability, or clarity?
   - Does it preserve the “explicit requirements only” model?

2. **Salesforce Safety Check**  
   - Are tests still passing?
   - Is coverage ≥ 80% (where applicable)?
   - Are deployments still partial and scoped only to modified/created components?

3. **Instruction Integrity Check**  
   - Are the General Instructions and Salesforce-Specific Instructions preserved or strengthened?
   - Does the AI remain constrained and deterministic?

If the answer to any of these is “no” or “uncertain”, please refine the change before submitting.

---

## Local Testing Expectations

Before opening a pull request:

- Run all relevant tests and ensure they pass.
- Validate that:
  - No new behavior allows full manifest deployments.
  - No new behavior encourages AI assumptions or speculative logic.
  - Any new instruction or flow is clearly documented.

If your change impacts AI behavior, also update:

- Relevant documentation (`README.md`, diagrams).
- Any instruction definitions that are affected.

---

## Governance & Ownership

This POC is intended for **controlled, internal, and experimental use**.  
Changes should be made with the understanding that:

- This project demonstrates a **governed AI development pattern**, not a general-purpose framework.
- Maintaining strict control and predictability is more important than adding new capabilities.
- Every contribution should move the project toward **safer and more explainable AI behavior**, not just “more powerful” AI.

Thank you for helping keep this POC disciplined, predictable, and safe.