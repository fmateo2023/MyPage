# 🎨 Guía de Personalización - Portfolio Profesional

## Información Personal

### 1. Datos de Contacto
**Archivo**: `src/components/Contact.jsx`

```jsx
// Actualizar información de contacto
const contactMethods = [
  {
    title: "Email",
    value: "tu-email@dominio.com",
    link: "mailto:tu-email@dominio.com"
  },
  {
    title: "Teléfono", 
    value: "tu-numero",
    link: "tel:+52tu-numero"
  },
  {
    title: "WhatsApp",
    value: "tu-numero",
    link: "https://wa.me/52tu-numero"
  }
]
```

### 2. Información Personal
**Archivo**: `src/components/Hero.jsx`

```jsx
// Actualizar título y descripción
<h1>
  Construyo soluciones tecnológicas modernas que{' '}
  <span className="text-accent">impulsan negocios</span>
</h1>

// Actualizar estadísticas
const stats = [
  { number: 'TUS_AÑOS+', label: 'Años de experiencia' },
  { number: 'TUS_PROYECTOS+', label: 'Proyectos completados' },
  // ...
]
```

### 3. Biografía Profesional
**Archivo**: `src/components/About.jsx`

Actualiza los párrafos con tu experiencia real:
```jsx
<p>
  Soy un desarrollador de software especializado en...
  // Tu biografía aquí
</p>
```

## Servicios y Portafolio

### 4. Servicios Ofrecidos
**Archivo**: `src/components/Services.jsx`

```jsx
const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Tu Servicio",
    description: "Descripción de tu servicio...",
    features: ["Característica 1", "Característica 2"]
  }
  // Agregar/modificar servicios
]
```

### 5. Proyectos del Portafolio
**Archivo**: `src/components/Portfolio.jsx`

```jsx
const projects = [
  {
    title: "Nombre del Proyecto",
    description: "Descripción del proyecto...",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Tipo de proyecto",
    client: "Nombre del cliente"
  }
  // Agregar tus proyectos reales
]
```

### 6. Experiencia y Participaciones
**Archivo**: `src/components/Experience.jsx`

```jsx
const experiences = [
  {
    title: "Tu participación",
    organization: "Organización",
    location: "Ciudad, Estado",
    date: "Año",
    description: "Descripción de tu participación...",
    type: "Tipo de evento"
  }
  // Agregar tus experiencias
]
```

## Stack Tecnológico

### 7. Habilidades y Tecnologías
**Archivo**: `src/components/Skills.jsx`

```jsx
const skillCategories = [
  {
    title: "Lenguajes de Programación",
    skills: ["JavaScript", "Python", "TypeScript"] // Tus lenguajes
  },
  {
    title: "Frontend",
    skills: ["React", "Vue.js", "Angular"] // Tus frameworks
  }
  // Actualizar con tus tecnologías
]
```

## Testimonios

### 8. Testimonios de Clientes
**Archivo**: `src/components/Testimonials.jsx`

```jsx
const testimonials = [
  {
    text: "Testimonio del cliente...",
    author: "Nombre del Cliente",
    role: "Cargo",
    company: "Empresa",
    rating: 5
  }
  // Agregar testimonios reales
]
```

## Imágenes y Assets

### 9. Foto de Perfil
1. Coloca tu foto en `public/assets/perfil.jpg`
2. Actualiza `src/components/Hero.jsx`:

```jsx
// Reemplazar el placeholder con:
<img 
  src="/assets/perfil.jpg" 
  alt="Tu Nombre"
  className="w-80 h-80 object-cover rounded-2xl"
/>
```

### 10. Imágenes de Proyectos
1. Coloca imágenes en `public/assets/projects/`
2. Actualiza `src/components/Portfolio.jsx`:

```jsx
const projects = [
  {
    title: "Proyecto",
    image: "/assets/projects/proyecto1.jpg",
    // ... resto de datos
  }
]
```

## Colores y Estilo

### 11. Paleta de Colores
**Archivo**: `src/index.css`

```css
:root {
  /* Colores principales */
  --primary-dark: #0A1A2F;   /* Azul petróleo oscuro */
  --primary-blue: #0077FF;   /* Azul brillante */
  --accent-cyan: #2BBEF8;    /* Cian tecnológico */
  --text-primary: #0D0D0D;   /* Color de texto */
  --background-light: #F5F7FA; /* Fondo claro */
  
  /* Personalizar según tu marca */
}
```

### 12. Tipografía
**Archivo**: `index.html`

```html
<!-- Cambiar fuente si deseas -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

## SEO y Metadatos

### 13. Meta Tags
**Archivo**: `index.html`

```html
<title>Tu Nombre | Tu Profesión</title>
<meta name="description" content="Tu descripción profesional" />
<meta name="keywords" content="tus, palabras, clave" />
<meta name="author" content="Tu Nombre" />
```

### 14. Información de la Empresa
**Archivo**: `src/components/Navigation.jsx`

```jsx
// Actualizar logo/nombre
<a href="#inicio" className="font-bold text-xl text-primary">
  Tu Nombre/Marca
</a>
```

## Configuración de Deploy

### 15. URLs y Repositorio
**Archivo**: `vite.config.js`

```js
export default defineConfig({
  base: '/MyPage/', // Cambia por el nombre de tu repo
})
```

**Archivo**: `package.json`

```json
{
  "homepage": "https://TU_USUARIO.github.io/MyPage"
}
```

## Funcionalidades Adicionales

### 16. Google Analytics (Opcional)
**Archivo**: `index.html`

```html
<!-- Agregar antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 17. Formulario de Contacto Avanzado
Para usar EmailJS en lugar de mailto:

```bash
npm install @emailjs/browser
```

```jsx
// En Contact.jsx
import emailjs from '@emailjs/browser';

const sendEmail = (formData) => {
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID', 
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

## Lista de Verificación

- [ ] Actualizar información personal
- [ ] Cambiar foto de perfil
- [ ] Modificar servicios ofrecidos
- [ ] Agregar proyectos reales
- [ ] Actualizar experiencia profesional
- [ ] Personalizar stack tecnológico
- [ ] Agregar testimonios reales
- [ ] Configurar colores de marca
- [ ] Actualizar meta tags SEO
- [ ] Configurar URLs de deploy
- [ ] Probar formulario de contacto
- [ ] Verificar responsive design
- [ ] Optimizar imágenes
- [ ] Configurar analytics (opcional)

---

¡Con estos cambios tendrás un sitio web completamente personalizado! 🎨