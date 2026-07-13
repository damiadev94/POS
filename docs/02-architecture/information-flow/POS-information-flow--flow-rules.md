# 6.8 Flow Rules

---

Las **Flow Rules** definen las reglas que gobiernan el comportamiento de los flujos dentro del Personal Operating System.

Mientras las **Domain Invariants** establecen las restricciones estructurales del dominio, las Flow Rules garantizan que las entidades evolucionen de forma consistente, preservando la trazabilidad, la responsabilidad de los Engines y la integridad de las transformaciones.

Toda implementación del POS debe respetar estas reglas independientemente de la tecnología o herramienta utilizada.

---

# 6.8.1 Inicio del flujo

## FR-001 — Todo flujo debe tener un origen identificable

Toda entidad debe incorporarse al sistema mediante un punto de entrada claramente definido.

Ninguna entidad puede aparecer sin un origen conocido.

**Justificación**

Garantiza la trazabilidad desde el inicio del ciclo de vida.

---

## FR-002 — Toda captura comienza mediante Capture

Todo elemento externo debe incorporarse utilizando el proceso **Capture** antes de cualquier transformación posterior.

No pueden existir accesos directos al dominio operativo.

**Justificación**

Mantiene un único punto de entrada al sistema.

---

# 6.8.2 Transformación

## FR-003 — Toda transformación requiere un Process

Las entidades solo pueden cambiar de estado, propósito o naturaleza mediante un proceso explícito del dominio.

No existen transformaciones implícitas.

**Justificación**

Preserva la claridad del comportamiento del sistema.

---

## FR-004 — Los procesos nunca modifican múltiples responsabilidades

Cada proceso realiza una única transformación claramente definida.

Si una transformación requiere múltiples responsabilidades, debe dividirse en varios procesos encadenados.

**Justificación**

Mantiene el principio de responsabilidad única aplicado al comportamiento.

---

## FR-005 — Las transformaciones preservan la identidad cuando corresponde

Cuando una entidad evoluciona sin cambiar su naturaleza (por ejemplo, una **Task** pasando de *Planned* a *Completed*), conserva su identidad.

Cuando la transformación genera una nueva entidad (por ejemplo, un **Resource** que origina **Knowledge**), la relación entre ambas debe mantenerse mediante trazabilidad.

**Justificación**

Distingue claramente entre evolución y creación de nuevas entidades.

---

# 6.8.3 Colaboración entre Engines

## FR-006 — Cada Engine transforma únicamente las entidades bajo su responsabilidad

Los Engines colaboran entre sí, pero ninguno ejecuta transformaciones propias de otro.

**Justificación**

Mantiene el bajo acoplamiento definido en la arquitectura.

---

## FR-007 — Los Cross-Engine Flows preservan la responsabilidad

Cuando una entidad atraviesa varios Engines, cada uno únicamente aplica las transformaciones que le corresponden.

El cambio de Engine no implica pérdida de identidad ni de trazabilidad.

**Justificación**

Permite la evolución del dominio sin romper los límites arquitectónicos.

---

# 6.8.4 Estados

## FR-008 — Los estados reflejan el resultado de una transformación

Los estados describen la condición actual de una entidad.

Nunca representan un proceso.

**Justificación**

Separa claramente comportamiento y estado del dominio.

---

## FR-009 — Ninguna entidad puede omitir estados obligatorios

Cada entidad debe recorrer únicamente las transiciones permitidas por su ciclo de vida.

Las transiciones inválidas no forman parte del dominio.

**Justificación**

Garantiza la consistencia de los Lifecycle definidos en el Domain Model.

---

# 6.8.5 Trazabilidad

## FR-010 — Toda transformación conserva su historial

Debe ser posible reconstruir la secuencia completa de transformaciones recorridas por una entidad.

**Justificación**

Facilita auditoría, aprendizaje y evolución del sistema.

---

## FR-011 — Ningún resultado pierde su origen

Todo Deliverable, Knowledge o Asset debe poder relacionarse con las entidades y procesos que lo originaron.

**Justificación**

El valor del POS es acumulativo.

---

# 6.8.6 Generación de valor

## FR-012 — Todo flujo debe incrementar o preservar valor

Cada transformación debe producir alguno de los siguientes resultados:

- mejor comprensión;
- mejor ejecución;
- mejor reutilización;
- mejor capacidad.

Si una transformación no aporta valor al sistema, probablemente no deba existir.

**Justificación**

Refuerza el principio **Transformation over Collection** definido en Foundation.

---

## FR-013 — El conocimiento debe retroalimentar el sistema

El Knowledge y los Assets generados deben poder reutilizarse para mejorar futuras Operations, Projects o decisiones.

El aprendizaje aislado no cumple el propósito del POS.

**Justificación**

Convierte el sistema en un mecanismo de mejora continua.

---

# Resumen

| ID | Regla |
| --- | --- |
| FR-001 | Todo flujo tiene un origen identificable. |
| FR-002 | Toda captura comienza mediante Capture. |
| FR-003 | Toda transformación requiere un Process. |
| FR-004 | Cada proceso tiene una única responsabilidad. |
| FR-005 | Las transformaciones preservan identidad o trazabilidad. |
| FR-006 | Cada Engine transforma solo lo que le corresponde. |
| FR-007 | Los Cross-Engine Flows preservan responsabilidades. |
| FR-008 | Los estados representan condiciones, no procesos. |
| FR-009 | Las entidades respetan su Lifecycle. |
| FR-010 | Toda transformación conserva su historial. |
| FR-011 | Ningún resultado pierde su origen. |
| FR-012 | Todo flujo genera o preserva valor. |
| FR-013 | El conocimiento debe retroalimentar el sistema. |

---

# Observación arquitectónica

Durante la definición de estas reglas apareció una distinción interesante entre **estructura**, **comportamiento** y **valor** dentro del POS.

- Las **Domain Invariants** protegen la estructura del dominio.
- Las **Flow Rules** protegen el comportamiento del dominio.
- Los **Core Principles** expresan la filosofía que guía ese comportamiento.

En conjunto forman tres niveles complementarios de gobernanza:

```
Core Principles
        │
        ▼
Flow Rules
        │
        ▼
Entity & Process Flows
        │
        ▼
Domain Invariants
```

Sin embargo, haría un pequeño ajuste al diagrama: colocaría las **Domain Invariants** debajo de **Entity & Process Flows**, no porque sean menos importantes, sino porque actúan como la restricción estructural sobre la que operan los flujos. Una representación más precisa sería:

```
                Core Principles
                       │
                       ▼
                  Flow Rules
                       │
                       ▼
          Entity & Process Flows
                       │
        ┌──────────────┴──────────────┐
        ▼                             ▼
 Domain Invariants           System Architecture
```

De esta forma se entiende que el comportamiento del sistema está gobernado por principios y reglas, pero siempre ocurre respetando simultáneamente la **estructura del dominio** y la **distribución de responsabilidades** definida por la arquitectura.