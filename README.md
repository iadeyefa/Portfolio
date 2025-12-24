# Portfolio Website

Portfolio website built with React, TypeScript, and Vite. Showcasing projects, skills, and experience.

## Live Demo

Visit the deployed site: **[https://ife-adeyefa.vercel.app/](https://ife-adeyefa.vercel.app/)**

## Tech Stack

- React - UI library
- TypeScript - Type-safe JavaScript
- Vite - Fast build tool and dev server
- Tailwind CSS - Utility-first CSS framework

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

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
├── components/
│   ├── BioContent.tsx      # Bio tab with projects and skills
│   ├── ResumeContent.tsx   # Resume tab with PDF viewer
│   └── Tabs.tsx            # Tab navigation logic
├── assets/                 # Images and icons
├── App.tsx                 # Main app component
├── App.css                 # Global styles
└── main.tsx               # Entry point
```

## Deployment

This site is deployed on **Vercel**. It automatically redeploys when you push to the main branch.

To deploy to your own Vercel account:
1. Connect your GitHub repo to Vercel
2. Vercel will auto-detect the Vite configuration
3. Deploy with one click

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
