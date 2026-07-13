# ADR-003 — Transformations over Storage

---

**Status:** Accepted

### Context

Durante el Domain Discovery se observó que la mayoría de los sistemas personales se centran en almacenar información.

### Decision

El propósito del POS no es almacenar información.

Su propósito es gestionar transformaciones.

### Consequences

El foco cambia de:

```
Guardar información
```

a

```
Capturar

↓

Procesar

↓

Transformar

↓

Generar valor
```