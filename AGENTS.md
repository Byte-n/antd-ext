# AGENTS.md

This file provides guidance to Qoder (qoder.com) when working with code in this repository.

## Project Overview

This is `@byte.n/antd-ext`, a React component library that extends and enhances Ant Design components. It's built with TypeScript, published as an npm package, and uses dumi for documentation.

- **Target**: React 16-19 compatibility
- **Design System**: Follows Ant Design specifications
- **Build Tool**: Father (component bundler)
- **Documentation**: Dumi with antd theme
- **Styling**: `@ant-design/cssinjs` (CSS-in-JS)

## Commands

### Development
- `npm run dev` or `npm start` - Start development server with dumi
- `npm run build:watch` - Watch mode for component development

### Build & Release
- `npm run build` - Build components using father
- `npm run docs:build` - Build documentation site
- `npm run docs:preview` - Preview built documentation
- `npm run deploy` - Deploy docs to gh-pages

### Quality Checks
- `npm run lint` - Run both ESLint and stylelint
- `npm run lint:es` - ESLint for .js/.jsx/.ts/.tsx files
- `npm run lint:css` - Stylelint for .css/.less files
- `npm run doctor` - Run father doctor for health checks

## Architecture

### Component Structure

Each component follows this standard structure:
```
src/ComponentName/
├── index.tsx           # Main component implementation
├── index.md            # Component documentation
├── demo/               # Demo examples
│   ├── basic.tsx       # Basic usage demo
│   └── *.tsx           # Other demos
└── style/              # Styling (CSS-in-JS)
    └── index.ts        # Style hooks using genStyleHooks
```

### Styling System

- Uses `@ant-design/cssinjs` for all styling
- Import `genStyleHooks` from `antd/es/theme/internal`
- Each component exports `useStyle` hook from `style/index.ts`
- Component tokens defined in `src/typings.d.ts` under `ComponentTokenMap`
- For complex components, split styles into separate files (e.g., `inputNumberStyle.ts`, `selectStyle.ts`) and merge in main style file
- All styles must support dark mode via token system (no hardcoded colors)
- Use CSS logical properties for RTL support (e.g., `margin-inline-start` instead of `margin-left`)

### TypeScript Conventions

- All components use `interface` for props (named `ComponentNameProps`)
- Export all public types with `export type`
- Avoid `any` - use `unknown` when type is uncertain
- Use `React.FC<Props>` or explicit return types
- Provide JSDoc comments for complex types/functions
- Use `as const` for constants instead of `enum`
- Generic types should have sensible defaults and constraints

### Component Patterns

- Function components only (no class components)
- Use early returns for better readability
- Optimize with `React.memo`, `useMemo`, `useCallback` appropriately
- Support server-side rendering
- Maintain backward compatibility

### Naming Conventions (Ant Design Standard)

**Props:**
- Initialization: `default` + PropName (e.g., `defaultValue`)
- Open state: `open` (not `visible`)
- Disable: `disabled` or `disabled` + SubComponentName
- Events: `on` + EventName (e.g., `onChange`, `onSearchChange`)
- Render functions: ComponentName + `Render` (e.g., `panelRender`)

**Component Tokens:**
`[variant] + semantic part + [semantic part variant] + css property + [size/disabled]`
- Example: `itemSelectedBg` (item + selected variant + background)
- Must not conflict with global tokens

### Demo Guidelines

- Each demo focuses on one feature
- Located in `src/ComponentName/demo/`
- Named with kebab-case (e.g., `basic.tsx`, `custom-filter.tsx`)
- Import order: React → dependencies → antd-ext → types → styles
- Code should be concise and copy-paste ready
- Basic demo always comes first
- File extension: `.tsx` for demos

### Documentation

- Chinese primary (with English support where applicable)
- Follow API naming rules: https://github.com/ant-design/ant-design/wiki/API-Naming-rules
- API table format: Property | Description | Type | Default
- Use backticks for string defaults, plain text for booleans/numbers
- Alphabetical ordering in API tables (unless grouping makes more sense)

## Code Quality Standards

- No new dependencies without strong justification (bundle size critical)
- Chrome 80+ browser compatibility required
- Use existing utilities from antd-ext/antd before adding new ones
- Follow existing code patterns in similar components
- Never commit secrets or expose sensitive data
- Respect `prefers-reduced-motion` for animations
