# 2. Architectural Principles

---

Los **Design Principles** responden a **"cómo queremos que sea el sistema"** (filosofía).

Los **Architectural Principles** responden a **"qué reglas debe respetar la arquitectura"** (estructura).

Así evitamos duplicidad.

---

# Principios Arquitectónicos

| Principio | Descripción | Implicación |
| --- | --- | --- |
| **Domain First** | El dominio define la arquitectura, no la implementación. | La estructura del sistema nace del modelo conceptual y no de limitaciones tecnológicas. |
| **Separation of Responsibilities** | Cada motor o componente tiene una única responsabilidad claramente definida. | Evita componentes monolíticos y responsabilidades ambiguas. |
| **High Cohesion** | Los elementos relacionados permanecen agrupados. | Cada motor gestiona un área específica del dominio. |
| **Low Coupling** | Los motores conocen lo mínimo posible entre sí. | Los cambios en un motor tienen un impacto limitado sobre los demás. |
| **Modularity** | La arquitectura se divide en módulos independientes. | Los módulos pueden evolucionar o sustituirse sin afectar al resto del sistema. |
| **Explicit Boundaries** | Los límites entre motores y contextos son claros y explícitos. | Cada entidad pertenece a un único contexto con ownership definido. |
| **Composition over Centralization** | El sistema emerge de la colaboración entre motores especializados. | No existe un componente que concentre toda la lógica del sistema. |
| **Evolutionary Architecture** | La arquitectura debe poder evolucionar sin requerir rediseños completos. | Nuevos motores, componentes o capacidades pueden incorporarse preservando la coherencia. |
| **Technology Independence** | Ninguna decisión arquitectónica depende de una herramienta o plataforma concreta. | El POS puede implementarse sobre diferentes tecnologías sin alterar su modelo conceptual. |
| **Conceptual Traceability** | Toda decisión arquitectónica debe poder rastrearse hasta el dominio y la documentación. | Cada componente existe porque responde a una necesidad del dominio. |

---

# Reglas Arquitectónicas

Toda decisión de arquitectura debe cumplir las siguientes reglas:

- Una responsabilidad pertenece a un único componente.
- Una entidad posee un único owner arquitectónico.
- Los motores colaboran mediante contratos conceptuales claramente definidos.
- Ningún componente puede asumir responsabilidades de otro.
- La complejidad debe distribuirse entre módulos, nunca concentrarse en uno solo.
- Toda nueva capacidad debe integrarse respetando la estructura existente antes de crear nuevos elementos.

# Anti-Principios

La arquitectura del POS evita explícitamente los siguientes enfoques:

| Evitar | Motivo |
| --- | --- |
| Componentes con múltiples responsabilidades | Generan acoplamiento y dificultan la evolución. |
| Dependencias circulares | Rompen la modularidad y aumentan la complejidad. |
| Arquitectura basada en herramientas | Compromete la independencia tecnológica del sistema. |
| Lógica distribuida sin ownership | Dificulta el mantenimiento y la trazabilidad. |
| Crecimiento mediante excepciones | La arquitectura debe extenderse mediante reglas, no casos especiales. |
| Componentes "todopoderosos" | Centralizan la lógica y se convierten en cuellos de botella. |

---

# Criterios de Evaluación

Una decisión arquitectónica es válida si:

- Respeta el modelo del dominio.
- Mantiene responsabilidades claramente separadas.
- Reduce el acoplamiento entre componentes.
- Favorece la reutilización.
- Permite la evolución del sistema sin romper su estructura.
- Conserva la independencia respecto de tecnologías y herramientas.

Si una decisión incumple alguno de estos criterios, debe reconsiderarse o documentarse mediante un ADR.

# Relación con Foundation

Los principios definidos en **Foundation** expresan la filosofía general del proyecto.

Los **Architectural Principles** representan su aplicación práctica sobre la estructura del sistema y sirven como criterio para evaluar todas las decisiones de diseño arquitectónico.

## Observación arquitectónica

Añadiría un principio que probablemente gane importancia en las siguientes fases:

> **Single Source of Truth (SSOT):** Cada concepto, entidad o decisión arquitectónica debe tener un único lugar autoritativo dentro del sistema. Ninguna información crítica debe mantenerse duplicada en distintos componentes.
> 

No es un principio exclusivo del dominio ni de la implementación; es una regla de arquitectura que facilitará la consistencia cuando diseñemos el **Information Flow**, el **Conceptual Data Model** y la **Governance**.

# Estado

**Versión:** v0.1

**Estado:** Definido

**Próximo documento:** **05.3 Core Engines**