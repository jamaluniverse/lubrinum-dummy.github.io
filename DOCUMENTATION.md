# Lubrinum Technical Documentation

This document provides a detailed overview of the Lubrinum website architecture, design system, and component implementation.

## 1. Architecture Overview

The Lubrinum website is built as a multi-page application (MPA) that leverages modern front-end technologies to deliver a high-performance, premium user experience.

-   **Modular Design**: CSS and JavaScript are strictly separated from the HTML markup to ensure maintainability.
-   **CDN-First Approach**: Tailwind CSS and Vue.js are loaded via high-availability CDNs, reducing initial setup friction and ensuring rapid deployment.
-   **State Management**: Handled via Vue 3's reactive system within `app.js`.

## 2. Design System

Mapped from the official Lubrinum Brand Guidelines (Performance Red / Cobalt Core Blue).

### Color Palette Config (`tailwind.config`)
-   `primary`: `#D00000` (Used for CTA, Highlights, and Technical Accents)
-   `secondary`: `#191970` (Used for secondary sections and depth)
-   `brandLight`: `#F5F9FA` (Main light background / Header text on dark)
-   `brandDark`: `#020000` (Main heavy background)
-   `brandGray`: `#151515` (Mid-tone for cards and UI separation)

### Typography
-   **Headings**: `Work Sans` (Weight 300-700). Applied via the `.font-heading` class and h1-h6 tags.
-   **Body**: `Sofia Sans` (Weight 300-800). Default font for all paragraphs and interactive elements.

## 3. UI Components & CSS

Defined in `style.css`:

-   **`text-glow`**: Adds a subtle Performance Red neon effect to headings.
-   **`nano-grid`**: A background utility using radial gradients to simulate the molecular lattice structure of Lubrinum products.
-   **`gradient-overlay`**: Smooth linear fades for hero sections to ensure text readability over high-performance machinery imagery.
-   **Animations**: `pulse-slow` is used for the background lattice to create a "breathing" industrial feel.

## 4. JavaScript & Vue.js Integration

`app.js` initializes a Vue 3 application that mounts to `#app`.

-   **Reactive State**: Use the `data()` function in `app.js` to manage UI states (e.g., `isMenuOpen`, `selectedFilter`).
-   **Lifecycle Hooks**: `mounted()` is used for initializing global scripts or logging application telemetry.
-   **Template Syntax**: Vue directives like `v-if`, `v-for`, and `v-on:click` can be used directly within the HTML pages.

## 5. Page Layouts

### Inspiration: Gore-Tex Layout
The sub-pages (`products.html`, `technology.html`, etc.) follow a high-impact grid system:
1.  **Immersive Hero**: Large typography over subtle background grids.
2.  **Filter/Utility Bar**: Minimalist sorting controls for industrial data.
3.  **Content Cards**: Large imagery placeholders with colored top-borders to denote categories.
4.  **Shared Global Navigation/Footer**: Ensured via constant layout patterns across all HTML files.

## 6. Graphics & Assets

-   **Favicon**: `element/logo/logo-icon.svg`
-   **Header Logo**: `element/logo/logo-lubrinum-color.svg` (Full contrast)
-   **Footer Logo**: `element/logo/logo-lubrinum-mono.svg` (Monochrome white/alpha)

## 7. Future Enhancements

-   **Build Process**: Migration to Vite/Vue SFC for larger scale expansion.
-   **Component Library**: Extraction of shared HTML partials into Vue Components.
-   **Dark/Light Mode**: Dynamic theme switching using Tailwind's `class` strategy.

---
**Last Updated**: March 2026
**Engineering Lead**: Lubrinum Industrial Group
