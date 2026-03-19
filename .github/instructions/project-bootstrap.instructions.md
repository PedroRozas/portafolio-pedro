---
description: "Usar cuando haya que crear o bootstrapear un proyecto frontend nuevo siguiendo los estándares internos con Next.js o Vite."
---

# Instrucción de bootstrap de proyecto

## Objetivo

Crear proyectos nuevos con una base limpia, consistente y lista para crecer sin sobreingeniería.

## Cuándo preguntar

Pregunta solo si la respuesta cambia una decisión de framework, estructura o integración base.

Preguntas válidas:

- ¿Es una landing muy simple o un producto con crecimiento funcional?
- ¿Habrá autenticación o áreas privadas?
- ¿Existe diseño en Stitch, Figma o equivalente?
- ¿Se requiere SEO fuerte o varias rutas públicas?

Si la respuesta no llega y puedes continuar con defaults seguros, continúa.

## Cuándo usar defaults

Usa defaults cuando falte contexto pero el proyecto siga encajando en el estándar.

Defaults:

- Next.js como framework por defecto;
- Vite solo para landing muy simple;
- TypeScript obligatorio;
- Material UI como base visual;
- arquitectura feature-first;
- React Hook Form + Zod para formularios;
- responsive mobile-first desde el primer commit.

## Cómo crear proyectos desde cero

### Si el proyecto es el estándar principal

Usa:

- Next.js
- TypeScript
- App Router
- Material UI

Estructura inicial:

```text
src/
  app/
  features/
  components/ui/
  lib/
  theme/
```

Además crea:

- `src/app/providers.tsx` para providers globales;
- `src/theme/index.ts` y archivos mínimos del theme;
- layout base responsive desde `layout.tsx`;
- una primera feature de ejemplo solo si el usuario la pidió o si es necesaria para probar wiring.

### Si el proyecto es una landing muy simple

Usa:

- Vite
- TypeScript
- Material UI si el proyecto seguirá el mismo sistema visual

Estructura inicial:

```text
src/
  features/
  components/ui/
  lib/
  theme/
  main.tsx
```

## Cómo dejar `theme` y providers listos

Reglas:

- monta `ThemeProvider` desde el root de la aplicación;
- deja `CssBaseline` configurado;
- define tokens, tipografía y spacing antes de multiplicar pantallas;
- prepara breakpoints de MUI para uso responsive real;
- evita crear un theme fragmentado en demasiados archivos al inicio.

## Cómo decidir ubicación de archivos

- rutas, layouts y providers globales en `app/`;
- lógica de negocio, formularios y piezas de dominio en `features/`;
- componentes visuales compartidos en `components/ui/`;
- utilidades, servicios base y hooks transversales en `lib/`;
- sistema visual global en `theme/`.

## Evitar sobreingeniería

- no crees capas vacías “por si acaso”;
- no agregues estado global si el estado local o por feature basta;
- no añadas React Query si no existe una necesidad real de caché o coordinación de estado servidor en cliente;
- no envuelvas todos los componentes de MUI con wrappers custom;
- no generes carpetas genéricas sin responsabilidad clara.

## Resultado esperado

El proyecto inicial debe quedar:

- tipado;
- responsive desde el inicio;
- con theme y providers operativos;
- con estructura feature-first clara;
- listo para crecer sin reescritura temprana.
