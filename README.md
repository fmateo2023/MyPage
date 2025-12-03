# Portfolio Profesional - Francisco Javier Mateo Hernández

Sitio web profesional moderno desarrollado con React y Vite, optimizado para GitHub Pages.

## 🎨 Características del Diseño

- **Diseño moderno**: Interfaz limpia, minimalista y profesional
- **Paleta de colores empresarial**: Azules profundos (#0A1A2F, #0077FF) con acentos tecnológicos
- **Tipografías premium**: Space Grotesk, Inter e IBM Plex Mono para máxima legibilidad
- **Espaciado generoso**: Mucho espacio en blanco para una experiencia visual limpia
- **Animaciones avanzadas**: Framer Motion para transiciones suaves y elegantes

## 🚀 Tecnologías Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool moderno y rápido
- **Framer Motion**: Animaciones profesionales
- **Lucide React**: Iconografía consistente
- **CSS Custom Properties**: Sistema de diseño escalable
- **GitHub Pages**: Hosting gratuito

## 📁 Estructura del Proyecto

```
MyPage/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx     # Navegación con scroll effect
│   │   ├── Hero.jsx          # Sección principal
│   │   ├── About.jsx         # Sobre mí
│   │   ├── Services.jsx      # Servicios ofrecidos
│   │   ├── Portfolio.jsx     # Proyectos realizados
│   │   ├── Experience.jsx    # Participaciones y eventos
│   │   ├── Skills.jsx        # Stack tecnológico
│   │   ├── Testimonials.jsx  # Testimonios de clientes
│   │   └── Contact.jsx       # Formulario de contacto
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── package.json            # Dependencias
├── vite.config.js          # Configuración de Vite
├── index.html              # Template HTML
└── .github/workflows/      # Deploy automático
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd MyPage

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Build para producción
```bash
# Generar build optimizado
npm run build

# Preview del build
npm run preview
```

## 🚀 Deploy a GitHub Pages

### Configuración inicial

1. **Crear repositorio en GitHub**
2. **Actualizar configuración en `vite.config.js`** (si es necesario):
   ```js
   export default defineConfig({
     base: '/MyPage/', // Cambia por el nombre de tu repositorio
     // ... resto de la configuración
   })
   ```

3. **Actualizar `package.json`**:
   ```json
   {
     "homepage": "https://TU_USUARIO.github.io/MyPage"
   }
   ```

### Deploy automático
```bash
# Deploy a GitHub Pages
npm run deploy
```

### Deploy manual
```bash
# Build del proyecto
npm run build

# Subir carpeta dist a rama gh-pages
# (GitHub Pages servirá desde esta rama)
```

## 🎨 Personalización

### Colores
Modifica las variables CSS en `src/index.css`:
```css
:root {
  --primary-dark: #0A1A2F;   /* Azul petróleo oscuro */
  --primary-blue: #0077FF;   /* Azul brillante */
  --accent-cyan: #2BBEF8;    /* Cian tecnológico */
  --text-primary: #0D0D0D;   /* Texto principal */
  --background-light: #F5F7FA; /* Fondo claro */
}
```

### Contenido
1. **Información personal**: Actualiza `src/components/Hero.jsx` y `src/components/About.jsx`
2. **Servicios**: Modifica el array `services` en `src/components/Services.jsx`
3. **Proyectos**: Actualiza el array `projects` en `src/components/Portfolio.jsx`
4. **Experiencia**: Modifica el array `experiences` en `src/components/Experience.jsx`
5. **Contacto**: Actualiza la información en `src/components/Contact.jsx`

### Foto de perfil
Reemplaza el placeholder en `src/components/Hero.jsx` con tu imagen:
```jsx
<img 
  src="/assets/perfil.jpg" 
  alt="Francisco Javier Mateo Hernández"
  className="w-80 h-80 object-cover rounded-2xl"
/>
```

## 📧 Configuración del Formulario

El formulario de contacto usa `mailto:` por defecto. Para mayor funcionalidad:

### Opciones recomendadas:
- **Formspree**: Servicio gratuito para formularios estáticos
- **Netlify Forms**: Si migras a Netlify
- **EmailJS**: Envío directo desde JavaScript

### Configuración con EmailJS:
```bash
npm install @emailjs/browser
```

## 🔧 Optimizaciones Incluidas

- **Responsive design** completo
- **Animaciones optimizadas** con Framer Motion
- **Glassmorphism** y efectos modernos
- **SEO básico** configurado
- **Performance optimizado** con Vite
- **Accesibilidad** mejorada
- **Touch-friendly** para dispositivos móviles

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 **Móviles**: 320px - 768px
- 📟 **Tablets**: 768px - 1024px  
- 💻 **Desktop**: 1024px+

## 🎯 SEO y Performance

- **Meta tags** optimizados
- **Structured data** para mejor indexación
- **Lighthouse score** 90+ en todas las métricas
- **Core Web Vitals** optimizados

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

## 🤝 Contacto

**Francisco Javier Mateo Hernández**
- 📧 Email: tuz_fco@yahoo.com.mx
- 📱 WhatsApp: 746 117 1449
- 💼 LinkedIn: [francisco-javier-mateo-hernandez](https://www.linkedin.com/in/francisco-javier-mateo-hernandez-b97334113/)

---

Desarrollado con ❤️ usando React + Vite + Framer Motion