# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Vision

Velvet is a productivity platform designed specifically for neurodivergent professionals with the motto "Soft support for sharp minds." The website should have a clean, calming design with high contrast and minimal visual clutter. The homepage features a hero section with the headline "Work tools designed for neurodivergent minds" and the tagline "Soft support for sharp minds" prominently displayed, along with a waitlist signup form. Key sections include: sensory-smart interface features, focus-first design principles, flexible organization systems, and gentle accountability tools. The overall aesthetic should be modern and professional like Huly, using soft color palettes that don't overwhelm, with accessibility-first design including dark mode toggle, reduced motion options, and dyslexia-friendly typography. The site should emphasize empowerment and inclusion rather than deficits, positioning productivity tools that adapt to how neurodivergent brains actually work. The motto "Soft support for sharp minds" should be woven throughout the copy to reinforce the brand's approach of providing gentle, adaptive tools for intelligent, neurodivergent professionals. Target audience is professionals with ADHD, autism, and other neurodivergent experiences who need software that works with their cognitive patterns, not against them.

## Development Commands

### Core Development
- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks
- `pnpm lint:fix` - Fix ESLint issues automatically

### Code Quality
- `pnpm prettier` - Check code formatting
- `pnpm prettier:fix` - Format code automatically
- `pnpm format` - Format TypeScript, TSX, and Markdown files

### Testing
- `pnpm test` - Run Vitest unit tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:ui` - Open Vitest UI
- `pnpm test:coverage` - Generate test coverage report
- `pnpm e2e:headless` - Run Playwright end-to-end tests
- `pnpm e2e:ui` - Run Playwright tests with UI

### Storybook
- `pnpm storybook` - Start Storybook development server
- `pnpm build-storybook` - Build Storybook for production
- `pnpm test-storybook` - Run Storybook tests

### Analysis & Debugging
- `pnpm analyze` - Build with bundle analyzer
- `pnpm coupling-graph` - Generate component dependency graph

## Project Architecture

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **TypeScript**: Strict mode with `noUncheckedIndexedAccess`
- **Package Manager**: pnpm with Corepack
- **Component Library**: Radix UI for headless components
- **Styling System**: Class Variance Authority (CVA) for component variants
- **Environment Variables**: T3 Env for type-safe environment management

### Code Structure
- `app/` - Next.js App Router pages and API routes
- `components/` - Reusable React components with co-located tests and stories
- `styles/` - Global styles including Tailwind CSS
- `e2e/` - Playwright end-to-end tests
- `assets/` - Static assets like SVGs and images

### Component Pattern
Components follow a consistent pattern:
- Main component file (`Component.tsx`)
- Storybook stories (`Component.stories.tsx`)
- Unit tests (`Component.test.tsx`)
- Use CVA for variant management and tailwind-merge for className handling

### Environment & Configuration
- Environment variables are validated using T3 Env in `env.mjs`
- Health check endpoints available at `/healthz`, `/health`, `/ping`
- Bundle analysis available via `ANALYZE=true` environment variable
- OpenTelemetry integration for observability

### Testing Strategy
- **Unit Tests**: Vitest with React Testing Library and jsdom
- **E2E Tests**: Playwright for end-to-end scenarios
- **Component Tests**: Storybook for component documentation and testing
- **Coverage**: Available via `pnpm test:coverage`

### Linting & Formatting
- ESLint 9 with TypeScript, Next.js, and Storybook plugins
- Import sorting with grouped organization (external, builtin, internal)
- Prettier for consistent code formatting
- Conventional commits for standardized git history

### Development Notes
- Uses absolute imports with TypeScript path mapping
- Strict TypeScript configuration with enhanced type safety
- React 19 with Strict Mode enabled
- Performance monitoring with Perfect Lighthouse score optimization