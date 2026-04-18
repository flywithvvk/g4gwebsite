# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `CHANGELOG.md`
- GitHub issue and pull request templates
- `.editorconfig`, `.nvmrc` for consistent dev environment
- `ci.yml` workflow for PR validation (lint, type-check, build)

### Changed
- Migrated lint from removed `next lint` to ESLint v9 flat config with `eslint-config-next`
- Set `turbopack.root` in `next.config.js` to silence multi-lockfile warning
- Tidied `.gitignore` to exclude tooling and snapshot directories

## [1.0.0] - 2026-04-18

### Added
- Initial public release of the Go4Garage website
- 9 pages: Home, Platform, Products, Solutions, About, Contact, Impact, Investors, plus Privacy, Terms, and 404
- Next.js 16 App Router with TypeScript and Tailwind CSS 4
- Static export (`output: 'export'`) targeting Firebase Hosting
- Framer Motion animations, responsive design, SEO meta tags
