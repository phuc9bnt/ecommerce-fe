# GitHub Copilot Instructions

This is a React + TypeScript ecommerce frontend application built with Vite.

## Project Overview

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Routing**: React Router DOM v7
- **Styling**: CSS Modules

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── layouts/      # Layout components (e.g. HeaderLayout)
├── pages/            # Page-level components
│   ├── home-page/
│   └── login/
├── services/         # Axios instance and API configurations
└── utilities/        # Helper functions (token management, headers)
```

## Coding Conventions

- Use TypeScript with strict typing — avoid `any`.
- Use CSS Modules for component-scoped styles (`.module.css` files).
- Place API logic in `src/services/`.
- Place reusable utilities in `src/utilities/`.
- Keep page components in `src/pages/<page-name>/`.
- Keep shared components in `src/components/`.
