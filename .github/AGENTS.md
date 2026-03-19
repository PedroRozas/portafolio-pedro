# AGENTS.md

## Objetivo

Definir cómo debe trabajar un agente de código dentro de repos que adopten estos estándares.

## Comportamiento en repos nuevos

Cuando el repo se está creando desde cero, el agente debe:

1. aplicar el stack por defecto salvo excepción explícita;
2. crear la estructura feature-first desde el inicio;
3. dejar `theme`, providers y responsive resueltos antes de escalar pantallas;
4. evitar sobreingeniería y dependencias innecesarias;
5. usar defaults razonables si falta contexto y la decisión no cambia la arquitectura.

## Comportamiento en repos existentes

Cuando el repo ya existe, el agente debe:

1. leer la arquitectura actual antes de proponer cambios estructurales;
2. respetar la organización existente si ya es coherente y estable;
3. no romper la arquitectura por imponer un patrón nuevo;
4. introducir mejoras de forma localizada y compatible con el código actual;
5. alinear los cambios con los estándares del repo sin forzar una migración global no pedida.

## Cómo respetar estándares

Reglas base:

- usar feature-first como criterio principal de ubicación;
- mantener `app/` delgado y enfocado en rutas/layouts;
- mantener `components/ui` libre de lógica de negocio;
- colocar schemas, hooks y servicios cerca de la feature que los usa;
- usar `theme` y `sx` con criterio, sin duplicar estilos.

## Cómo decidir ubicación de archivos

### `src/app`

Usar para:

- rutas;
- layouts;
- metadata;
- providers globales.

### `src/features`

Usar para:

- pantallas o secciones de dominio;
- formularios de negocio;
- hooks de feature;
- services de feature;
- schemas y tipos de feature.

### `src/components/ui`

Usar para:

- componentes visuales compartidos;
- shells y bloques de presentación reutilizables;
- patrones de UI sin conocimiento de dominio.

### `src/lib`

Usar para:

- hooks transversales reales;
- servicios base;
- utilidades puras;
- tipos compartidos estables.

### `src/theme`

Usar para:

- tokens;
- tipografía;
- overrides;
- variantes globales de Material UI.

## Cómo validar cambios

Antes de considerar terminado un cambio, el agente debe validar:

1. tipado correcto;
2. ubicación correcta de cada archivo;
3. ausencia de lógica de negocio en capas visuales compartidas;
4. responsive en mobile, tablet y desktop;
5. coherencia con el theme y con Material UI;
6. respeto al diseño fuente si existe.

## Reglas clave

- nunca romper arquitectura existente sin instrucción explícita;
- no inventar patrones nuevos si el repo ya resolvió el problema;
- respetar diseño si existe, especialmente si viene de Stitch o fuente estructurada equivalente;
- garantizar responsive siempre;
- no dejar mobile como trabajo pendiente;
- no rediseñar una interfaz solo por preferencia del agente;
- no extraer a compartido una pieza que todavía es local a una feature.

## Regla de diseño

Si existe diseño:

- implementar fielmente;
- adaptar solo para responsive, accesibilidad y límites técnicos;
- inferir huecos menores con consistencia.

Si no existe diseño:

- usar Material UI y el theme del proyecto para construir una UI clara, sobria y mantenible;
- no inventar flujos de producto no pedidos.

## Regla de cierre

Un cambio no se considera completo si cumple funcionalmente pero deja cualquiera de estos problemas:

- estructura incorrecta;
- responsive incompleto;
- lógica en la capa equivocada;
- estilos duplicados evitables;
- desviación innecesaria respecto al diseño o a la arquitectura del repo.
