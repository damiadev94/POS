# 7. Interaction Model

---

## Objetivo

Definir cómo interactúan los Engines del Personal Operating System sin violar sus responsabilidades ni generar acoplamiento innecesario.

El Interaction Model describe:

- qué Engine inicia una interacción;
- qué información intercambia;
- qué Engine responde;
- qué límites arquitectónicos deben respetarse.

No describe procesos internos ni implementación técnica.

---

# Principios

## IM-001 — Los Engines no comparten responsabilidad

Cada Engine conserva el ownership de su dominio.

Nunca modifica directamente el estado interno de otro Engine.

---

## IM-002 — Toda interacción tiene un propósito

Una interacción existe únicamente cuando un Engine necesita una capacidad perteneciente a otro.

Nunca para compartir implementación.

---

## IM-003 — Los datos cruzan límites; la lógica no

Un Engine puede consumir información proveniente de otro.

Nunca ejecuta lógica perteneciente al otro Engine.

---

## IM-004 — Bajo acoplamiento

Toda dependencia debe ser:

- explícita
- mínima
- reemplazable

---

# Modelo General

```
                   +----------------------+
                   |    System Engine     |
                   |----------------------|
                   | Governance           |
                   | Configuration        |
                   | Monitoring           |
                   +----------+-----------+
                              |
                              |
         --------------------------------------------
         |                  |                       |
         ▼                  ▼                       ▼

+----------------+   +----------------+   +----------------+
| Operations     |   | Knowledge      |   | Growth         |
| Engine         |   | Engine         |   | Engine         |
+----------------+   +----------------+   +----------------+
```

El **System Engine** no participa del trabajo operativo.

Coordina y gobierna el funcionamiento del sistema.

---

# Interacciones principales

## Operations → Knowledge

### Motivo

Necesita conocimiento para ejecutar trabajo.

Ejemplos

```
Operation
      │
      ▼
Solicita Knowledge

Knowledge Engine
      │
      ▼
Entrega Resource
Entrega Knowledge
Entrega Asset
```

Nunca:

- reorganiza Knowledge
- valida Knowledge
- modifica Assets

Eso pertenece al Knowledge Engine.

---

## Operations → Growth

Después de ejecutar trabajo aparecen oportunidades de mejora.

```
Deliverable
      │
      ▼
Review
      │
      ▼
Growth Engine
```

Growth decide si:

- aparece una Capability
- aparece un Asset
- aparece una mejora

Operations nunca crea capacidades directamente.

---

## Knowledge → Growth

Cuando el conocimiento madura.

```
Knowledge

↓

Capability

↓

Asset
```

Ejemplo

```
Tutorial
↓

Knowledge

↓

Template

↓

Reusable Asset
```

---

## Growth → Knowledge

También existe la interacción inversa.

Cuando una Capability cambia:

```
Capability

↓

Actualizar documentación

↓

Nuevo Knowledge
```

---

## Todos → System

Todos utilizan servicios del System Engine.

```
Operations

Knowledge

Growth

        │
        ▼

System Engine
```

Servicios:

- Governance
- Configuration
- Monitoring
- Documentation
- Architecture

---

# Interacciones prohibidas

El modelo también define lo que **no puede ocurrir**.

## Operations modifica Knowledge

❌

```
Operations

↓

Edita Knowledge
```

Debe solicitarlo mediante el Knowledge Engine.

---

## Growth ejecuta Tasks

❌

El Growth Engine desarrolla capacidades.

No ejecuta trabajo operativo.

---

## Knowledge planifica trabajo

❌

El Knowledge Engine organiza conocimiento.

No administra proyectos.

---

## System ejecuta procesos del dominio

❌

El System Engine gobierna.

Nunca realiza trabajo.

---

# Interfaces conceptuales

Cada interacción ocurre mediante una interfaz conceptual.

| Engine | Expone |
| --- | --- |
| Operations | Deliverables, Results, Metrics |
| Knowledge | Knowledge, Resources, Assets |
| Growth | Capabilities, Improvements |
| System | Policies, Configuration, Monitoring |

Los Engines nunca acceden directamente a la estructura interna de otro.

---

# Tipos de interacción

No todas las colaboraciones tienen la misma naturaleza.

| Tipo | Ejemplo |
| --- | --- |
| Request | Obtener Knowledge |
| Publish | Generar Deliverable |
| Consume | Utilizar Asset |
| Notify | Informar Review |
| Govern | Aplicar Policy |

Esto prepara el terreno para una posible arquitectura orientada a eventos, sin imponerla desde ahora.

---

# Diagrama de interacción

```
                    +----------------------+
                    |    System Engine     |
                    +----------+-----------+
                               ^
                               |
      -------------------------+-------------------------
      |                        |                        |
      |                        |                        |
      ▼                        ▼                        ▼

+--------------+      <----->      +--------------+
| Operations   |------------------>| Knowledge    |
| Engine       |                   | Engine       |
+------+-------+                   +------+-------+
       |                                  |
       |                                  |
       |                                  |
       +--------------->------------------+
                       |
                       ▼
               +---------------+
               | Growth Engine |
               +---------------+
```

Leyenda

- ↔ intercambio de conocimiento
- → generación de capacidades
- ↑ gobernanza

---

# Reglas

Toda interacción debe cumplir:

- un único propósito;
- respetar los límites del Engine;
- preservar el ownership del dominio;
- evitar dependencias cíclicas;
- ser independiente de cualquier herramienta;
- poder reemplazarse sin modificar la arquitectura.

---

# Observación arquitectónica

Este documento introduce un cambio importante respecto al documento de **Components**. Allí se definió que los Components colaboran únicamente dentro de su Engine y que la colaboración entre Engines ocurre a través de sus límites arquitectónicos. El Interaction Model formaliza precisamente esos cruces de frontera, estableciendo que las colaboraciones son entre **Engines** mediante interfaces conceptuales, no entre Components individuales.

Además, el patrón de interacción es coherente con el Domain Model: el trabajo operativo genera resultados, el conocimiento los enriquece y el Growth Engine transforma esos resultados en capacidades y activos persistentes. Así se preserva la tesis central del POS: **el sistema organiza la evolución del trabajo y del conocimiento**, no simplemente su almacenamiento.

---

# Estado

**Versión:** v0.1

**Estado:** Hipótesis arquitectónica

**Próximo documento:** **05.8 Domain Events**

Los *Domain Events* serán el siguiente paso lógico, porque permitirán describir **qué eventos producen esas interacciones** (por ejemplo: `InboxItemCaptured`, `KnowledgeCreated`, `DeliverableCompleted`, `AssetBuilt`), separando definitivamente la arquitectura conceptual de cualquier implementación (REST, mensajería, eventos, etc.).