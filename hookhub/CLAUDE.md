# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16 application using React 19, TypeScript, and Tailwind CSS 4. It follows the App Router architecture with server-side rendering by default.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

**Framework**: Next.js 16 with App Router (app directory)
- Server Components by default (use 'use client' directive for client-side interactivity)
- File-based routing in `app/` directory
- Root layout in `app/layout.tsx` configures global HTML structure and fonts

**Styling**: Tailwind CSS 4 with PostCSS
- Global styles in `app/globals.css`
- Uses CSS variables for theming (dark mode supported)
- Configured fonts: Geist Sans and Geist Mono via next/font

**TypeScript Configuration**:
- Path alias: `@/*` maps to project root
- Strict mode enabled
- JSX: react-jsx (automatic runtime)

**Static Assets**: Place files in `public/` directory (accessible via root path)

## Project Structure

```
app/
  layout.tsx    - Root layout with HTML/body structure, fonts, metadata
  page.tsx      - Home page component
  globals.css   - Global Tailwind styles and CSS variables
public/         - Static assets (SVGs, images)
```

## Key Conventions

- All components in `app/` are Server Components unless marked with 'use client'
- Pages are created by adding `page.tsx` files in `app/` subdirectories
- Layouts can be nested by adding `layout.tsx` in subdirectories
- Use `next/image` for optimized image loading
- Use `next/font` for optimized font loading
