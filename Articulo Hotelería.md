# Solución: Error 404 en Imágenes en GitHub Pages

## Problema Identificado
Las imágenes no se mostraban en el sitio productivo en GitHub Pages, generando errores 404:
```
GET https://fmateo2023.github.io/MyPage/assets/myweb1.png 404 (Not Found)
GET https://fmateo2023.github.io/MyPage/assets/myweb2.png 404 (Not Found)
GET https://fmateo2023.github.io/MyPage/assets/perfil.jpg 404 (Not Found)
GET https://fmateo2023.github.io/MyPage/assets/cbtis-ia.jpeg 404 (Not Found)
```

## Causa del Problema
Las imágenes estaban referenciadas con rutas relativas incorrectas (`./assets/`) en lugar de rutas absolutas (`/assets/`). Vite solo copia automáticamente los archivos de la carpeta `public/` al build final.

## Estructura de Archivos Corregida
```
MyPage/
├── public/
│   └── assets/          # ✅ Imágenes aquí se copian automáticamente
│       ├── perfil.jpg
│       ├── myweb1.png
│       ├── myweb2.png
│       ├── cbtis-ia.jpeg
│       ├── cbtis-ia2.jpeg
│       ├── foro-industrial-portuario.jpg
│       ├── foro-industrial-portuario-cd-carmen.jpg
│       └── idea-guanajuato.jpg
├── src/
│   └── assets/          # ❌ Estas NO se copian automáticamente
└── assets/              # ❌ Estas NO se copian automáticamente
```

## Cambios Realizados

### 1. Corrección de Rutas en Hero.jsx
```jsx
// ❌ Antes
backgroundImage: 'url(./assets/perfil.jpg)',

// ✅ Después
backgroundImage: 'url(/assets/perfil.jpg)',
```

### 2. Corrección de Rutas en Portfolio.jsx
```jsx
// ❌ Antes
image: "./assets/myweb1.png",
image: "./assets/myweb2.png",

// ✅ Después
image: "/assets/myweb1.png",
image: "/assets/myweb2.png",
```

### 3. Corrección de Rutas en Participations.jsx
```jsx
// ❌ Antes
image: "./assets/cbtis-ia.jpeg",
image: "./assets/cbtis-ia2.jpeg",
image: "./assets/foro-industrial-portuario.jpg",
image: "./assets/foro-industrial-portuario-cd-carmen.jpg",
image: "./assets/idea-guanajuato.jpg",

// ✅ Después
image: "/assets/cbtis-ia.jpeg",
image: "/assets/cbtis-ia2.jpeg",
image: "/assets/foro-industrial-portuario.jpg",
image: "/assets/foro-industrial-portuario-cd-carmen.jpg",
image: "/assets/idea-guanajuato.jpg",
```

## Configuración de Vite
La configuración en `vite.config.js` está correcta:
```js
export default defineConfig({
  plugins: [react()],
  base: '/MyPage/',           // Ruta base para GitHub Pages
  build: {
    outDir: 'dist',           // Directorio de salida
    assetsDir: 'assets'       // Subdirectorio para assets
  }
})
```

## Verificación del Build
Después del build, las imágenes se copian correctamente:
```
dist/
├── assets/
│   ├── cbtis-ia.jpeg          ✅
│   ├── cbtis-ia2.jpeg         ✅
│   ├── foro-industrial-portuario.jpg ✅
│   ├── foro-industrial-portuario-cd-carmen.jpg ✅
│   ├── idea-guanajuato.jpg    ✅
│   ├── myweb1.png             ✅
│   ├── myweb2.png             ✅
│   ├── perfil.jpg             ✅
│   └── [otros archivos CSS/JS]
└── index.html
```

## Mejoras en GitHub Actions
Se actualizó el workflow para mejor debugging:
```yaml
- name: List build contents
  run: |
    echo "Listing dist directory:"
    ls -la dist/
    echo "Listing assets directory:"
    ls -la dist/assets/
```

## Reglas para Futuras Imágenes

### ✅ Hacer:
1. Colocar todas las imágenes en `public/assets/`
2. Referenciar con rutas absolutas: `/assets/imagen.jpg`
3. Verificar que aparezcan en `dist/assets/` después del build

### ❌ No hacer:
1. Colocar imágenes en `src/assets/` para uso directo en componentes
2. Usar rutas relativas: `./assets/imagen.jpg`
3. Asumir que las imágenes se copiarán automáticamente desde cualquier carpeta

## Comandos de Verificación
```bash
# Build local
npm run build

# Verificar que las imágenes se copiaron
ls -la dist/assets/

# Deploy a GitHub Pages
npm run deploy
```

## Resultado
✅ Todas las imágenes ahora se cargan correctamente en producción
✅ No más errores 404 en GitHub Pages
✅ Sitio web completamente funcional