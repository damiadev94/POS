# 03. Ubiquitous Language

---

> 
> 
> 
> **Una entidad debe definirse por su** **función dentro del sistema**, no por cómo se implementa ni por ejemplos de uso.
> 

---

## **Conceptos fundamentales**

| Entidad | Definición | Propósito | No es | Relacionados |
| --- | --- | --- | --- | --- |
| **Context** | Entorno lógico que agrupa actividades, responsabilidades y recursos con un propósito común. **Define el marco dentro del cual ocurre el trabajo.** | Separar y organizar diferentes ámbitos de la vida o del trabajo sin mezclar sus elementos. | Una carpeta, un proyecto o una etiqueta. | Workspace, Operation, Project |
| **Workspace** | Entorno operativo donde se reúne y organiza todo lo necesario para ejecutar trabajo dentro de un Context. **Un Workspace es el lugar *donde* *ocurre* el trabajo.** | Centralizar la operación diaria de un contexto específico. | Una aplicación o una base de datos. | Context, Operation, Resource |
| **Operation** | Unidad operativa recurrente que transforma entradas en resultados mediante un proceso definido. **Representa una capacidad permanente del sistema.** | Estandarizar y optimizar trabajo repetitivo, reduciendo decisiones y aumentando la consistencia. | Un proyecto, una tarea aislada o un objetivo. | Task, Process, Deliverable |
| **Task** | Acción concreta, acotada y ejecutable que forma parte de una Operation o Project. **Es la unidad mínima de ejecución.** | Materializar el trabajo mediante acciones específicas y completables. | Un proceso completo, un objetivo o una responsabilidad permanente. | Operation, Project, State |
| **Project** | Iniciativa temporal orientada a alcanzar un resultado único mediante la coordinación de múltiples operaciones, tareas y recursos. **Tiene un inicio y un fin definidos.** | Gestionar trabajos excepcionales o con un objetivo específico que trascienden la operación cotidiana. | Una operación recurrente o un área permanente de responsabilidad. | Operation, Task, Deliverable |
| **Engine** | Capacidad arquitectónica de alto nivel **que agrupa uno o más Bounded Contexts** relacionados. |  |  | Bounded Context |
| **Bounded Context** | **Límite semántico** donde entidades, procesos y reglas mantienen un significado consistente. |  |  | Engine, Component |
| **Component** |  |  |  |  |
| **Pattern** | Representación reutilizable de una capacidad, estrategia o estructura independiente de cualquier herramienta. | Preservar el conocimiento necesario para recrear soluciones sin depender de una implementación específica. | un archivo
una plantilla
un proyecto
una herramienta | Knowledge
Implementation
Asset
Operation |
| **Implementation** | Materialización concreta de un Pattern utilizando una Tool determinada. | Permitir ejecutar un Pattern dentro de una tecnología específica. | el conocimiento reutilizable. | Pattern, Tool, Asset |

## **Conocimiento**

| Entidad | Definición | Propósito | No es | Relacionados |
| --- | --- | --- | --- | --- |
| **Knowledge** | Conocimiento estructurado y validado que puede reutilizarse para **mejorar decisiones, procesos o capacidades.** | Preservar y reutilizar aprendizaje. | Información sin procesar o un recurso aislado. | Resource, Operation, Discipline |
| **Resource** | Cualquier elemento de información o material que sirve como **insumo para ejecutar una operación, proyecto o tarea.** | Proveer soporte al trabajo. | Conocimiento validado o un resultado final. | Knowledge, Task, Operation |
| **Asset** | Recurso con valor permanente que pertenece al sistema y **puede reutilizarse repetidamente.** | Acumular valor reutilizable a largo plazo. | Un archivo temporal o un entregable específico. | Resource, Deliverable |
| **Deliverable** | **Resultado tangible generado por una operación o proyecto** y destinado a un destinatario interno o externo. | Materializar el valor producido. | Un recurso de entrada o una tarea. | Project, Operation, Asset |
| **Idea** | **Posible mejora, solución, oportunidad o iniciativa** que aún no ha sido evaluada ni priorizada. | Capturar potencial sin perder información. | Una tarea o un proyecto aprobado. | Inbox, Project |
| **Inbox** | **Punto de entrada temporal** donde se capturan elementos pendientes de clasificación o procesamiento. | Evitar pérdidas y posponer decisiones hasta el momento adecuado. | Un almacenamiento permanente o un sistema de organización. | Idea, Resource, Process |

<aside>
💡

### Knowledge ≠ Resource

Esta distinción será muy importante.

- **Resource** = insumo para trabajar.
- **Knowledge** = comprensión consolidada que mejora el sistema.

Ejemplo:

- Un artículo → **Resource**.
- Lo aprendido tras estudiarlo → **Knowledge**.

</aside>

<aside>
💡

### Asset ≠ Deliverable

También conviene separarlos desde ahora.

- **Deliverable** tiene un objetivo concreto y normalmente nace para un proyecto u operación.
- **Asset** permanece en el sistema y puede reutilizarse indefinidamente.

Ejemplo:

- Logo entregado a un cliente → **Deliverable**.
- Plantilla de propuesta comercial creada por ti → **Asset**.

Un **Deliverable** puede convertirse en **Asset**, pero no ocurre automáticamente.

</aside>

## Organización (Capacidades y Medios)

| Entidad | Definición | Propósito | No es | Relacionados |
| --- | --- | --- | --- | --- |
| **Discipline** | Área de conocimiento o práctica que agrupa principios, habilidades y métodos para desarrollar una capacidad específica. | Organizar el desarrollo de capacidades y servir como marco para el aprendizaje y la mejora continua. | Un proyecto, una operación o un recurso. | Knowledge, Operation, Resource |
| **Tool** | Medio utilizado para ejecutar, facilitar o automatizar trabajo dentro del sistema. Puede ser físico, digital o basado en IA. | Potenciar la ejecución de operaciones y proyectos sin definir su lógica. | Una operación, un proceso o una capacidad. | Workspace, Operation, Task |

<aside>
💡

Una **Discipline** representa algo que se desarrolla con el tiempo.

Ejemplos:

- Marketing
- Programación
- Diseño
- Finanzas
- Escritura

Las operaciones utilizan disciplinas, pero no las contienen.

</aside>

<aside>
💡

### Tool

Una herramienta es completamente intercambiable.

Hoy puede ser:

- Notion
- ChatGPT
- VS Code
- Google Drive

Mañana puede ser otra.

La arquitectura nunca debe depender de una Tool.

</aside>

## Procesos

> “Los Processes **describen transformacione**s, no acciones de usuario.”
> 

| Proceso | Definición | Entrada | Salida | Entidades relacionadas |
| --- | --- | --- | --- | --- |
| **Capture** | **Incorpora** un nuevo elemento al sistema sin evaluarlo ni organizarlo. | Información externa. | Elemento en Inbox. | Inbox, Idea, Resource |
| **Process** | **Analiza, clasifica y decide** el destino de un elemento capturado. | Elemento en Inbox. | Entidad organizada o descartada. | Inbox, Project, Operation, Resource, Knowledge |
| **Execute** | **Realiza** el trabajo necesario para **completar una Task** o avanzar una Operation o Project. | Task pendiente. | Estado actualizado o Deliverable parcial/final. | Task, Operation, Project, Deliverable |
| **Learn** | **Transforma** información y experiencia en **conocimiento reutilizable**. | Resource, experiencia o Deliverable. | Knowledge. | Resource, Knowledge, Discipline |
| **Build** | Crea o mejora un **activo reutilizable** para el sistema. | Knowledge, Resource o Asset existente. | Asset o Deliverable. | Asset, Deliverable, Knowledge |
| **Deliver** | **Transfiere un Deliverable a su destinatario** previsto, completando su propósito operativo. | Deliverable terminado. | Deliverable entregado. | Deliverable, Project, Operation |
| **Review** | **Evalúa el estado, desempeño o calidad de entidades y procesos** para detectar mejoras o decisiones pendientes. | Cualquier entidad o proceso. | Acciones, cambios o validaciones. | Todas |
| **Archive** | **Retira una entidad del trabajo activo** preservándola para consulta futura. | Entidad inactiva. | Entidad archivada. | Project, Resource, Knowledge, Asset, Deliverable |

### Los procesos son transformaciones

Cada proceso representa un cambio de estado:

```
Capture
Fuera del sistema
        ↓
Inbox
```

```
Process
Inbox
     ↓
Entidad organizada
```

```
Learn
Resource
       ↓
Knowledge
```

El foco no está en la acción, sino en la **transformación del dominio**.

### Se empieza a formar un pipeline natural

Sin haberlo diseñado explícitamente, aparece un flujo bastante coherente:

```
Capture
      ↓
Process
      ↓
┌───────────────┐
│               │
│ Execute       │
│ Learn         │
│ Build         │
└───────────────┘
      ↓
Deliver
      ↓
Review
      ↓
Archive
```

No significa que siempre ocurra en ese orden, pero sí que el dominio ya tiene un ciclo de transformación reconocible.

## Estados (v1.0)

| Estado | Definición | Significado |
| --- | --- | --- |
| **Captured** | La entidad ingresó al sistema pero aún no fue procesada. | Existe, pero espera una decisión. |
| **Processed** | La entidad fue clasificada y ubicada dentro del sistema. | Ya tiene un propósito definido. |
| **Planned** | La entidad fue aprobada para ejecutarse, pero aún no comenzó. | Forma parte del trabajo futuro. |
| **In Progress** | La entidad está siendo trabajada activamente. | Se encuentra en ejecución. |
| **On Hold** | La ejecución fue pausada temporalmente. | Puede reanudarse más adelante. |
| **Completed** | La entidad cumplió su objetivo principal. | Su trabajo operativo terminó. |
| **Archived** | La entidad salió del trabajo activo y se conserva como histórico. | Ya no participa de la operación diaria. |
| **Discarded** | La entidad fue descartada de forma consciente. | No continuará su ciclo de vida. |

### Flujo genérico de estados

```
Captured
     │
     ▼
Processed
     │
     ▼
Planned
     │
     ▼
In Progress
     │
 ┌───┴────┐
 │        │
 ▼        ▼
On Hold  Completed
             │
      ┌──────┴──────┐
      ▼             ▼
 Archived     Discarded*
```

> *Normalmente **Discarded** ocurre antes de **Completed**, pero algunas entidades pueden descartarse en distintas etapas según el dominio.
> 

### Los estados pertenecen a las entidades

Los procesos **no tienen estados**.

Los procesos **provocan** cambios de estado.

Ejemplo:

```
Capture
        ↓
Idea
(No existe)
        ↓
Captured
```

```
Process
        ↓
Idea
Captured
        ↓
Processed
```

```
Execute
        ↓
Task
Planned
        ↓
In Progress
```

Esta separación mantiene una responsabilidad clara:

- **Process** = transformación.
- **State** = condición de la entidad.

### No todas las entidades recorrerán todos los estados

Por ejemplo:

| Entidad | Estados típicos |
| --- | --- |
| **Idea** | Captured → Processed → Planned → Discarded |
| **Task** | Planned → In Progress → Completed |
| **Deliverable** | In Progress → Completed → Delivered *(posible estado específico)* → Archived |
| **Knowledge** | Processed → Archived |

El modelo es **común**, pero cada entidad recorre solo la parte que le corresponde.

```
Entity
   │
(Process)
   │
State Change
```

Es decir:

- Las **Entities** representan lo que existe.
- Los **Processes** representan las transformaciones.
- Los **States** representan la condición actual de una entidad.

Este patrón es simple, extensible y suficientemente expresivo como para sostener el **Domain Model**, el **Information Flow** e incluso una futura arquitectura basada en eventos (*event-driven*) sin necesidad de rediseñar el núcleo conceptual.

Component