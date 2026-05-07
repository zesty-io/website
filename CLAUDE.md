# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev              # Dev server (with Node inspector)
npm run build            # Production build
npm run start            # Start production server

# Code quality
npm run check-format     # Check Prettier formatting
npm run check-lint       # ESLint checking
npm run check-types      # TypeScript type checking
npm run format           # Auto-format with Prettier
npm run fix-lint         # Auto-fix ESLint issues

# Testing
npm run test             # Jest unit/integration tests
npm run dev-test         # Jest watch mode
npm run cy:open          # Cypress E2E interactive
npm run test:e2e:ci      # Start dev server + run Cypress headless

# Utilities
npm run analyze          # Bundle analysis
npm run sync             # Sync Zesty.io content models to Next.js
npm run clear-all        # Clean node_modules and .next
```

## Architecture

### Routing

Next.js with a catch-all route at `src/pages/[[...zesty]].js`. All public URLs are resolved via `getServerSideProps`, which calls `fetchPage()` to retrieve content from the Zesty CMS JSON API. The `PRODUCTION` env var (`true` = prod instance, `false` = stage instance) determines which Zesty endpoint is used.

Authenticated routes live under `src/pages/dashboard/`, `src/pages/accounts/`, `src/pages/console/`, etc. Middleware in `src/middleware.js` validates the `APP_SID` (prod) or `DEV_APP_SID` (dev) cookie against Zesty's auth API and redirects accordingly.

### State

Global state is managed by Zustand via `src/store/index.js`, accessed with the `useZestyStore` hook. The store holds authentication state, the active instance ZUID, user info, and the authenticated `ZestyFetchWrapper` instance used for API calls.

### Content Rendering

CMS-driven pages are rendered through `src/views/zesty/` — the `ZestyView` component maps CMS model names to React components. Content blocks live in `src/blocks/` (organized by type: heroes, features, cards, forms, etc.) and are the primary targets when updating or adding CMS-rendered UI.

### Component Organization

- `src/components/` — Feature-specific components (accounts, console, dashboard, marketplace, docs)
- `src/blocks/` — Reusable CMS content blocks
- `src/layouts/` — Page wrappers (`MarketingMain` for public pages, `Main` for authenticated pages)
- `src/lib/` — API integration, fetch utilities, Zesty FetchWrapper
- `src/utils/` — Helper functions
- `src/theme/` — MUI theme configuration (palette, typography, breakpoints)

### Styling

Material-UI v5 with Emotion for CSS-in-JS. The theme is in `src/theme/` with a custom palette and a non-standard `xl2: 2500` breakpoint. Avoid plain CSS files; use MUI's `sx` prop or `styled()`.

### Environment

Key env vars (set in `.env.local`):
- `PRODUCTION` — toggles prod vs stage Zesty endpoints
- `ZESTY_INSTANCE_ZUID` — CMS instance identifier
- `GTM_ID` — Google Tag Manager
- `GITHUB_TOKEN` — GitHub API access (roadmap feature)
- `ALGOLIA_*` — Search configuration
- `SENTRY_*` — Error tracking

### API Calls

- `src/lib/api.js` — Core axios/fetch wrappers (`fetchPage`, `fetchGqlData`)
- Authenticated calls go through the Zustand-stored `ZestyFetchWrapper` instance
- Lead capture posts to GCP Cloud Functions (ZOHO CRM integration); UTM params and persona (Developer/Marketer) are tracked and passed along
