# Project Setup Instructions

Your current project is set up with **Vite + React + Tailwind CSS (JavaScript)**.
To fully support **TypeScript** and **shadcn/ui CLI**, follow these instructions.

## 1. Adding TypeScript Support

Since your project was created as JavaScript, you need to add TypeScript manually.

1. **Install TypeScript dependencies:**

    ```bash
    npm install -D typescript @types/react @types/react-dom @types/node
    ```

2. **Create `tsconfig.json`:**
    Create a `tsconfig.json` file in the root directory:

    ```json
    {
      "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "skipLibCheck": true,
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx",
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "fallthroughCasesInSwitch": true,
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"]
        }
      },
      "include": ["src"],
      "references": [{ "path": "./tsconfig.node.json" }]
    }
    ```

3. **Create `tsconfig.node.json`:**

    ```json
    {
      "compilerOptions": {
        "composite": true,
        "skipLibCheck": true,
        "module": "ESNext",
        "moduleResolution": "bundler",
        "allowSyntheticDefaultImports": true
      },
      "include": ["vite.config.js"]
    }
    ```

4. **Rename Files:**
    - Rename `.jsx` files to `.tsx` (e.g., `App.jsx` -> `App.tsx`).
    - Rename `.js` files to `.ts` (e.g., `lib/utils.js` -> `lib/utils.ts`).

## 2. Setting up shadcn/ui CLI

Once TypeScript is set up (optional but recommended for shadcn), you can initialize the CLI.

1. **Initialize shadcn/ui:**

    ```bash
    npx shadcn@latest init
    ```

2. **Configuration Prompts:**
    - **Style:** Default
    - **Base Color:** Slate (or your preference)
    - **CSS variables:** Yes
    - **Tailwind CSS config:** `tailwind.config.js` (if using v3) or let it detect. *Note: You are using Tailwind v4, shadcn CLI support for v4 is experimental/evolving. You may need to manually configure.*
    - **Components:** `src/components`
    - **Utils:** `src/lib/utils`
    - **React Server Components:** No (since using Vite)

3. **Add Components:**

    ```bash
    npx shadcn@latest add button card
    ```

## 3. Tailwind CSS

You already have Tailwind CSS v4 installed and configured! No action needed.

---

**Note:** I have already manually integrated the requested component and setup the necessary `lib/utils` and file structure for you, so the component works immediately without these steps. These steps are only if you wish to fully migrate the project infrastructure.
