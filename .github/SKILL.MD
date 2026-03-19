---
name: frontend-standards
description: >
  ALWAYS use this skill when working inside the repository.
  Usa esta guía para trabajar en proyectos frontend del equipo siguiendo los
  estándares internos. Aplica estas reglas antes de crear, modificar o
  reestructurar pantallas, features, layouts, formularios, componentes,
  navegación, validaciones o arquitectura de UI.
---

# Frontend Standards

## Objetivo

Trabaja en proyectos frontend respetando los estándares internos del equipo,
sin introducir patrones arbitrarios, deuda estructural ni decisiones visuales
inventadas cuando ya exista una referencia clara.

Tu prioridad es:
1. entender el contexto real del proyecto;
2. seguir la arquitectura existente si ya está bien definida;
3. usar los defaults del equipo cuando falte contexto;
4. mantener el código escalable, tipado y responsive desde el inicio.

---

## Regla principal antes de tocar código

Antes de implementar:

- inspecciona la estructura del proyecto;
- identifica si ya existe un patrón arquitectónico dominante;
- busca una feature similar ya resuelta en el repo;
- replica el patrón local antes de introducir una variante nueva.

Si el repositorio ya tiene una convención clara, esa convención tiene prioridad
sobre patrones genéricos.

No apliques una “mejor práctica genérica” si rompe la consistencia del proyecto.

---

## Stack por defecto

Usa este stack salvo que el contexto del proyecto indique otra cosa:

- Next.js
- TypeScript
- App Router
- Material UI
- arquitectura feature-first
- React Hook Form
- Zod

### Excepción

- si el proyecto es una landing muy simple, usa Vite;
- si el repositorio ya existe y usa otro stack, respeta el stack actual.

No migres tecnologías ni mezcles paradigmas sin que se te pida explícitamente.

---

## Criterio para elegir stack en proyectos nuevos

Si el proyecto no existe aún:

- usa **Next.js + TypeScript + App Router** por defecto;
- usa **Vite** solo si es una landing o sitio muy simple, sin crecimiento funcional relevante.

Considera que es “app con crecimiento” si aplica cualquiera de estas condiciones:

- múltiples vistas o módulos;
- autenticación;
- panel privado;
- formularios complejos;
- tablas, filtros o flujos internos;
- posibilidad real de escalar en features.

En esos casos, no uses Vite: usa Next.js.

---

## Arquitectura obligatoria

Organiza el código con enfoque **feature-first**.

### Estructura base esperada

- `src/app` → rutas, layouts, metadata, providers y composición de página;
- `src/features` → dominio, UI, hooks, servicios, schemas, adapters y tipos por feature;
- `src/components/ui` → componentes compartidos y reutilizables, sin lógica de negocio;
- `src/lib` → utilidades transversales reales;
- `src/theme` → tokens, theme, overrides y configuración visual global.

### Reglas de arquitectura

- no pongas lógica de negocio en `src/app`;
- no pongas fetch complejo, validación, reglas de dominio o estado de feature en `components/ui`;
- no resuelvas una pantalla completa dentro de `app/page.tsx`;
- no crees carpetas genéricas tipo `helpers`, `utils` o `common` como cajón de sastre si el código pertenece a una feature;
- si algo pertenece claramente a una feature, vive en esa feature.

### Regla de composición

Las rutas en `app` deben **componer** features, no contener toda la implementación.

---

## Responsive obligatorio

Esto no es opcional.

### Reglas duras

- toda UI debe ser responsive desde el inicio;
- todo desarrollo público se construye mobile-first;
- soporta mobile, tablet y desktop;
- usa breakpoints de Material UI;
- evita anchos fijos innecesarios;
- navbar, grids, cards, tablas, formularios y layouts deben adaptarse correctamente.

### No hacer

- no dejes responsive para una iteración posterior;
- no construyas primero para desktop “y luego se ve mobile”;
- no uses medidas rígidas cuando un layout fluido resuelve mejor.

Cuando implementes una pantalla, considera desde el inicio:
- apilamiento en mobile;
- cambio de columnas por breakpoint;
- tamaños de spacing;
- comportamiento de acciones y CTAs;
- legibilidad de texto y formularios;
- overflow horizontal no deseado.

---

## Uso de diseños desde Stitch, MCP, Figma o fuente equivalente

Si existe un diseño o fuente visual estructurada:

- no inventes UI;
- implementa el diseño de forma fiel;
- respeta layout, jerarquía, estructura y orden visual;
- adapta solo lo necesario para responsive, accesibilidad o limitaciones técnicas;
- mantén consistencia visual con la referencia.

### Si falta información puntual

- infiere de forma consistente con el resto del diseño;
- no rediseñes el flujo;
- no cambies la intención visual;
- no agregues elementos que no estén justificados por la referencia.

### Prioridad de decisión

Si hay tensión entre “lo que tú harías” y el diseño existente:
- gana el diseño, salvo que haya un problema claro de accesibilidad, responsive o imposibilidad técnica.

---

## Qué hacer si no hay diseño

Si no existe diseño:

- construye una UI sobria, clara y consistente con Material UI y el theme del proyecto;
- prioriza jerarquía visual, legibilidad y usabilidad;
- evita adornos innecesarios;
- no inventes pasos de producto, estados o patrones no pedidos;
- deja la estructura lista para refinarse luego sin rehacer arquitectura.

### En ausencia de diseño

Prefiere:
- layouts simples;
- spacing consistente;
- tipografía clara;
- componentes estándar;
- composición limpia.

No uses creatividad visual como excusa para introducir complejidad.

---

## Formularios

Usa por defecto:

- React Hook Form para manejo de formularios;
- Zod para validación de esquema.

### Reglas

- define schemas explícitos;
- tipa inputs y outputs del formulario;
- separa schema, valores por defecto y UI cuando la complejidad lo amerite;
- usa componentes controlados solo cuando realmente se necesiten;
- muestra errores de validación de forma clara y consistente.

### No hacer

- no mezclar validación dispersa en múltiples capas sin necesidad;
- no dejar reglas críticas solo en la UI si el dominio requiere estructura clara;
- no crear formularios gigantes en un solo archivo si se pueden descomponer por secciones.

---

## Material UI

Usa Material UI como base visual.

### Reglas

- prioriza componentes del sistema antes de crear wrappers innecesarios;
- usa `sx` con criterio;
- centraliza tokens, overrides y decisiones globales en `src/theme`;
- reutiliza patrones visuales antes de duplicarlos;
- mantén consistencia de spacing, tamaños y jerarquías.

### No hacer

- no crear componentes wrapper vacíos solo por envolver MUI;
- no duplicar estilos si el theme o un componente compartido lo resuelve;
- no mezclar múltiples estrategias de styling sin necesidad.

---

## Componentes

Diseña componentes pequeños y con responsabilidad clara.

### Regla práctica

Divide cuando un archivo mezcla demasiadas cosas, por ejemplo:
- layout;
- fetch;
- reglas de negocio;
- validación;
- modales;
- tablas;
- acciones;
- manejo de estado complejo.

### No hacer

- no crear componentes gigantes con demasiadas responsabilidades;
- no subir demasiado pronto abstracciones si solo se usan una vez;
- no extraer componentes “por limpieza visual” si eso rompe la comprensión de la feature.

La extracción debe mejorar claridad, no fragmentar innecesariamente.

---

## Datos, hooks y servicios

Organiza la lógica cerca de la feature a la que pertenece.

### Reglas

- hooks de feature viven en la feature;
- servicios de feature viven en la feature;
- mapeos, adapters y tipos de dominio viven cerca del dominio que usan;
- solo sube a `lib` lo verdaderamente transversal.

### No hacer

- no mandar a `lib` cualquier cosa solo porque “se reutiliza tal vez”;
- no mezclar acceso a datos con componentes compartidos;
- no poner reglas de negocio en hooks genéricos si pertenecen a una feature concreta.

---

## Cómo actuar si falta contexto

Pregunta solo si la respuesta cambia una decisión real de implementación.

Preguntas válidas:

- ¿Es una landing simple o una app con crecimiento funcional?
- ¿Existe diseño en Stitch, Figma o equivalente?
- ¿Habrá autenticación o áreas privadas?
- ¿La pantalla es pública o interna?
- ¿Qué estados críticos debe contemplar la UI?

Si no hay respuesta y puedes avanzar con defaults razonables:

- avanza;
- deja explícitas las suposiciones;
- elige la opción más conservadora y escalable.

No bloquees el trabajo por dudas menores.

---

## Qué NO hacer

- no inventar patrones nuevos si el repo ya tiene un estándar claro;
- no mover lógica de negocio a `components/ui`;
- no resolver una feature completa dentro de `app/page.tsx`;
- no agregar librerías si el stack actual ya cubre la necesidad;
- no crear componentes gigantes con layout, fetch, validación y modales en el mismo archivo;
- no ignorar responsive;
- no rediseñar una pantalla si ya existe diseño;
- no mezclar estilos duplicados si el theme o un componente reutilizable resuelven el problema;
- no reorganizar carpetas masivamente sin necesidad real;
- no introducir abstracciones preventivas “por si acaso”.

---

## Orden recomendado de trabajo

Cuando te pidan implementar algo:

1. inspecciona el repo y detecta patrón local;
2. identifica si existe diseño o referencia visual;
3. determina si es una route/page nueva o cambio dentro de una feature;
4. ubica la lógica en la capa correcta;
5. implementa UI responsive desde el inicio;
6. agrega validación y tipos;
7. refactoriza solo lo necesario para mantener claridad;
8. entrega cambios consistentes con la estructura existente.

---

## Formato esperado al entregar cambios

Cuando propongas o ejecutes cambios:

- explica brevemente las suposiciones que tomaste;
- menciona dónde ubicarias cada pieza;
- mantén los nombres alineados al dominio del proyecto;
- evita respuestas vagas como “creé una estructura escalable” sin mostrar cómo se integra realmente.

Si generas código, debe quedar listo para vivir en el repo real, no como demo aislada.

---

## Checklist final

Antes de cerrar un cambio, verifica:

- código tipado;
- responsive validado en mobile, tablet y desktop;
- estructura alineada con feature-first;
- lógica ubicada en la capa correcta;
- sin componentes gigantes innecesarios;
- sin estilos duplicados evitables;
- diseño respetado si existía una fuente visual definida;
- sin librerías innecesarias;
- consistente con el patrón ya existente del repo.

Si algo no se pudo cumplir, dilo explícitamente.