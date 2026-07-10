# Infographics System

A reusable HTML/CSS/JavaScript framework for architecture posters, knowledge maps, and technical infographics.

## Purpose

This module provides a web-native infrastructure for creating visual documentation artifacts that can be opened in any browser without additional build steps.

## Architecture

The system separates styling into a design tokens layer, typographic rules, layout utilities, reusable components, and print optimizations. Content is organized into template pages and project-specific poster folders.

## Organization

- `index.html` — dashboard and navigation for poster prototypes
- `assets/css/` — core stylesheets for reset, tokens, typography, layout, components, utilities and print
- `assets/js/` — application bootstrap and poster registry logic
- `components/` — placeholder directories for reusable markup fragments and patterns
- `templates/` — reusable poster templates and print styles
- `posters/` — starter poster modules and project-specific artifacts
- `design-system/` — documented design system guidance in Markdown

## Workflow

1. Duplicate a template or add a new poster directory.
2. Register the poster metadata in `assets/js/main.js`.
3. Fill the placeholder sections with content, diagrams, and references.
4. Preview the poster locally by opening the poster `index.html` files.

## Conventions

- Use semantic HTML and accessible headings.
- Keep all spacing and color definitions in `assets/css/tokens.css`.
- Reuse component classes from `components.css` for cards, timelines, and diagram blocks.
- Use the `print.css` rules to validate page breaks and printed output.

## Creating a new poster

1. Copy `templates/poster-template.html` into a new folder under `posters/`.
2. Rename the file to `index.html` and update the poster metadata.
3. Add page-specific styles in `poster.css` and interactions in `poster.js` as needed.
4. Add a new entry to the `posters` array in `assets/js/main.js`.

## Exporting to PDF

- Open the poster `index.html` file in a browser.
- Use the browser print dialog and select `Save as PDF`.
- Choose `A4`, `A3`, `A2` or `A1` as needed and verify orientation.
- Use the print preview to confirm sections are not split across pages.

## Printing

- Use the browser print dialog and select the correct paper size.
- The print stylesheet removes navigation and colors that do not translate well.
- Prefer `Paper size: A4` or `A3` for drafts and `A2` or `A1` only for high-resolution poster prints.

## Folder structure

See the repository tree for the complete module layout.

## Good practices

- Keep markup modular and avoid inline styles.
- Prefer descriptive class names and reusable component blocks.
- Document each poster with a clear problem statement, vision, and references.
- Use comments to mark sections that are placeholders for future content.
