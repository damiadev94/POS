# 8. Domain Events

---

## Objetivo

Definir los eventos significativos que ocurren dentro del Personal Operating System como consecuencia de cambios en el dominio.

Los Domain Events permiten:

- representar hechos relevantes del sistema;
- comunicar cambios entre Engines;
- mantener bajo acoplamiento;
- preservar la trazabilidad del dominio;
- preparar futuras implementaciones basadas en eventos.

Los eventos describen **algo que ya ocurrió**.

Nunca representan una intención.

---

# ¿Qué es un Domain Event?

Un Domain Event representa un hecho pasado que modifica el estado del dominio.

Ejemplos:

```
Inbox Item Captured

Task Completed

Knowledge Created

Asset Built

Project Archived
```

Todos ellos son hechos.

Nunca órdenes.

---

# Qué NO es un Domain Event

No son:

```
Capture Inbox
Execute Task
Create Project
Build Asset
```

Eso son procesos o comandos.

Los eventos siempre usan pasado.

```
Captured
Processed
Created
Completed
Archived
```

---

# Principios

## DE-001 — Todo evento representa un hecho

Debe haber ocurrido realmente.

Nunca expresa intención.

✔

```
TaskCompleted
```

✘

```
CompleteTask
```

---

## DE-002 — Los eventos pertenecen al dominio

No representan detalles técnicos.

Incorrecto

```
DatabaseUpdated
```

Correcto

```
KnowledgeCreated
```

---

## DE-003 — Los eventos son inmutables

Una vez ocurrido un evento:

nunca cambia.

---

## DE-004 — Los eventos poseen significado de negocio

Si un usuario pudiera entenderlo leyendo el nombre,

es un buen candidato.

---

# Clasificación

Podemos dividirlos según el dominio.

---

# 1. Capture Events

Representan el ingreso de información.

```
InboxItemCaptured

IdeaCaptured

ResourceCaptured
```

---

# 2. Processing Events

Ocurren cuando el sistema decide el destino.

```
InboxItemProcessed

IdeaProcessed

ResourceProcessed

TaskPlanned

OperationPlanned
```

---

# 3. Execution Events

Relacionados con trabajo operativo.

```
TaskStarted

TaskCompleted

TaskPaused

OperationActivated

OperationReviewed

ProjectStarted

ProjectCompleted
```

---

# 4. Knowledge Events

Relacionados con aprendizaje.

```
KnowledgeCreated

KnowledgeValidated

KnowledgeImproved

KnowledgeArchived
```

---

# 5. Asset Events

Representan creación de valor reutilizable.

```
AssetCreated

AssetImproved

AssetReused

AssetArchived
```

---

# 6. Deliverable Events

```
DeliverableCreated

DeliverableCompleted

DeliverableDelivered
```

---

# 7. Lifecycle Events

Representan cambios importantes.

```
ProjectArchived

TaskArchived

OperationArchived

KnowledgeArchived
```

---

# Flujo de eventos

Un mismo elemento genera múltiples eventos.

Ejemplo:

```
Idea

↓

IdeaCaptured

↓

IdeaProcessed

↓

ProjectCreated

↓

ProjectStarted

↓

ProjectCompleted

↓

ProjectArchived
```

El dominio queda completamente trazable.

---

# Relación con los Processes

Los Processes producen eventos.

Nunca al revés.

```
Capture

↓

InboxItemCaptured
```

```
Learn

↓

KnowledgeCreated
```

```
Execute

↓

TaskCompleted
```

---

# Relación con los States

Los eventos provocan cambios de estado.

```
Task

Planned

↓

TaskStarted

↓

In Progress

↓

TaskCompleted

↓

Completed
```

Es decir

```
Process

↓

Domain Event

↓

State Change
```

Cada concepto conserva una responsabilidad única:

```
Process
↓

produce

↓

Domain Event

↓

provoca

↓

State
```

---

# Relación con los Engines

Los eventos permiten colaborar sin romper límites.

```
Operations Engine

↓

DeliverableCompleted

↓

Growth Engine
```

El Growth Engine decide qué hacer.

No existe acceso directo.

---

Otro ejemplo

```
Knowledge Engine

↓

KnowledgeCreated

↓

Growth Engine

↓

CapabilityImproved
```

---

# Eventos principales

| Engine | Domain Events |
| --- | --- |
| Operations | TaskStarted, TaskCompleted, DeliverableCompleted, ProjectCompleted |
| Knowledge | KnowledgeCreated, KnowledgeValidated, ResourceProcessed |
| Growth | CapabilityDeveloped, AssetCreated, AssetImproved |
| System | PolicyUpdated, ArchitectureChanged, ConfigurationChanged |

---

# Eventos derivados

Algunos eventos producen otros.

Ejemplo

```
TaskCompleted

↓

DeliverableCompleted

↓

ReviewCompleted

↓

KnowledgeCreated

↓

AssetCreated
```

No siempre ocurren.

Depende del dominio.

---

# Reglas

Todo Domain Event:

- representa un hecho pasado;
- ocurre una única vez;
- nunca cambia;
- pertenece al dominio;
- puede generar nuevos eventos;
- no contiene lógica de negocio;
- puede ser consumido por múltiples Engines.

---

# Convención de nombres

Siempre utilizar:

```
Entidad + Participio
```

Ejemplos

```
TaskCompleted

TaskArchived

KnowledgeCreated

ProjectStarted

IdeaCaptured

InboxItemProcessed

DeliverableDelivered
```

Evitar

```
CompleteTask

DoLearning

CreateAsset

ReviewKnowledge
```

---

# Observación arquitectónica

Los Domain Events conectan todos los modelos construidos hasta ahora:

```
Entity
        │
        ▼
Process
        │
        ▼
Domain Event
        │
        ▼
State Change
        │
        ▼
Interaction
        │
        ▼
Otro Engine
```

Cada documento aporta una pieza distinta:

- **Ubiquitous Language** define el vocabulario (Entities, Processes y States).
- **Domain Model** define las relaciones, transformaciones y ciclos de vida.
- **Interaction Model** establece cómo colaboran los Engines sin acoplarse.
- **Domain Events** formaliza los hechos que permiten comunicar esos cambios entre los distintos dominios.

Esta separación mantiene intacto el principio de **Single Responsibility**: los procesos transforman, los eventos informan que la transformación ocurrió y los estados reflejan la condición actual de la entidad.