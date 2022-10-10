# Welcome!
[Update with a project introduction as the project grows]

---

## Architecture Decisions:

### Commands:
```
"dev": `start the server locally`
"build": `create a production build`
"preview": `opens a local server of production build`
"lint": `lints & fixes js(x)/ts(x) linting issues`
"lint:folders": `configures directory structure rules and checks if existed or new files fit these rules.`
"lint:style": `lints & fixes style issues`,
"lint:all": `lints & fixes all files`,
"prettier": `reformats all code to predefined syntax rules`,
"test": `runs unit tests`,
"husky:pre-commit": `checks for ts errors and lints all project files on commit`,
"husky:pre-push": `makes sure husky is available on npm install`,
"analyze": `runs a bundle analyzer on prod build`
```

### .env files:
```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

### Formatting help:

The following are used to help enforce code uniformity across team members: 
- **Stylelint**
  - Enforces best-practices within SCSS and CSS files
- **Eslint**
    - Enforces best-practices within JS/JSX/TS/TSX files
- **Prettier**
    - Reformats code written to help fix consistent spacing, indents, syntax, etc.

### Using Vite:

#### Add Sourcemap:

- Update File: `vite.config.ts`

```
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    build: {
      sourcemap: true,
    },
  })
```
