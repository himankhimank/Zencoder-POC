---
description: Repository Information Overview
alwaysApply: true
---

# TestProject Information

## Summary
TestProject is a Salesforce DX (SFDX) repository configured for building and deploying applications on the Salesforce platform. It follows the standard Salesforce DX project structure and includes configurations for metadata management, automated testing for Lightning Web Components (LWC), and source code linting/formatting.

## Structure
- **force-app/**: The primary source directory containing Salesforce metadata.
  - **main/default/profiles/**: Contains security profile definitions (e.g., `Admin.profile-meta.xml`).
- **config/**: Project configuration files.
  - `project-scratch-def.json`: Defines features and settings for scratch orgs (e.g., Lightning Experience, Mobile settings).
- **manifest/**: Metadata manifests.
  - `package.xml`: XML manifest for standard metadata deployment/retrieval.
- **scripts/**: Developer scripts.
  - **apex/**: Anonymous Apex scripts for server-side execution.
  - **soql/**: SOQL query files for data exploration.
- **.vscode/**: VS Code integration settings and debug configurations.
- **.husky/**: Pre-commit hooks to enforce code quality before commits.

## Language & Runtime
**Language**: Apex, JavaScript, HTML, CSS, XML  
**Version**: Salesforce API 65.0  
**Build System**: Salesforce CLI (SFDX)  
**Package Manager**: npm  

## Dependencies
**Main Dependencies**:
- Salesforce platform-native (No external runtime dependencies listed in `package.json`).

**Development Dependencies**:
- `@salesforce/sfdx-lwc-jest`: Testing framework for Lightning Web Components.
- `eslint`: JavaScript linting with Salesforce-specific plugins (`@salesforce/eslint-config-lwc`, etc.).
- `prettier`: Code formatting with Apex support (`prettier-plugin-apex`).
- `husky` & `lint-staged`: Git hooks for automated code quality checks.

## Build & Installation
```bash
# Install development dependencies
npm install

# Authenticate to a Salesforce Org
sf org login web

# Create a scratch org for development
sf org create scratch -f config/project-scratch-def.json --set-default

# Deploy source to the authenticated org
sf project deploy start
```

## Testing

**Framework**: Jest (for LWC), Apex Testing (for server-side code)
**Test Location**: `**/__tests__/**` for LWC; Apex classes ending in `Test` or using `@isTest`.
**Naming Convention**: `*.test.js` for LWC Jest tests.
**Configuration**: `jest.config.js`, `sfdx-project.json`

**Run Command**:

```bash
# Run LWC Jest tests
npm run test:unit

# Run Apex tests via Salesforce CLI
sf apex run test --wait 10
```

## Validation
**Quality Checks**: 
- **ESLint**: Runs on Aura and LWC JavaScript files.
- **Prettier**: Ensures consistent formatting across Apex, HTML, CSS, and XML files.
- **Husky**: Triggers `lint-staged` on pre-commit to run Prettier and ESLint.

**Integration Points**:
- Integrates with Salesforce Orgs (Scratch Orgs, Sandboxes, Production) via Salesforce CLI.
- VS Code integration via Salesforce Extension Pack.
