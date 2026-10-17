# Security Policy

## Supported Versions

Security fixes are released for the latest minor version of each package's current major version.

| Package             | Supported          |
| ------------------- | ------------------ |
| `@ponsetya/core`    | Latest major ✅    |
| `@ponsetya/browser` | Latest major ✅    |
| `@ponsetya/node`    | Latest major ✅    |
| Older majors        | ❌                 |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public issues, discussions or pull requests.**

1. **Preferred:** use GitHub's private vulnerability reporting:
   [Report a vulnerability](https://github.com/arasekinci/ponsetya/security/advisories/new).
2. **Fallback:** email [info@arasekinci.com](mailto:info@arasekinci.com) with the subject `[ponsetya security]`.

Please include:

- the affected package(s) and version(s)
- a description of the issue and its impact
- steps or a proof of concept to reproduce it
- any suggested fix, if you have one

## What to Expect

- **Acknowledgement** within 3 business days.
- **Initial assessment** (confirmed, needs more info, or not a vulnerability) within 7 days.
- **Fix and release** as soon as practical, depending on severity. Critical issues are prioritised.
- You will be kept informed of progress and credited in the advisory unless you prefer to stay anonymous.

## Disclosure Process

Fixes are developed in a private GitHub security advisory. Once a patched version is published to npm, the advisory is made public (with a CVE when applicable). Please give us a reasonable time to release a fix before disclosing the issue publicly. We aim for no more than 90 days.

## Scope

In scope: the published `@ponsetya/*` packages and this repository's build and release pipeline.
Out of scope: the documentation website content and vulnerabilities in third-party dependencies that are already publicly known (please report those upstream; Dependabot tracks them here).
