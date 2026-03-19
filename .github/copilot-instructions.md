# Instrucciones base para Copilot Agent

## Objetivo

Trabajar en proyectos frontend siguiendo los estándares internos del equipo sin introducir patrones arbitrarios ni deuda estructural.

## Stack por defecto

Usa este stack salvo que el contexto del proyecto indique lo contrario:

- Next.js
- TypeScript
- App Router
- Material UI
- arquitectura feature-first
- React Hook Form + Zod

Excepción:

- si el proyecto es una landing muy simple, usa Vite.

## Arquitectura obligatoria

Organiza el código con enfoque feature-first.

Reglas:

- `src/app` define rutas, layouts, metadata y providers;
- `src/features` concentra dominio, UI, hooks, servicios, schemas y tipos por feature;
- `src/components/ui` contiene solo UI compartida, sin lógica de negocio;
- `src/lib` contiene piezas transversales reales, no un cajón de sastre;
- `src/theme` define tokens, overrides y configuración visual global.

No pongas lógica de negocio en `app/` ni dentro de componentes compartidos.

## Responsive obligatorio

Reglas no negociables:

- toda UI debe ser responsive desde el inicio;
- todo desarrollo público se diseña mobile-first;
- soporta mobile, tablet y desktop;
- usa breakpoints de Material UI;
- evita anchos fijos innecesarios;
- navbar, grids, formularios y layouts deben adaptarse correctamente.

Nunca dejes responsive para una iteración posterior si ya estás construyendo la pantalla.

## Uso de diseños desde Stitch o MCP

Si existe un diseño en Stitch, MCP o una fuente estructurada equivalente:

- no inventes UI;
- implementa el diseño de forma fiel;
- respeta layout, jerarquía y estructura visual;
- adapta solo lo necesario para responsive, accesibilidad o limitaciones técnicas.

Si falta información puntual:

- infiere de forma consistente con el diseño existente;
- no rediseñes el flujo ni cambies la intención visual.

## Qué hacer si no hay diseño

Si no existe diseño:

- construye una UI sobria y consistente con Material UI y el theme del proyecto;
- prioriza claridad, jerarquía y usabilidad;
- no inventes pasos de producto, estados o patrones no pedidos;
- mantén la estructura lista para refinarse luego sin rehacer la arquitectura.

## Qué preguntar si falta contexto

Pregunta solo cuando la respuesta cambie una decisión real de implementación.

Preguntas válidas:

- ¿Es una landing simple o una app con crecimiento funcional?
- ¿Existe diseño en Stitch, Figma o equivalente?
- ¿Habrá autenticación o áreas privadas?
- ¿La pantalla es pública o interna?
- ¿Qué estados críticos debe contemplar la UI?

Si no hay respuesta y puedes avanzar con defaults razonables, avanza y deja explícitas las suposiciones.

## Qué NO hacer

- no inventar patrones nuevos si el repo ya tiene un estándar claro;
- no mover lógica de negocio a `components/ui`;
- no resolver una feature completa dentro de `app/page.tsx`;
- no agregar librerías si el stack actual ya cubre la necesidad;
- no crear componentes gigantes con layout, fetch, validación y modales en el mismo archivo;
- no ignorar responsive;
- no rediseñar una pantalla si ya existe diseño;
- no mezclar estilos duplicados si el theme o un componente reutilizable resuelven el problema.

## Checklist final

Antes de cerrar un cambio, verifica:

- código tipado;
- responsive validado en mobile, tablet y desktop;
- estructura alineada con feature-first;
- lógica ubicada en la capa correcta;
- sin componentes gigantes innecesarios;
- sin estilos duplicados evitables;
- diseño respetado si existía una fuente visual definida.
