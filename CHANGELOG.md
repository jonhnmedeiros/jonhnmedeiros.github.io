# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [1.0.0] - 2026-08-27

### Added

- Internationalization (PT/EN): browser-language auto-detection, a language
  switcher in the header, and full translation of all site copy.
- CV download link now points to the PT or EN resume depending on the
  active language.
- Real, detailed copy for the NHS Energia experience: the EnergiView
  ecosystem (mobile app, React admin dashboard, Quasar admin panel with
  Playwright E2E tests, Nuxt 4 landing page).
- Personal Projects section with real cards (Reaper Strike Co. and
  FinTrack), linking to their live Vercel deployments instead of source
  code (private repos).
- SEO improvements: meta description, Open Graph, Twitter card, and
  canonical URL.
- New favicon.

### Fixed

- Custom domain (`CNAME`) no longer gets deleted on every `npm run build`.

[Unreleased]: https://github.com/jonhnmedeiros/jonhnmedeiros.github.io/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/jonhnmedeiros/jonhnmedeiros.github.io/releases/tag/v1.0.0
