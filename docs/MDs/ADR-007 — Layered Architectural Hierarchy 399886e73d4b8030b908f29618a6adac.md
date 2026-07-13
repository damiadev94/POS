# ADR-007 — Layered Architectural Hierarchy

---

**Status:** Accepted

### Context

Durante System Architecture aparecía una mezcla entre Engines, Components, procesos y estados.

### Decision

Definir una jerarquía arquitectónica explícita.

```
System

↓

Engine

↓

Bounded Context

↓

Component

↓

Entity

↓

State / Process / Event / Value Object
```

### Consequences

Cada concepto posee un único nivel de abstracción.

Se elimina la mezcla entre estructura y comportamiento.