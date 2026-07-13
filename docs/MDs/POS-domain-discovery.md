# 02. Domain Discovery

---

## Objetivo

Comprender cómo funciona realmente el trabajo y el aprendizaje antes de diseñar el sistema.

No se diseñan bases de datos.

No se diseñan páginas.

No se diseña Notion.

Se modela el dominio.

---

## Descubrimientos

| Nro | Descubrimiento | Estado |
| --- | --- | --- |
| **D-001** | **El POS no organiza información.** Organiza transformaciones. Todo elemento entra al sistema para cambiar de estado y producir un resultado. | ✅ Validado. |
| **D-002** | **Existen distintos motores de transformación.** 

Hasta ahora identificados:
  *• Operaciones
  • Construcción
  • Crecimiento
  • Sistema* | 🟡 En validación. |
| **D-003** | **Los clientes generan operaciones recurrentes.** 
No necesariamente proyectos. 

Ejemplos:
  *• Plenia
  • Vitrina
  • Avramovic* | ✅ Validado. |
| D-004 | **El aprendizaje no consiste en acumular notas.** 

Consiste en transformar información en capacidades. | 🟡 En validación. |
| D-005 | **El Workspace probablemente no sea el centro del sistema**. 

Es un contexto donde ocurre el trabajo. | 🟡 En validación. |
| D-006 | **El sistema debe minimizar el pensamiento durante la ejecución repetitiva.** 

La capacidad cognitiva debe reservarse para:
  • *creación
  • aprendizaje
  • toma de decisiones* | ✅ Validado. |
| D-007 | El trabajo genera conocimiento; el conocimiento se consolida en Patterns; los Patterns se materializan mediante Implementations específicas. Las herramientas almacenan Implementations. El POS preserva Patterns. | 🟡 En validación. |
|  |  |  |

---

## Decisiones Arquitectónicas

| Nro | Desición | Estado |
| --- | --- | --- |
| ADR-001 | **Los Workspaces no son el centro del sistema.** | Pendiente |
|  |  |  |

---

## Observaciones

**Caso Plenia**

↓

Llega un producto

↓

Se ejecuta un pipeline

↓

Se entrega

↓

Se archiva

**Caso AI Engineering**

↓

Aparece información

↓

Se procesa

↓

Se convierte en capacidad

---

## Glosario