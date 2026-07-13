# 6.5 Process Flows

---

Los **Process Flows** describen el comportamiento de los procesos que transforman las entidades dentro del Personal Operating System.

Mientras los **Entity Flows** muestran cómo evoluciona una entidad específica, los **Process Flows** describen qué ocurre cuando un proceso es ejecutado, cuáles son sus entradas y salidas, qué entidades transforma y qué Engines participan en dicha transformación.

Cada proceso representa una responsabilidad claramente definida dentro del dominio y constituye el mecanismo mediante el cual las entidades evolucionan a lo largo de su ciclo de vida.

---

## Una estructura uniforme

Al igual que hicimos con las entidades, haría una ficha para cada proceso.

```
Proceso

1. Propósito

2. Objetivo

3. Entradas

4. Transformaciones

5. Salidas

6. Estados afectados

7. Engine responsable

8. Colaboración con otros Engines

9. Diagrama

10. Observaciones arquitectónicas
```

La ventaja es que todos los procesos quedan documentados exactamente igual.

---

# 6.5.1 Capture Flow

## Proceso

Capture

---

## Propósito

Incorporar un nuevo elemento al sistema sin clasificarlo ni tomar decisiones sobre su destino.

---

## Objetivo

Separar el acto de capturar del acto de organizar.

---

## Entradas

- Información externa
- Ideas
- Recursos
- Eventos
- Observaciones

---

## Transformaciones

```
Información externa
        │
        ▼
Capture
        │
        ▼
Inbox
```

---

## Salidas

- Inbox Item

---

## Estados afectados

```
No existe

↓

Captured
```

---

## Engine responsable

Knowledge Engine

(Component: Capture)

---

## Colaboración

Operations Engine

(recibe posteriormente el elemento procesado)

---

## Observaciones

Capture nunca clasifica.

Solo incorpora.

---

# 6.5.2 Process Flow

Este probablemente sea el proceso más importante.

---

## Propósito

Analizar una entidad capturada y decidir su destino dentro del sistema.

---

## Entradas

- Inbox

---

## Transformaciones

```
Inbox
    │
    ▼
Process
    │
 ┌────┼───────────────┬────────────┬────────────┐
 ▼    ▼               ▼            ▼
Idea Task        Project      Resource
```

---

## Salidas

- Idea
- Task
- Project
- Operation
- Resource
- Discard

---

## Estados afectados

```
Captured

↓

Processed
```

---

## Engine

Operations Engine

Planning Component

---

## Observación

Este proceso constituye la puerta de entrada al dominio organizado.

---

# 6.5.3 Execute Flow

## Propósito

Materializar trabajo mediante la ejecución de Tasks pertenecientes a Projects u Operations.

---

## Entradas

- Task

---

## Transformaciones

```
Task

↓

Execute

↓

Deliverable
```

---

## Salidas

- Deliverable
- Estado actualizado

---

## Estados

```
Planned

↓

In Progress

↓

Completed
```

---

## Engine

Operations Engine

Execution Component

---

# 6.5.4 Learn Flow

Este proceso es el que diferencia al POS de un gestor de tareas.

---

## Propósito

Transformar experiencia o información en conocimiento reutilizable.

---

## Entradas

- Resource
- Deliverable
- Experiencia

---

## Transformaciones

```
Resource

↓

Learn

↓

Knowledge
```

---

## Salidas

- Knowledge

---

## Estados

Knowledge

Created

↓

Applied

↓

Improved

---

## Engine

Knowledge Engine

Evolution Component

---

# 6.5.5 Build Flow

## Propósito

Construir activos reutilizables.

---

## Entradas

- Knowledge
- Resource
- Asset existente

---

## Transformaciones

```
Knowledge

↓

Build

↓

Asset
```

---

## Salidas

- Asset
- Deliverable

---

## Engine

Growth Engine

Asset Management

---

# 6.5.6 Deliver Flow

## Propósito

Transferir un Deliverable a su destinatario.

---

## Flujo

```
Deliverable

↓

Deliver

↓

Delivered
```

---

## Salidas

- Deliverable entregado

---

## Engine

Operations Engine

---

# 6.5.7 Review Flow

## Propósito

Evaluar resultados para detectar mejoras.

---

## Entradas

Puede recibir prácticamente cualquier entidad.

- Deliverable
- Project
- Operation
- Asset
- Knowledge

---

## Transformaciones

```
Entidad

↓

Review

↓

Decisión
```

---

## Posibles resultados

- Nueva Idea
- Asset
- Knowledge
- Mejora
- Archive

---

## Engine

Operations Engine

Review Component

con colaboración del

Growth Engine

---

# 6.5.8 Archive Flow

## Propósito

Retirar una entidad del trabajo activo preservando su historial.

---

## Entradas

Cualquier entidad archivable.

---

## Transformaciones

```
Entidad

↓

Archive

↓

Archived
```

---

## Salidas

Entidad archivada.

---

## Engine

Operations Engine

Archive Component

---

# Resumen de procesos

| Proceso | Transforma | Produce |
| --- | --- | --- |
| Capture | Información externa | Inbox |
| Process | Inbox | Entidades organizadas |
| Execute | Task | Deliverable |
| Learn | Resource | Knowledge |
| Build | Knowledge | Asset |
| Deliver | Deliverable | Resultado entregado |
| Review | Cualquier entidad | Decisiones y mejoras |
| Archive | Entidad activa | Historial |

---

# Observación arquitectónica

Durante esta sección aparece un patrón interesante: **todos los procesos del POS pueden clasificarse según el tipo de transformación que realizan**, lo que ayuda a entender su papel dentro del sistema.

- **Capture** incorpora información al dominio.
- **Process** organiza y clasifica entidades.
- **Execute** produce resultados mediante trabajo operativo.
- **Learn** genera conocimiento a partir de la experiencia.
- **Build** consolida valor reutilizable.
- **Deliver** transfiere resultados al destinatario.
- **Review** evalúa y decide la evolución del sistema.
- **Archive** preserva el historial sin eliminar información.

Esta clasificación revela que los procesos no tienen el mismo propósito ni el mismo alcance. Cada uno representa una **capacidad especializada** del dominio y, en conjunto, constituyen el mecanismo mediante el cual el POS transforma información, trabajo y experiencia en capacidades permanentes. Esta especialización también mantiene una clara alineación con las responsabilidades distribuidas entre los distintos Engines definidas en la **System Architecture**.