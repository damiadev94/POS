# Component Documentation

This file documents the reusable visual components available in the infographics system.

## Cards

- `.card` — generic content container.
- `.card--callout` — special callout card with accent styling.
- `.info-card` — informational cards for short summaries.
- `.module-card` — blocks used for poster index and future content teasers.

## KPI Cards

- `.kpi-card` — uses a compact, data-first layout.
- `.kpi-card__value` — large numeric value for key metrics.

## Timeline

- `.timeline` — vertical timeline container with a left border.
- `.timeline__item` — individual milestone.
- `.timeline__item-title` — milestone label or category.

## Diagram Block

- `.diagram-block` — dedicated panel for diagrams and visual explanations.
- `.diagram-title` — title for diagrams and visual sections.

## Callout

- `.callout` — elevated section for important notes or executive highlights.

## Quote

- `.quote` — styled quote block with left border and emphasis.

## Legend

- `.legend` — horizontal legend container.
- `.legend__item` — legend entry with a colored chip.
- `.legend__chip` — visual swatch for legend keys.

## Status Badge

- `.status-badge` — rounded badge for status labels.
- `.status-badge--success` — success state.
- `.status-badge--warning` — warning state.
- `.status-badge--danger` — danger state.

## Module Card

- `.module-card` — promotional card used on the dashboard and placeholder areas.
- `.module-card__tag` — small contextual label inside module cards.

## Architecture and Relationship Boxes

- `.architecture-box` — box for architecture subtitles and nested information.
- `.relationship-box` — box for domain relationships and system interactions.

## Buttons

- `.button` — base button styling.
- `.button--primary` — primary action style.
- `.button--secondary` — secondary action style.
- `.button--ghost` — minimal action style.

## Poster Card

- `.poster-card` — entry card for poster navigation on the dashboard.
- `.poster-card__title` — poster title.
- `.poster-card__description` — poster description text.
- `.poster-card__meta` — metadata row for status and links.
- `.poster-card__link` — link to the poster detail page.

## Notes

- Keep component classes small and composable.
- Prefer semantic classes over presentational names for better reuse.
- Use utility classes from `utilities.css` for layout adjustments and spacing.
