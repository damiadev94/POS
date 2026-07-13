# 4. Components

---

Un **Component** es una unidad arquitectónica perteneciente a un único **Bounded Context**.

Su propósito es encapsular una capacidad funcional específica dentro del contexto al que pertenece.

Un Component:

- pertenece a un único **Bounded Context**;
- posee una única responsabilidad;
- encapsula reglas relacionadas del dominio;
- puede colaborar con otros Components del mismo Context;
- nunca representa un proceso, un estado o una entidad.

---

<aside>
💡

</aside>

# Organización General

```
Personal Operating System
│
├── Capture Engine
│   └── Capture Context
│       ├── Inbox Management
│       ├── Classification
│       └── Intake
│
├── Operations Engine
│   └── Operations Context
│       ├── Task Management
│       ├── Project Management
│       ├── Workflow Management
│       ├── Scheduling
│       └── Review Management
│
├── Knowledge Engine
│   ├── Knowledge Context
│   │   ├── Knowledge Repository
│   │   ├── Resource Management
│   │   ├── Classification
│   │   ├── Search
│   │   └── Validation
│   │
│   └── Asset Context
│       ├── Asset Repository
│       ├── Deliverable Management
│       ├── Versioning
│       └── Publishing
│
└── System Engine
    └── System Context
        ├── Governance
        ├── Configuration
        ├── Documentation
        ├── Architecture
        └── Monitoring
```

> **Nota:** La composición de Components es una propuesta inicial y podrá evolucionar durante el refinamiento de la arquitectura.
> 

---

## Component Characteristics

| Característica | Descripción |
| --- | --- |
| Ownership | Pertenece a un único Bounded Context |
| Responsabilidad | Encapsula una única capacidad funcional |
| Cohesión | Alta |
| Acoplamiento | Bajo |
| Contiene | Entities, Domain Services, Processes, Events |
| No representa | Estados, workflows completos o entidades |

---

# Relaciones

Los Components colaboran mediante interfaces conceptuales dentro de su Bounded Context.

# Reglas

Todo Component debe cumplir las siguientes condiciones:

- Pertenece a un único Bounded Context.
- Tiene una única responsabilidad.
- No administra entidades pertenecientes a otro Bounded Context.
- Puede evolucionar independientemente.
- Su existencia responde a una necesidad del dominio.
- Puede dividirse o fusionarse si el dominio evoluciona.

---

<aside>
💡

# Estado

**Versión:** v0.1

**Estado:** Definido

**Próximo documento:** **05.5 Bounded Contexts**

</aside>