# Contributing to Go4Garage Website

Thanks for your interest in contributing! This repository is proprietary; external
contributions are accepted only from authorized collaborators.

## Development Setup

Prerequisites:
- Node.js **22.x** (see `.nvmrc`)
- npm 10+

```bash
git clone https://github.com/flywithvvk/g4gwebsite.git
cd g4gwebsite
npm install
npm run dev   # http://localhost:3000
```

## Workflow

1. Create a feature branch: `git checkout -b feat/short-description` or `fix/...`
2. Make focused, atomic commits.
3. Ensure the build passes:
   ```bash
   npm run lint         # ESLint (flat config, next/core-web-vitals + next/typescript)
   npx tsc --noEmit     # Type check
   npm run build        # Static export to out/
   ```
4. Open a Pull Request against `main`. CI runs lint + type-check + build.
5. At least one approving review is required before merge.

## Commit Messages

Follow Conventional Commits where practical:
- `feat: ...` new feature
- `fix: ...` bug fix
- `docs: ...` documentation only
- `refactor: ...` code change that is not a feature or bug fix
- `chore: ...` tooling, dependencies, config

## Code Style

- TypeScript strict mode. No `any` without justification.
- Tailwind CSS for styling; prefer utility classes over custom CSS.
- Framer Motion for animations.
- Keep components in `components/`; page routes in `app/` (App Router).

## Reporting Bugs

Use the GitHub Issues template. Include: browser, OS, steps to reproduce, expected vs actual behaviour.
