# ADR-001 — Architecture Before Implementation

---

**Status:** Accepted

### Context

El proyecto comenzó antes de elegir una implementación concreta (Notion, Obsidian, etc.). Existía el riesgo de que la herramienta condicionara el diseño del sistema.

### Decision

La arquitectura conceptual debe diseñarse completamente antes de pensar en cualquier implementación.

### Consequences

- El modelo es independiente de la tecnología.
- La implementación puede cambiar sin rediseñar el sistema.
- La documentación pasa a ser la fuente de verdad.