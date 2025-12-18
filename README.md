# Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite. Showcasing projects, skills, and experience with a clean, responsive design.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the website.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Page components
├── App.tsx         # Main app component
├── App.css         # Global styles
└── main.tsx        # Entry point
```

## Development Setup

### ESLint Configuration

This project uses ESLint with TypeScript support. For production applications, enable type-aware lint rules:

```javascript
// eslint.config.js
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // or for stricter rules:
      // tseslint.configs.strictTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### React-Specific Lint Rules

Install React linting plugins:

```bash
npm install --save-dev eslint-plugin-react-x eslint-plugin-react-dom
```

Update `eslint.config.js`:

```javascript
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## Vite Plugins

This template uses two official Vite plugins for React:

- **`@vitejs/plugin-react`** - Uses Babel for Fast Refresh
- **`@vitejs/plugin-react-swc`** - Uses SWC for faster builds