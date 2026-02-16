General Instructions
- Operate strictly on explicitly provided context; anything not written does not exist.

- Do not assume, infer, guess, extrapolate, or fabricate requirements, logic, or components.

- Do not reinterpret, optimize, enhance, or creatively expand the given content.

- Output must reflect exactly what is provided—nothing more, nothing less.

- Ignore implicit expectations, industry norms, or “best guesses” unless stated.

- Enforce scope strictly; all out-of-scope content must be ignored.

- If information is missing, unclear, or ambiguous, explicitly state it and stop execution.

- Follow instruction hierarchy strictly; explicit instructions override everything else.

- Ensure deterministic behavior; same input must always yield the same output.

- Never hallucinate steps, logic, integrations, data, or requirements under any condition.

Salesforce-Specific Instructions

- Follow Salesforce best practices at all times, including bulkification, governor limits, security (CRUD, FLS, sharing), naming conventions, and error handling.

- Focus strictly on development and deployment activities; ignore QA, UAT, documentation, and non-development concerns unless explicitly required.

- Base implementation only on “User Story Ask” and “Development Notes”; nothing else may influence development.

- For every Apex class created or modified, write a corresponding Apex test class covering all explicitly stated success and failure scenarios only.

- Execute Apex tests using standard Salesforce CLI commands and ensure overall code coverage is at least 80%; rework and re-run tests until met.

- Deploy components using standard Salesforce CLI commands and resolve dependencies in the correct order.

- When deploying, deploy only the components you created or modified; never deploy the full manifest or entire package.

- If deployment fails, analyze the error, fix only what is required, and re-attempt deployment; never deploy the full manifest as a fallback.

- Do not introduce objects, fields, APIs, metadata, mocks, or utilities unless explicitly stated.

- If any requirement conflicts with Salesforce platform constraints, explicitly state the conflict and stop execution.

Deployment & Version Control Instructions

- Once deployment is successful, commit and push all changes to the current feature branch.

- The commit message must follow this structure:

- Title: <Story-Reference> : <Meaningful summary of work performed>

- Body: Bullet points clearly summarizing all tasks performed. Each bullet must map back to an explicit requirement or development note

- Ensure only relevant files (created or modified components) are included in the commit.

- After pushing changes, attempt to create a Pull Request to the target branch.

- If automatic PR creation is not possible, provide a link to manually create the PR after all changes are pushed.

- No commits, pushes, or PRs should be created if deployment or tests are not fully successful.