# Coding Style Guide

## 1. Architecture & Performance
- **Dynamic Imports**: Use `next/dynamic` for client-side heavy components (D3 graphs, 3D experiences, maps) with `{ ssr: false }` to prevent hydration mismatches and optimize bundle size.
- **Story-Driven Layout**: Structure the main page as a sequence of discrete section components (e.g., `<StoryHero />`, `<BeyondCode />`) rather than a single monolithic file.
- **Client-Side Initialization**: Leverage `useEffect` and `useRef` for integrating third-party imperative libraries (D3.js, Leaflet) within the React lifecycle.

## 2. Component Design & Patterns
- **Knowledge Graph Pattern**: Use D3-powered force simulations to visualize semantic relationships between data nodes. Standardize on `GraphNode` and `GraphLink` interfaces for graph data structures.
- **Interactive Sidebars**: Implement collapsible sidebar navigation for complex visualizations using a `Set` to track expanded categories for O(1) lookups.
- **Framer Motion Integration**: Use custom animation wrappers like `<BlurFade>` with a consistent `BLUR_FADE_DELAY` constant to orchestrate staggered entry animations.

## 3. Data & State Management
- **Centralized Resume Schema**: Maintain a single source of truth in `src/data/resume.tsx` using `as const` for deep immutability and precise TypeScript inference.
- **Semantic Linking**: Define relationships between content items explicitly (e.g., `CONTENT_LINKS` array) to power automated graph connections rather than relying solely on tags.
- **Metadata Generation**: Use `generateMetadata` for dynamic routes to create rich OpenGraph and Twitter card previews.

## 4. TypeScript Conventions
- **Discriminated Unions**: Use literal types for categorizing data (e.g., `type: "content" | "tag" | "center"`) to enable safe conditional rendering and styling.
- **Interface Extensions**: Extend D3's base types (e.g., `interface GraphNode extends d3.SimulationNodeDatum`) to maintain type safety across complex mathematical simulations.

## 5. Styling & UX
- **Tailwind Extension**: Use semantic spacing and border tokens (e.g., `py-section-md`, `mb-section-lg`, `divide-border/30`).
- **Glassmorphism**: Combine `backdrop-blur-sm`, `bg-background/80`, and `border-border/50` for overlays and tooltips.
- **Contextual Tooltips**: Implement hover-state tooltips that reveal deeper metadata for graph nodes or interactive map points.

## 6. Content (MDX)
- **Frontmatter**: Every MDX post must include `title`, `publishedAt`, `summary`, and `tags`.
- **Minimalist Formatting**: Prefer lowercase headings and bulleted lists for technical specifications to maintain a clean "digital garden" aesthetic.
- **Conditional Components**: Use slug-based conditional rendering in the blog template to inject specific interactive components (e.g., `<KeyboardCounter />`) into specific posts.