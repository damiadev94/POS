# Spacing System

## Scale

The spacing system is defined in `assets/css/tokens.css` with a modular scale:

- `--space-xxs`: 0.25rem
- `--space-xs`: 0.5rem
- `--space-sm`: 0.75rem
- `--space-md`: 1rem
- `--space-lg`: 1.5rem
- `--space-xl`: 2rem
- `--space-2xl`: 2.5rem
- `--space-3xl`: 3rem
- `--space-4xl`: 4rem

## Examples

- Use `--space-md` for comfortable paragraph spacing.
- Use `--space-lg` for card padding and section gaps.
- Use `--space-xl` for page-level separation and hero spacing.
- Use `--space-2xl` and above for large blocks or full-width layouts.

## Guidelines

- Prefer token values instead of hardcoded margins and paddings.
- Use the `grid-2`, `grid-3` and `grid-4` helpers with `gap` utilities for spacing inside grids.
- Keep vertical rhythm consistent across poster sections by reusing the same token values.
