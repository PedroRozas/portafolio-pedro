# Portafolio Pedro Rozas

Landing personal construida con Vite, React, TypeScript y Material UI, implementada a partir del diseño fuente de Stitch y organizada con una estructura feature-first ligera.

## Scripts

- `npm run dev`: inicia el entorno local.
- `npm run build`: valida TypeScript y genera el build de producción.
- `npm run lint`: ejecuta ESLint.
- `npm run preview`: previsualiza el build generado.

## Estructura

```text
src/
  components/ui/
  features/landing/
  lib/
  theme/
  App.tsx
  index.css
  main.tsx
```

## Puntos de reemplazo rápido

- Links externos y CTA de servicios: `src/lib/site-config.ts`
- Textos base y placeholders de proyectos: `src/features/landing/content.ts`
- Tokens visuales globales: `src/theme/index.ts`

## Diseño

La composición visual replica la pantalla de Stitch `Pedro Rozas - Portafolio (Software + Soporte Técnico)` y adapta el contenido para que la landing quede centrada en software, arquitectura y proyectos digitales.
