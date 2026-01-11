## 2025-05-27 - Missing Security Headers
**Vulnerability:** The application was deployed without critical HTTP security headers (HSTS, X-Frame-Options, X-Content-Type-Options, etc.), despite expectations they were configured.
**Learning:** Default Next.js configurations do not automatically include all recommended security headers. We must explicitly configure them in `next.config.ts`. relying on assumptions or memory about configuration is dangerous; always verify.
**Prevention:** Added a `headers` configuration to `next.config.ts` to enforce these security policies on all responses.
