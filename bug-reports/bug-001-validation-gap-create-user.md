# Bug Report: Create user accepts empty payload (validation gap)

## Environment
- API: https://reqres.in
- Endpoint: POST /api/users
- Date: 2026-02-27

## Steps to reproduce
1. Send POST https://reqres.in/api/users with body: {}

## Expected
400 Bad Request with validation error (missing required fields).

## Actual
API may return 201 with generated fields even for an empty payload (demo behavior).

## Severity / Priority
Severity: Low (demo API) / Medium (production)
Priority: Low
