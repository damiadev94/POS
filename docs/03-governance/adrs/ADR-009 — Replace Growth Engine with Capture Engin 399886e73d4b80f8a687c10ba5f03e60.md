# ADR-009 — Replace Growth Engine with Capture Engine

---

**Status:** Accepted

### Context

La arquitectura inicial incluía cuatro motores:

- Operations
- Knowledge
- Growth
- System

Durante el diseño se observó que **Growth** no representaba un dominio independiente, sino una consecuencia de la interacción entre conocimiento, activos y operaciones. Al mismo tiempo, la captura de información demostró ser una capacidad transversal que merecía un límite propio.

### Decision

Eliminar **Growth Engine** e introducir **Capture Engine**.

La arquitectura queda organizada como:

```
Capture Engine

Operations Engine

Knowledge Engine

System Engine
```

### Consequences

- Capture deja de ser un proceso implícito y pasa a ser una capacidad arquitectónica de primer nivel.
- Growth deja de modelarse como un Engine y pasa a entenderse como una propiedad emergente del sistema.
- La arquitectura gana cohesión y elimina responsabilidades superpuestas.