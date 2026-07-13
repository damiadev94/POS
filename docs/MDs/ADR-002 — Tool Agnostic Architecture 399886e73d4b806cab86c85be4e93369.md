# ADR-002 — Tool Agnostic Architecture

---

**Status:** Accepted

### Context

Las herramientas evolucionan constantemente y ninguna debería definir el funcionamiento del POS.

### Decision

El POS será completamente independiente de cualquier software específico.

Las herramientas implementan la arquitectura, pero nunca la modifican.

### Consequences

- Es posible migrar entre herramientas.
- El modelo permanece estable.
- Se evita el vendor lock-in.