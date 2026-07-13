# 6.3 Flow Levels

---

El Information Flow puede analizarse desde distintos niveles de abstracción. Cada nivel describe un aspecto diferente del comportamiento del dominio y complementa a los demás, permitiendo comprender cómo evolucionan las entidades, cómo colaboran los procesos y cómo el sistema genera valor de manera integral.

Ningún nivel reemplaza a otro; cada uno responde una pregunta específica sobre el funcionamiento del POS.

---

## Nivel 1 — Entity Flow

Describe el recorrido que realiza una entidad a lo largo de su ciclo de vida.

Su objetivo es mostrar cómo una entidad cambia de estado, atraviesa distintos procesos y puede transformarse en otras entidades.

**Pregunta que responde**

> ¿Cómo evoluciona una entidad dentro del sistema?
> 

**Ejemplos**

- Idea → Project
- Resource → Knowledge
- Deliverable → Asset

Este nivel centra la atención en la evolución individual de las entidades.

---

## Nivel 2 — Process Flow

Describe cómo se encadenan los procesos del dominio para producir transformaciones.

El foco ya no está en una entidad concreta, sino en la secuencia de procesos que intervienen durante la evolución del sistema.

**Pregunta que responde**

> ¿Qué procesos participan en una transformación?
> 

**Ejemplos**

```
Capture
    ↓
Process
    ↓
Execute
    ↓
Review
    ↓
Archive
```

Este nivel permite comprender el comportamiento operativo del dominio independientemente de las entidades involucradas.

---

## Nivel 3 — Cross-Engine Flow

Describe cómo colaboran los distintos Engines mediante el intercambio y la transformación de entidades.

Cada Engine mantiene responsabilidades claramente definidas, pero el valor generado por el sistema surge de la colaboración entre ellos.

**Pregunta que responde**

> ¿Cómo colaboran los Engines para generar valor?
> 

**Ejemplo conceptual**

```
Operations Engine
        │
Deliverable
        ▼
Knowledge Engine
        │
Knowledge
        ▼
Growth Engine
        │
Asset
```

Este nivel muestra el comportamiento global del sistema y las relaciones entre sus capacidades principales. Está alineado con la separación de responsabilidades definida en la System Architecture.

---

## Nivel 4 — Transformation Pipeline

Describe el recorrido completo mediante el cual una o varias entidades evolucionan desde un estado inicial hasta la generación de valor reutilizable.

No se limita a una entidad ni a un proceso específico; representa cadenas completas de transformación dentro del dominio.

**Pregunta que responde**

> ¿Cómo se genera valor dentro del sistema?
> 

**Ejemplo**

```
Información Externa
        │
Capture
        ▼
Inbox
        │
Process
        ▼
Resource
        │
Learn
        ▼
Knowledge
        │
Build
        ▼
Asset
```

Este nivel integra entidades, procesos y Engines para representar la evolución completa de una capacidad dentro del POS.

---

# Relación entre los niveles

Los cuatro niveles describen el mismo sistema desde perspectivas diferentes.

```
Transformation Pipeline
        │
        ├─────────────────────────────────────────────┐
        │                                             │
        ▼                                             ▼
Cross-Engine Flow                            Process Flow
        │                                             │
        └──────────────────────┬──────────────────────┘
                               │
                               ▼
                        Entity Flow
```

- **Entity Flow** muestra **qué evoluciona**.
- **Process Flow** muestra **cómo evoluciona**.
- **Cross-Engine Flow** muestra **dónde evoluciona**.
- **Transformation Pipeline** muestra **por qué esa evolución genera valor**.

Los cuatro niveles son complementarios y, juntos, ofrecen una visión completa del comportamiento dinámico del Personal Operating System.

---

## Observación arquitectónica

Durante el diseño de esta clasificación apareció una separación interesante entre los conceptos utilizados hasta ahora.

- El **Domain Model** describe la **estructura** del dominio.
- La **System Architecture** describe la **organización** del dominio.
- El **Information Flow** describe el **comportamiento** del dominio.

Dentro de este comportamiento, los distintos niveles permiten observar una misma realidad desde diferentes escalas: una entidad individual, una secuencia de procesos, la colaboración entre Engines o una cadena completa de generación de valor.

Esta separación evita mezclar responsabilidades y facilita que el sistema pueda analizarse, evolucionar e implementarse sin perder coherencia conceptual.