# ZenCoder Salesforce POC – Jira-Driven AI Development

## Overview

This repository contains a **Proof of Concept (POC)** demonstrating how **ZenCoder AI** can be integrated with **Atlassian Jira** and **Salesforce** to perform **strict, requirement-driven Salesforce development**.  
The primary goal of this POC is to validate whether an AI agent can reliably implement Salesforce solutions **without hallucination, assumptions, or scope creep**, using Jira user stories as the single source of truth.

---

## Problem Statement

Traditional AI-assisted development often suffers from:
- Assumptions beyond requirements  
- Creative reinterpretation of user stories  
- Overengineering and scope leakage  
- Unsafe Salesforce deployments (full manifest, unintended metadata)

This POC enforces **hard constraints and deterministic behavior**, ensuring the AI:
- Implements only what is explicitly defined
- Follows Salesforce best practices
- Deploys safely and incrementally
- Stops execution when requirements are unclear

---

## High-Level Architecture

- **Jira**  
  Acts as the authoritative source of requirements via structured user stories.

- **ZenCoder AI Agent**  
  Operates as a Salesforce developer bound by strict general and Salesforce-specific instructions.

- **Salesforce Org**  
  Target environment where Apex, metadata, tests, and deployments are executed using Salesforce CLI.

---

## Key Design Principles

- **Context Absolutism**  
  Anything not written in the Jira user story does not exist.

- **Zero Hallucination Policy**  
  No assumptions, inferred logic, invented fields, objects, or integrations.

- **Strict Scope Enforcement**  
  Only development and deployment tasks are allowed; QA, UAT, and documentation are ignored unless explicitly required.

- **Deterministic Execution**  
  Identical inputs always produce identical outputs.

- **Fail-Fast Behavior**  
  Missing, unclear, or conflicting requirements immediately halt execution.

---

## Instruction Model

The AI agent operates under **two immutable instruction layers**:

### 1. General Instructions
Global behavioral constraints controlling scope, assumption prevention, determinism, and instruction hierarchy.

### 2. Salesforce-Specific Instructions
Rules enforcing Salesforce best practices, Apex testing discipline, deployment safety, CLI usage, and metadata control.

The agent **must strictly comply with both instruction sets** before performing any action.

---

## Development Rules Enforced

- Implementation is based **only** on:
  - `User Story Ask`
  - `Development Notes`

- Every Apex class must include:
  - A corresponding Apex test class
  - Explicit success and failure scenario coverage
  - Minimum **80% org-wide code coverage**

- Apex tests must be executed using **standard Salesforce CLI commands**.

- No refactoring, optimization, or enhancement unless explicitly stated.

---

## Deployment Rules (Critical)

- **Only components created or modified by the AI may be deployed**
- **Full manifest or entire package deployment is strictly forbidden**
- Dependencies must be identified and deployed in the correct order

On deployment failure:
- Analyze the error
- Fix only what is required
- Re-attempt deployment
- Never fall back to full manifest deployment

---

## What This POC Is Not

- Not a generic AI coding assistant  
- Not a replacement for clear requirement definition  
- Not a full CI/CD pipeline

---

## Intended Outcomes

- Validate AI reliability under strict constraints
- Enable safe, deterministic Salesforce development using AI
- Establish a reusable instruction framework for enterprise AI agents
- Lay the foundation for scalable Jira → AI → Salesforce workflows

---

## Disclaimer

This repository represents a **Proof of Concept** and is intended for experimentation and learning purposes only.  
It is not production-ready and should be used with appropriate governance and access controls.