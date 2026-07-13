# ADR-008 — Introduce Bounded Contexts

---

**Status:** Accepted

### Context

Los Components comenzaban a asumir responsabilidades demasiado amplias y mezclaban distintos modelos conceptuales.

### Decision

Incorporar Bounded Contexts entre Engines y Components.

Los Contexts representan límites semánticos del dominio.

### Consequences

- Cada contexto posee un lenguaje consistente.
- Las entidades tienen un único significado dentro de cada contexto.
- La evolución del dominio resulta más sencilla.