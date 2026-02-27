# Test Plan — ReqRes Public REST API

## Objective
Demonstrate a professional QA approach for a backend/API product:
- manual test planning and execution
- defect reporting
- automated API test coverage executed in CI

## Scope (In scope)
Users:
- GET /api/users?page={n}
- GET /api/users/{id}
- POST /api/users
- PUT/PATCH /api/users/{id}
- DELETE /api/users/{id}

Auth:
- POST /api/register (success/fail)
- POST /api/login (success/fail)

## Test Types
- Smoke tests (availability + core flows)
- Functional API testing (request/response validation)
- Negative testing (missing fields, invalid IDs)
- Regression (re-run suite on push/PR)

## Environment
- Base URL: https://reqres.in
- Tools: Postman (manual), Node.js + Mocha/Chai/Supertest (automation), GitHub Actions (CI)

## Entry / Exit Criteria
Entry:
- API reachable
- Test cases ready
Exit:
- Smoke tests executed
- High-priority cases executed
- CI pipeline green
- Findings documented
