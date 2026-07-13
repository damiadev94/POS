# ADR-005 — Separation of Entities, Processes and States

---

**Status:** Accepted

### Context

Durante Ubiquitous Language aparecía una mezcla entre tareas, procesos y estados.

### Decision

Separar explícitamente tres conceptos:

- Entities
- Processes
- States

Cada uno representa un nivel diferente del dominio.

### Consequences

```
Entity

↓

Process

↓

State Change
```

Se elimina la ambigüedad conceptual.