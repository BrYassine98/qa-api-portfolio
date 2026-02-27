# QA Portfolio Overview for ReqRes

The QA Portfolio for ReqRes showcases various testing strategies and methodologies applied to ensure the quality of the ReqRes API. This includes comprehensive test plans, test cases, bug reports, and automation strategies implemented using tools like Mocha, Chai, and Supertest. This portfolio serves as a demonstration of my testing approach and capabilities in a real-world API scenario.

## Why automation targets JSONPlaceholder

ReqRes is protected by Cloudflare and returns **403 (challenge)** from GitHub-hosted CI runners.
To keep a stable, green CI pipeline, automated tests run against JSONPlaceholder, while ReqRes is used
for manual test planning/cases examples.
