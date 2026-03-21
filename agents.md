# OmegaTech Website - Project Guidelines

## Core Principles

- **Feature-Based Architecture:** Organize code by business domain/feature rather than by technical layer. Each feature should be self-contained within `src/features/`.
- **TypeScript First:** Ensure all code is strictly typed. Avoid `any` at all costs.
- **Component Design:** Use functional components with hooks. Prefer small, reusable components.
- **Styling:** Use CSS modules or TailwindCSS (verify preference). Keep styles scoped to components where possible.
- **Testing:** Add unit tests for utils and hooks, and integration tests for features.

## Directory Structure

- `src/features/`: Contains business logic and UI for specific features.
  - `feature-name/`
    - `api/`: API calls related to the feature.
    - `components/`: Components specific to the feature.
    - `hooks/`: Hooks specific to the feature.
    - `types/`: Type definitions for the feature.
    - `utils/`: Utility functions for the feature.
    - `index.ts`: Public API for the feature.
- `src/components/`: Shared, generic UI components (buttons, inputs, etc.).
- `src/hooks/`: Shared, reusable hooks.
- `src/utils/`: Generic utility functions.
- `src/pages/`: Page-level components that compose features and shared components.
- `src/layouts/`: Global layout components (Header, Footer, Sidebar).
- `src/services/`: Shared services (HTTP client, authentication, etc.).

## Development Workflow

- **Atomic Commits:** Keep commits small and focused on a single change.
- **Validation:** Always run linting and type checking before completing a task.
- **Documentation:** Document complex logic and exported functions/components.

## Agent Specific Instructions

- Always check `src/features/` before adding a new component or logic to see if it belongs to an existing feature.
- Follow the export pattern: components should be exported from `index.ts` within their feature folder.
- Maintain consistency with the existing naming conventions (PascalCase for components, camelCase for functions/hooks).
