# CRECE Premium Landing — separación real + look premium

Landing page para **CRECE**, construida con **Next.js App Router + TypeScript + Tailwind CSS + Motion + lucide-react**.

## Esta versión incluye

- hero más institucional y menos mezclado
- bloque premium que separa claramente **empresa / consultoría / seminario**
- anuncio institucional más claro
- bloque de **consultoría + gerencia financiera tercerizada** con ventajas mejor presentadas
- seminario presentado como **promoción aparte**
- tipografía display más llamativa
- paleta alineada a **verde bosque + oliva/lima + dorado**
- logo corregido y más visible en header
- contenido centralizado en un solo archivo de datos

## Estructura principal

```text
/app
  globals.css
  layout.tsx
  page.tsx

/src
  /components
    business-lines.tsx
  /data
    siteContent.ts

/public
  /images
    /brand
    /hero
    /sections
    /textures
```

## Dónde cambiar textos, servicios, métricas y contacto

```text
/src/data/siteContent.ts
```

Ahí puedes editar:
- navegación
- hero
- anuncio institucional
- separación de líneas comerciales
- consultoría y gerencia financiera tercerizada
- resultados
- autoridad
- seminario
- contacto
- SEO
- rutas de imágenes

## Componentes principales tocados en esta ronda

```text
/src/components/header.tsx
/src/components/hero.tsx
/src/components/business-lines.tsx
/src/components/institutional-overview.tsx
/src/components/benefits.tsx
/src/components/services.tsx
/src/components/results.tsx
/src/components/authority.tsx
/src/components/process.tsx
/src/components/seminar-promo.tsx
/src/components/training.tsx
/src/components/contact-cta.tsx
/src/components/contact-form.tsx
/src/components/footer.tsx
/src/components/section-heading.tsx
```

## Identidad visual y tipografía

```text
/app/globals.css
/app/layout.tsx
```

Ahí están:
- gradientes y fondos
- paneles premium
- botones
- badges
- glows
- tipografía display
- look global de la landing

## Rutas exactas de imágenes

```text
/public/images/brand/logo-crece.png
/public/images/hero/hero-desktop.webp
/public/images/hero/hero-mobile.webp
/public/images/sections/about-visual.webp
/public/images/sections/training-visual.webp
/public/images/sections/authority-visual.webp
/public/images/sections/cta-desktop.webp
/public/images/sections/cta-mobile.webp
/public/images/textures/grid-overlay.png
/public/images/sections/services-visual.webp
/public/images/sections/results-visual.webp
```

## Cómo reemplazar imágenes

1. Mantén exactamente el mismo nombre del archivo.
2. Sube tu asset final sobre ese archivo.
3. Si respetas la ruta, no tienes que tocar código.

## Cómo desplegar en Vercel usando GitHub Web

1. Crea un repositorio nuevo en GitHub.
2. Sube todo el contenido de este proyecto.
3. Entra a Vercel.
4. Importa el repositorio.
5. Deja la configuración por defecto.
6. Haz deploy.

## Formulario actual

El formulario usa `mailto:` y WhatsApp.
Si luego quieres integrar envío real con Resend, Formspree, Make o API propia, toca:

```text
/src/components/contact-form.tsx
```
