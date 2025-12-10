# La Chacra – Dulces Artesanales  
Sitio web desarrollado con **Next.js**, **Tailwind CSS** y **TypeScript**, orientado a mostrar productos regionales y ofrecer una experiencia visual artesanal, cuidada y accesible.

## Tecnologías utilizadas
- **Next.js 14 / App Router**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animaciones)
- **Next/Image + picture** para optimización de imágenes
- **SEO metadata** integrada mediante `app/layout.tsx`

---

## Características principales
- Diseño responsive optimizado para mobile, tablet y desktop.  
- Componentes reutilizables: Navbar, Footer, WhatsApp Floating Button.  
- Animaciones suaves y accesibles para productos (Framer Motion).  
- Imágenes optimizadas y uso de `<picture>` para banners responsivos.  
- Buenas prácticas de accesibilidad (alt text, estructura semántica, contraste revisado).  
- Metadata básica para SEO.

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/la-chacra.git
cd la-chacra
```
## Instalar dependencias:
```bash
npm install
```
## Scripts disponibles

Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Construir para producción:
```bash
npm run build

```

## Correr el servidor en producción:
```bash
npm start
```

## Formatear con Prettier:
```bash
npm run format
```

## Estructura del proyecto 
```bash
app/
  components/
    Navbar.tsx
    Footer.tsx
    WhatsappIcon.tsx
    Button.tsx
    ClientProviders.tsx
    Form/
      Form.tsx
      Input.tsx
      Textarea.tsx
  schemas/
    formSchema.ts
  productos/
    page.tsx
  contacto/
    page.tsx
  quienes-somos/
    page.tsx
  layout.tsx
  globals.css
public/
  images/
    banner/
    productos/
    quienes-somos/
    texturas/

```


## SEO

El proyecto incluye:

- metadata en layout.tsx
- Etiqueta: <!DOCTYPE html><html lang="es">
- Alt text descriptivo en todas las imágenes
- Jerarquía correcta de títulos (h1, h2, h3)
- Contenido optimizado para buscadores

