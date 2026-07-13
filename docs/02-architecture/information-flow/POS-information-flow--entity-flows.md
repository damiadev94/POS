# 6.4 Entity Flows

---

Los **Entity Flows** describen el recorrido que realiza cada entidad a lo largo de su ciclo de vida dentro del Personal Operating System.

Cada flujo representa la evolución de una entidad desde su origen hasta los posibles resultados de su transformación, identificando los procesos involucrados, los cambios de estado y las entidades que pueden generarse durante dicho recorrido.

El objetivo de esta sección no es describir los procesos en sí mismos, sino comprender cómo evoluciona cada entidad dentro del dominio y cómo contribuye a la generación de valor del sistema.

---

# 6.4.1 Inbox Flow

El Inbox representa el punto de entrada único para cualquier elemento que ingresa al sistema.

Su función es desacoplar la captura del procesamiento, permitiendo registrar información sin necesidad de tomar decisiones inmediatas.

## Flujo

```
Información externa
        │
        ▼
     Capture
        │
        ▼
      Inbox
        │
     Process
        │
 ┌──────┼──────────────┬───────────────┬──────────────┬─────────────┐
 ▼      ▼              ▼               ▼              ▼
Idea   Task        Project       Operation      Resource
                                                │
                                                ▼
                                           Discard
```

## Transformaciones posibles

| Desde | Proceso | Hacia |
| --- | --- | --- |
| Información externa | Capture | Inbox |
| Inbox | Process | Idea |
| Inbox | Process | Task |
| Inbox | Process | Project |
| Inbox | Process | Operation |
| Inbox | Process | Resource |
| Inbox | Process | Discard |

## Estados

```
Captured
      │
      ▼
Processed
```

Una vez procesado, el elemento deja de pertenecer al Inbox.

---

# 6.4.2 Idea Flow

Una Idea representa una posibilidad.

Todavía no existe un compromiso de ejecución.

## Flujo

```
Idea
 │
 ▼
Review / Process
 │
 ├──────────────┐
 ▼              ▼
Task         Project
 │              │
 ▼              ▼
Execute     Execute
```

También puede ocurrir:

```
Idea

↓

Operation
```

si representa trabajo recurrente.

O

```
Idea

↓

Discard
```

si se determina que no aporta valor.

## Transformaciones

| Desde | Proceso | Hacia |
| --- | --- | --- |
| Idea | Process | Task |
| Idea | Process | Project |
| Idea | Process | Operation |
| Idea | Process | Discard |

---

# 6.4.3 Resource Flow

El Resource representa un insumo para trabajar.

Todavía no constituye conocimiento.

## Flujo

```
Resource
    │
    ├──────────────► Used
    │
    ▼
Learn
    │
    ▼
Knowledge
```

Un Resource puede reutilizarse múltiples veces antes de convertirse en Knowledge, manteniendo su identidad. Esto coincide con las invariantes del Domain Model sobre reutilización y construcción del conocimiento.

---

# 6.4.4 Knowledge Flow

El Knowledge representa aprendizaje consolidado.

No tiene un final esperado.

## Flujo

```
Knowledge
     │
     ▼
Apply
     │
     ▼
Improve
     │
     ▼
Knowledge
```

Cuando es necesario:

```
Knowledge

↓

Build

↓

Asset
```

Es un flujo evolutivo.

Nunca uno lineal.

---

# 6.4.5 Project Flow

Los proyectos representan trabajo temporal.

## Flujo

```
Project
     │
     ▼
Planning
     │
     ▼
Tasks
     │
     ▼
Execute
     │
     ▼
Deliverables
     │
     ▼
Completed
```

Después:

```
Deliverable

↓

Asset
```

o

```
Archive
```

---

# 6.4.6 Operation Flow

Las Operations representan capacidades permanentes.

Su flujo nunca termina.

```
Operation
     │
     ▼
Execute
     │
     ▼
Deliverable
     │
     ▼
Review
     │
     ▼
Improve
     │
     └──────────────┐
                    │
                    ▼
               Operation
```

Es un ciclo de mejora continua.

---

# 6.4.7 Task Flow

Las tareas son la unidad mínima de ejecución.

```
Planned

↓

In Progress

↓

Completed

↓

Archived
```

Puede existir:

```
On Hold
```

en cualquier momento antes de Completed.

---

# 6.4.8 Deliverable Flow

El Deliverable representa el resultado producido.

```
Execute

↓

Deliverable

↓

Deliver

↓

Review

↓

┌──────────────┐
▼              ▼
Asset      Archive
```

No todos los Deliverables se convierten en Assets.

Solo aquellos con valor reutilizable.

---

# 6.4.9 Asset Flow

El Asset representa valor acumulado.

No está diseñado para finalizar.

```
Asset

↓

Use

↓

Improve

↓

Reuse

↓

Asset
```

Solo se archiva cuando deja de aportar valor.

---

# Resumen de los Entity Flows

| Entidad | Naturaleza | Resultado esperado |
| --- | --- | --- |
| Inbox | Transitoria | Clasificación |
| Idea | Transitoria | Decisión |
| Resource | Compartida | Conocimiento |
| Knowledge | Persistente | Mejora continua |
| Project | Finita | Deliverable |
| Operation | Persistente | Capacidades |
| Task | Finita | Ejecución |
| Deliverable | Finita | Entrega o Asset |
| Asset | Persistente | Reutilización |

---

### Ficha descriptiva con naturaleza de cada entidad

<aside>
💡

**Entidad**

1. **Descripción**
Qué representa dentro del dominio.
2. **Propósito**
Para qué existe.
3. **Origen**
Desde dónde puede crearse.
4. **Entradas**
Qué entidades puede recibir.
5. **Transformaciones**
Qué procesos pueden modificarla.
6. **Salidas**
En qué entidades puede convertirse.
7. **Estados**
Qué estados puede recorrer.
8. **Engines involucrados**
Qué Engine administra la entidad y cuáles participan en su evolución.
9. **Diagrama del flujo**
10. **Observaciones arquitectónicas**
</aside>