# 3. Core Engines

---

# Arquitectura General

```
 Personal Operating System
│
├── Capture Engine
│
├── Operations Engine
│
├── Knowledge Engine
│
└── System Engine
```

Cada Engine representa una dimensión distinta del sistema.

Un **Engine** es una unidad arquitectónica de alto nivel que encapsula una responsabilidad principal del dominio.

Cada Engine representa una capacidad arquitectónica de alto nivel del Personal Operating System.

Su responsabilidad consiste en agrupar uno o más Bounded Contexts relacionados bajo una misma capacidad del sistema.

Los Engines no implementan reglas de negocio ni gestionan entidades directamente; esas responsabilidades pertenecen a los Bounded Contexts.

---

# 1. Operations Engine

## Propósito

Gestionar las capacidades relacionadas con el trabajo operativo.

### Pregunta fundamental

> **¿Qué trabajo debe realizarse?**
> 

### Bounded Contexts

- Operations Context

# 2. Knowledge Engine

## Propósito

Gestionar el conocimiento y los activos intelectuales del sistema.

### Pregunta fundamental

> **¿Qué conocimiento posee el sistema y cómo puede reutilizarse?**
> 

### Bounded Contexts

- Knowledge Context
- Asset Context

# 3. Capture Engine

## Propósito

Incorporar información al Personal Operating System.

Representa el punto de entrada de cualquier información, idea, recurso o evento antes de integrarse al dominio.

### Pregunta fundamental

> **¿Qué acaba de ingresar al sistema?**
> 

### Bounded Contexts

- Capture Context

# 4. System Engine

## Propósito

Mantener la integridad, coherencia y evolución del Personal Operating System.

No participa directamente en el trabajo operativo.

Su función es gobernar el funcionamiento del sistema.

### Pregunta fundamental

> **¿Cómo se mantiene y evoluciona el sistema?**
> 

### Responsabilidades

- Agrupar las capacidades necesarias para mantener la integridad del propio POS.

### Bounded Context

- System Context

# Colaboración entre Engines

Los Engines colaboran mediante el intercambio de resultados, no mediante el acceso directo a sus responsabilidades.

```
Capture
      │
      ▼
Operations
      │
      ▼
Knowledge
      │
      ▼
Assets
```

Cada Engine consume los resultados producidos por otros Engines cuando corresponde, preservando siempre la separación de responsabilidades.

# Principios

Los Core Engines deben cumplir las siguientes reglas:

- Cada Engine posee una única responsabilidad principal.
- Ningún Engine reemplaza las responsabilidades de otro.
- Los Engines evolucionan de forma independiente.
- Las interacciones son explícitas.
- Los límites son estables.
- La incorporación de nuevos Engines debe justificarse mediante una necesidad del dominio.

# Ownership

| Engine | Responsable de |
| --- | --- |
| Operations | Operations Context |
| Knowledge | Knowledge Context, Asset Context |
| Capture | Capture Context |
| System | System Context |

Una entidad pertenece a un único Engine.

No existe ownership compartido.

---

---

# Estado

**Versión:** v0.1

**Estado:** Hipótesis arquitectónica

**Próximo documento:** **05.4 Components**