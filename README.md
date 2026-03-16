# CRECE Premium Landing

Landing page premium para **CRECE**, construida con **Next.js App Router + TypeScript + Tailwind CSS + Motion + lucide-react**.

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

## Rutas exactas de imágenes

Estas son las rutas principales que pediste y ya están creadas con placeholders funcionales:

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
```

Rutas adicionales incluidas para enriquecer el diseño:

```text
/public/images/sections/services-visual.webp
/public/images/sections/results-visual.webp
/public/images/sections/fusion-visual.webp
```

### Cómo reemplazar imágenes
1. Mantén **exactamente el mismo nombre del archivo**.
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

### Opción práctica con GitHub Web
1. Crea un repositorio nuevo en GitHub.
2. Sube **todo el contenido** de este proyecto.
3. Entra a Vercel.
4. Importa el repositorio.
5. Deja la configuración por defecto.
6. Haz deploy.

### Build esperado
- Framework: Next.js
- Build Command: `next build`
- Output: automático

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
Si luego quieres integrar un envío real con Resend, Formspree, Make o API propia, el mejor lugar para cambiarlo es:

```text
/src/components/contact-form.tsx
```

---

## Recomendación de imágenes

### Hero
- Desktop: 1920x1200 o superior
- Mobile: 1080x1440 o superior

### Secciones
- Recomendado: 1400x1000 aprox.
- Mantén estilo premium, oscuro, financiero, elegante

### CTA final
- Desktop: 1800x1000
- Mobile: 1080x1400

---

## Personalización rápida

### Contacto
Edita en:

```text
/src/data/siteContent.ts
```

Campos:
- email
- phone
- whatsapp
- website

### Precios / oferta
También en:

```text
/src/data/siteContent.ts
```

### SEO
También en:

```text
/src/data/siteContent.ts
```

---

## Nota
Este proyecto quedó armado para que se vea premium desde el primer deploy, aun si después reemplazas assets, ajustas copy o conectas un backend de formularios.
