# HookHub MVP Specification

## Overview

HookHub is a display-only platform for browsing open source cloud hooks/webhooks sourced from GitHub repositories. The MVP focuses on presenting a curated collection of webhook projects in an intuitive grid layout.

---

## Data Model

### Hook Type (`types/hook.ts`)

```typescript
export type HookCategory =
  | 'ci-cd' | 'notifications' | 'integrations' | 'deployment'
  | 'data-sync' | 'monitoring' | 'security' | 'general';

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  repoUrl: string;
  repoSlug: string;
  language: string;
  stars?: number;
  license?: string;
}

export interface CategoryInfo {
  id: HookCategory;
  label: string;
  description: string;
}
```

---

## File Structure

```
hookhub/
├── app/
│   ├── layout.tsx           # Update metadata
│   ├── page.tsx             # Replace with HookGrid
│   └── globals.css          # Existing (extend if needed)
├── components/
│   ├── hooks/
│   │   ├── HookCard.tsx     # Individual hook card
│   │   ├── HookGrid.tsx     # Grid container
│   │   └── CategoryFilter.tsx # Category filter pills
│   ├── layout/
│   │   ├── Header.tsx       # Site header
│   │   └── Footer.tsx       # Site footer
│   └── ui/
│       └── Badge.tsx        # Reusable badge
├── data/
│   ├── hooks.json           # Static hook data
│   └── categories.ts        # Category metadata
├── lib/
│   └── hooks.ts             # Data access functions
└── types/
    └── hook.ts              # TypeScript interfaces
```

---

## Page Layout

```
+----------------------------------------------------------+
|  HEADER: [Logo] HookHub - Discover Open Source Webhooks  |
+----------------------------------------------------------+
|  [All] [CI/CD] [Notifications] [Integrations] [...]      |
+----------------------------------------------------------+
|  +-------------+  +-------------+  +-------------+       |
|  | [Category]  |  | [Category]  |  | [Category]  |       |
|  | Hook Name   |  | Hook Name   |  | Hook Name   |       |
|  | Description |  | Description |  | Description |       |
|  | [Language]  |  | [Language]  |  | [Language]  |       |
|  +-------------+  +-------------+  +-------------+       |
+----------------------------------------------------------+
|  FOOTER: Built with Next.js | Data from GitHub           |
+----------------------------------------------------------+
```

**Responsive Grid:** 1 col (mobile) → 2 cols (tablet) → 3-4 cols (desktop)

---

## MVP Features

| Feature | Description |
|---------|-------------|
| Hook Grid Display | Responsive grid of hook cards |
| Category Badges | Color-coded category indicators |
| External Links | Links to GitHub repos |
| Category Filter | Client-side filtering by category |
| Dark Mode | System preference support |
| Language Display | Show primary language |

---

## Data Strategy

**Static JSON** - Hooks stored in `data/hooks.json`, loaded at build time via Server Components.

Sample hooks to include:
- `adnanh/webhook` (Go) - Lightweight webhook server
- `svix/svix-webhooks` (Rust) - Enterprise webhooks service
- `go-playground/webhooks` (Go) - Multi-platform receiver
- `standard-webhooks/standard-webhooks` (TypeScript) - Webhook standards
- `hookdeck/hookdeck-cli` (Go) - Local webhook development
- `localtunnel/localtunnel` (JavaScript) - Localhost tunneling

---

## Implementation Order

1. **Foundation:** `types/hook.ts`, `data/categories.ts`, `data/hooks.json`, `lib/hooks.ts`
2. **UI Components:** `Badge.tsx`, `HookCard.tsx`, `HookGrid.tsx`
3. **Layout:** `Header.tsx`, `Footer.tsx`, update `layout.tsx`
4. **Integration:** Update `page.tsx`, add `CategoryFilter.tsx`
5. **Polish:** Test responsive design, dark mode, update README

---

## Files to Modify

| File | Changes |
|------|---------|
| `app/layout.tsx` | Update title to "HookHub", add description |
| `app/page.tsx` | Replace boilerplate with Header + HookGrid + Footer |

---

## Verification

1. Run `npm run dev` to start development server
2. Open http://localhost:3000
3. Verify grid displays hooks correctly
4. Test category filter functionality
5. Test responsive design at different breakpoints
6. Toggle system dark mode to verify theme support
7. Click hook cards to verify GitHub links work
8. Run `npm run build` to ensure production build succeeds
