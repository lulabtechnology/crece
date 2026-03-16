# CRECE Premium Landing

Landing page premium para **CRECE**, construida con **Next.js App Router + TypeScript + Tailwind CSS + Motion + lucide-react**.

## Actualización visual incluida

Este ZIP ya viene con un **restyle fuerte de identidad visual** para acercarlo mucho más a lo que pidió el cliente:

- paleta verde bosque + oliva/lima + dorado cálido
- header con logo más visible
- hero más premium y menos SaaS azul
- cards, CTAs y badges corregidos al ADN de CRECE
- contraste y jerarquía visual mejorados
- glow y overlays alineados al look financiero premium

---

## Qué contiene

- Hero full-screen premium con versión desktop y mobile
- Propuesta de valor fusionada entre formación financiera + gerencia financiera tercerizada
- Secciones modulares y editables
- Animaciones elegantes con Motion
- Formulario de contacto premium con envío por `mailto:` listo para personalizar
- Botón directo a WhatsApp
- SEO base con metadata y Open Graph
- Placeholders visuales ya incluidos para que el proyecto levante aunque todavía no subas las imágenes finales

---

## Estructura principal

```text
/app
  globals.css
  layout.tsx
  page.tsx

/src
  /components
  /data
    siteContent.ts

/public
  /images
    /brand
    /hero
    /sections
    /textures
```

---

## Dónde cambiar textos, métricas, servicios y contacto

Edita este archivo:

```text
/src/data/siteContent.ts
```

Ahí puedes cambiar fácilmente:

- headlines
- subtítulos
- beneficios
- servicios
- contenidos del seminario
- métricas
- precio
- contacto
- links
- metadata SEO
- rutas de imágenes

---

## Dónde cambiar la identidad visual

### Paleta y estilo global

```text
/app/globals.css
```

Ahí están:
- fondo general
- gradientes principales
- paneles oscuros
- botones
- badges
- glows
- estilo visual base de toda la landing

### Componentes más sensibles al look premium

```text
/src/components/header.tsx
/src/components/hero.tsx
/src/components/section-heading.tsx
/src/components/value-fusion.tsx
/src/components/benefits.tsx
/src/components/services.tsx
/src/components/training.tsx
/src/components/results.tsx
/src/components/authority.tsx
/src/components/contact-cta.tsx
/src/components/contact-form.tsx
/src/components/footer.tsx
```

---

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
/public/images/sections/fusion-visual.webp
```

### Cómo reemplazar imágenes
1. Mantén exactamente el mismo nombre del archivo.
2. Sube tu asset final sobre ese archivo.
3. Si respetas la ruta, no tienes que tocar código.

---

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre:

```text
http://localhost:3000
```

---

## Cómo desplegar en Vercel usando GitHub Web

1. Crea un repositorio nuevo en GitHub.
2. Sube todo el contenido de este proyecto.
3. Entra a Vercel.
4. Importa el repositorio.
5. Deja la configuración por defecto.
6. Haz deploy.

---

## Cómo usarlo sin CLI

Puedes:
- descomprimir este ZIP
- subir la carpeta al repositorio desde el navegador de GitHub
- conectar GitHub con Vercel
- desplegar sin usar terminal en tu máquina

---

## Formulario actual

El formulario está preparado para:
- capturar nombre
- correo
- teléfono
- empresa
- mensaje

Actualmente genera un correo usando `mailto:` con los datos capturados.
Si luego quieres integrar envío real con Resend, Formspree, Make o API propia, el archivo a tocar es:

```text
/src/components/contact-form.tsx
```
