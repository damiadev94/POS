# ADR-011 — Assets vs Implementations

---

## Estado

Accepted

---

## Contexto

Durante la validación del POS mediante un caso real de edición de video en CapCut surgió una limitación importante.

Muchas herramientas modernas (CapCut, Canva, Figma, Notion, etc.) permiten crear elementos reutilizables que no pueden exportarse de forma útil ni independizarse de la herramienta.

Si el POS considerara estos elementos como Assets, dejaría de ser Tool Agnostic y violaría uno de los principios fundamentales de la arquitectura.

Era necesario distinguir entre el concepto reutilizable y su materialización dentro de una herramienta específica.

---

## Decisión

Se introduce una separación explícita entre **Pattern** e **Implementation**.

```
Knowledge
        │
        ▼
     Build
        │
        ▼
     Pattern
        │
        ▼
Implementation
```

Donde:

**Pattern**

Representa una capacidad reutilizable independiente de cualquier herramienta.

Describe:

- objetivo
- estructura
- reglas
- secuencia
- restricciones
- recomendaciones
- variantes

No contiene implementación técnica.

---

**Implementation**

Representa la materialización de un Pattern dentro de una Tool determinada.

Ejemplos:

- Proyecto de CapCut
- Componente de Figma
- Plantilla de Canva
- Workflow de n8n
- GPT personalizado
- Prompt almacenado en Claude

Una misma Pattern puede tener múltiples Implementations.

---

## Consecuencias

El POS conserva el conocimiento aunque desaparezca la herramienta.

Si una Implementation se pierde:

- el Pattern permanece.
- puede recrearse otra Implementation.

La pérdida deja de ser conceptual para convertirse únicamente en un costo de reconstrucción.

---

## Beneficios

- mantiene Tool Agnostic
- evita que los Assets dependan de software específico
- facilita migraciones entre herramientas
- permite múltiples implementaciones del mismo conocimiento
- desacopla conocimiento de tecnología