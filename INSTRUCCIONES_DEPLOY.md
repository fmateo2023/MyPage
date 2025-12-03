# 🚀 Guía de Deploy a GitHub Pages

## Pasos para publicar tu sitio web

### 1. Preparar el repositorio

```bash
# Navegar al directorio del proyecto
cd MyPage

# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: Portfolio profesional"
```

### 2. Crear repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Click en "New repository"
3. Nombra tu repositorio (ej: `MyPage` o `portfolio`)
4. **NO** inicialices con README (ya tienes uno)
5. Click "Create repository"

### 3. Conectar con GitHub

```bash
# Conectar con tu repositorio (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/MyPage.git

# Subir código
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings**
3. Scroll hasta **Pages** en el menú lateral
4. En **Source**, selecciona **GitHub Actions**

### 5. El workflow ya está configurado

El archivo `.github/workflows/deploy.yml` ya está incluido en el proyecto y configurado correctamente.

### 6. Actualizar configuración (si es necesario)

**En `vite.config.js`**, actualiza la base URL si tu repositorio tiene otro nombre:
```js
export default defineConfig({
  plugins: [react()],
  base: '/MyPage/', // Cambia por el nombre de tu repositorio
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

**En `package.json`**, actualiza el homepage:
```json
{
  "homepage": "https://TU_USUARIO.github.io/MyPage"
}
```

### 7. Deploy automático

```bash
# El workflow se ejecutará automáticamente al hacer push
git add .
git commit -m "Deploy portfolio"
git push
```

### 8. Verificar deploy

1. Ve a tu repositorio en GitHub
2. Click en la pestaña **Actions**
3. Verifica que el workflow se ejecute correctamente
4. Una vez completado, tu sitio estará en: `https://TU_USUARIO.github.io/MyPage`

## 🔧 Deploy manual (alternativo)

Si prefieres deploy manual:

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Ejecutar deploy
npm run deploy
```

## ⚡ Deploy rápido con comandos

```bash
# Comando completo para deploy
git add . && git commit -m "Update portfolio" && git push
```

## 🐛 Solución de problemas comunes

### Error: "Failed to load resource"
- Verifica que la `base` en `vite.config.js` coincida con el nombre del repositorio

### Error: "404 Page not found"
- Asegúrate de que GitHub Pages esté configurado correctamente
- Verifica que el workflow se haya ejecutado sin errores

### Error: "Build failed"
- Revisa que todas las dependencias estén instaladas: `npm install`
- Verifica que no haya errores de sintaxis: `npm run build`

### Cambios no se reflejan
- Espera unos minutos (GitHub Pages puede tardar)
- Verifica que el workflow se haya ejecutado
- Limpia caché del navegador (Ctrl+F5)

## 📱 Verificar funcionamiento

Una vez desplegado, prueba tu sitio en:
- Diferentes navegadores (Chrome, Firefox, Safari)
- Dispositivos móviles
- Diferentes tamaños de pantalla

## 🎯 Próximos pasos

1. **Personalizar contenido**: Actualiza textos, imágenes y datos de contacto
2. **Agregar analytics**: Google Analytics o similar
3. **Optimizar SEO**: Meta tags, sitemap, robots.txt
4. **Dominio personalizado**: Opcional, configurar dominio propio

---

¡Tu portfolio profesional estará listo en minutos! 🚀