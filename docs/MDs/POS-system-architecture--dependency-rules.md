# 9. Dependency Rules

---

## Objetivo

Definir las reglas que gobiernan las dependencias entre los elementos arquitectónicos del Personal Operating System.

Su propósito es:

- preservar la independencia de los Engines;
- minimizar el acoplamiento;
- evitar dependencias cíclicas;
- garantizar que la arquitectura pueda evolucionar sin perder coherencia.

Las Dependency Rules describen **qué dependencias están permitidas y cuáles están prohibidas**.

---

# Principios

## DR-001 — Dependencias explícitas

Toda dependencia debe estar claramente definida.

Nunca implícita.

---

## DR-002 — Dependencias mínimas

Cada elemento depende únicamente de aquello que necesita.

No más.

---

## DR-003 — Sin ciclos

No pueden existir dependencias circulares.

✔

```
A → B → C
```

✘

```
A → B → C
↑       │
└───────┘
```

---

## DR-004 — Ownership preservado

Una dependencia nunca transfiere la responsabilidad del dominio.

Cada Engine sigue siendo dueño de sus entidades.

---

## DR-005 — Independencia tecnológica

Las dependencias existen únicamente entre conceptos del dominio.

Nunca entre herramientas.

---

# Niveles arquitectónicos

```
Foundation

↓

Domain

↓

Architecture

↓

Implementation
```

La dirección válida siempre apunta hacia abajo.

Nunca al revés.

---

# Dependencias entre Engines

## Operations Engine

Puede depender de:

✔ Knowledge

✔ Growth

✔ System

No puede depender de Components internos de otro Engine.

---

## Knowledge Engine

Puede depender de:

✔ Growth

✔ System

No depende de Operations.

El conocimiento existe independientemente del trabajo operativo.

---

## Growth Engine

Puede depender de:

✔ Knowledge

✔ System

Nunca depende de la estructura operativa.

---

## System Engine

No depende de ningún Engine.

Es el nivel superior de gobernanza.

```
             System
           /    |    \
          /     |     \
Knowledge Growth Operations
```

---

# Matriz de dependencias

| Desde | Operations | Knowledge | Growth | System |
| --- | --- | --- | --- | --- |
| Operations | ✓ | ✓ | ✓ | ✓ |
| Knowledge | ✗ | ✓ | ✓ | ✓ |
| Growth | ✗ | ✓ | ✓ | ✓ |
| System | ✗ | ✗ | ✗ | ✓ |

**Interpretación:**

Una fila indica de quién puede depender ese Engine.

Ejemplo:

Knowledge

```
Knowledge

↓

Growth
```

es válido.

En cambio:

```
Knowledge

↓

Operations
```

no.

---

# Dependencias entre Components

Los Components únicamente pueden colaborar con Components del mismo Engine.

```
Planning

↓

Execution

↓

Review
```

Nunca:

```
Planning

↓

Capture
```

Porque Capture pertenece al Knowledge Engine.

---

# Dependencias entre entidades

Las entidades operativas pueden utilizar entidades compartidas.

```
Operation

↓

Knowledge
```

```
Task

↓

Resource
```

```
Project

↓

Asset
```

Pero nunca poseen esas entidades.

Esto preserva el ownership definido en el Domain Model.

---

# Dependencias entre procesos

Los procesos son independientes.

Un Process nunca ejecuta otro Process.

Ejemplo

```
Capture

↓

Process
```

No:

```
Capture

↓

Learn
```

Cada uno transforma el dominio dentro de su propia responsabilidad.

---

# Dependencias mediante eventos

La comunicación entre Engines debe realizarse preferentemente mediante Domain Events.

```
Operations

↓

DeliverableCompleted

↓

Growth
```

No mediante acceso directo.

---

# Dependencias permitidas

## Consume conocimiento

```
Operation

↓

Knowledge
```

---

## Utilizar recursos

```
Task

↓

Resource
```

---

## Reutilizar activos

```
Project

↓

Asset
```

---

## Aplicar gobernanza

```
Todos

↓

System
```

---

# Dependencias prohibidas

## Knowledge modifica Tasks

✘

El Knowledge Engine nunca administra trabajo.

---

## Growth ejecuta Operations

✘

Growth desarrolla capacidades.

No ejecuta trabajo.

---

## Operations modifica Knowledge

✘

Solo puede consumirlo.

---

## Components cruzando Engines

✘

```
Planning

↓

Validation
```

---

## Una Tool define el dominio

✘

```
Notion

↓

Architecture
```

La relación correcta es:

```
Architecture

↓

Notion
```

La implementación depende de la arquitectura, nunca al revés. Esto mantiene el principio **Tool Agnostic** definido en Foundation.

---

# Jerarquía de dependencias

```
Foundation
        │
        ▼
Ubiquitous Language
        │
        ▼
Domain Model
        │
        ▼
System Architecture
        │
        ▼
Information Flow
        │
        ▼
Conceptual Data Model
        │
        ▼
Implementation
```

Cada documento puede utilizar los conceptos definidos por los anteriores.

Nunca redefine niveles superiores.

---

# Reglas generales

Toda dependencia debe cumplir:

- ser explícita;
- tener un único propósito;
- preservar el ownership;
- evitar ciclos;
- minimizar el acoplamiento;
- mantener independencia tecnológica;
- poder eliminarse sin romper el dominio.

---

# Observación arquitectónica

Hasta este punto, la arquitectura del POS queda definida desde cinco perspectivas complementarias:

| Documento | Define |
| --- | --- |
| Engines | Capacidades principales |
| Components | Responsabilidades internas |
| Interaction Model | Cómo colaboran |
| Domain Events | Qué hechos comunican |
| Dependency Rules | Qué dependencias están permitidas |

Esto crea una separación muy similar a la utilizada en arquitecturas maduras (DDD + Clean Architecture): **interacción** y **dependencia** dejan de ser el mismo concepto.

Dos Engines pueden interactuar sin depender estructuralmente uno del otro. Por ejemplo, *Operations* puede publicar un `DeliverableCompleted` y *Growth* reaccionar a ese evento, sin que ninguno conozca la implementación interna del otro. Esa diferencia es la que mantiene el sistema desacoplado y preparado para evolucionar.