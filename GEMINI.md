# Krea Labs Project Context

## Project Overview
**Krea Labs** is a portfolio and agency website designed with a "Digital Blueprint" / "Industrial Sci-Fi" aesthetic. It showcases the lab's capabilities in Hard Tech, Soft Tech, and R&D.

- **Type:** Static Website
- **Stack:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **No Frameworks:** Deliberately avoids frameworks like React or Tailwind CSS to maintain a lightweight, "pure" codebase.
- **Deployment:** GitHub Pages

## Architecture & Logic
The project follows a simple separation of concerns:
1.  **Structure & Style (`index.html`):** Contains the semantic HTML markup and all CSS styles (internal `<style>` block).
2.  **Data (`data.js`):** Stores content (Projects, Team, Partners) in global `window` arrays. This allows non-developers to easily update text without touching HTML structure.
3.  **Logic (Inline Script in `index.html`):** A `renderContent()` function fetches data from the global window objects and dynamically injects HTML into the DOM. It also handles UI effects like the custom cursor, scroll reveal, and clock.

## Key Files

*   **`index.html`**: The main entry point.
    *   **CSS:** Located in `<style>`. Uses CSS variables (e.g., `--krea-black`, `--font-mono`) for theming.
    *   **JS:** Inline script at the bottom handles rendering and interactivity.
*   **`data.js`**: Configuration file for dynamic content.
    *   Exports `window.projects`, `window.team`, `window.partners`, `window.socials`.
*   **`package.json`**: Manage deployment dependencies.
    *   Uses `gh-pages` for deployment.

## Usage & Commands

### Prerequisites
*   Node.js & npm (for deployment only)

### Commands
*   **Deploy:** `npm run deploy`
    *   Builds (if necessary) and pushes the current directory to the `gh-pages` branch.

## Development Conventions

*   **Styling:**
    *   Do **not** introduce external CSS frameworks (Bootstrap, Tailwind).
    *   Use the existing CSS variables defined in `:root`.
    *   Class names loosely follow utility conventions (e.g., `text-xl`, `mb-4`) but are manually defined in the `<style>` block.
*   **JavaScript:**
    *   Keep logic vanilla and dependency-free.
    *   Content updates should primarily happen in `data.js`.
    *   DOM manipulation is done via template literals in `renderContent()`.
*   **Design Language:**
    *   **Font:** 'Space Mono' (Google Fonts).
    *   **Colors:** High contrast—Black backgrounds, White text, Red accents (`#dc2626`).
    *   **Motifs:** Grids, crosshairs, scanlines, technical data overlays.

## Roadmap / TODOs
*   **Mobile Responsiveness:** ensure grid layouts stack correctly on smaller screens (partially implemented with media queries).
*   **Asset Management:** Images currently use placeholders or data URIs; consider a dedicated `assets/` folder if media grows.
