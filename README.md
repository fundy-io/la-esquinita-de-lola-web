# La Esquinita de Lola

Web estática y sin dependencias para un bar centrado en desayunos. Está hecha con HTML, CSS y JavaScript nativos: no necesita base de datos, servidor, CMS ni licencias.

## Desarrollo local

```bash
python3 -m http.server 8080
```

Abre `http://127.0.0.1:8080`.

## Despliegue sin mantenimiento

### GitHub Pages

1. En el repositorio, abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/(root)`.
4. Guarda los cambios.

GitHub Pages sirve este sitio estático sin backend. Para un repositorio público, no requiere infraestructura propia.

### Bucket estático

Cualquier bucket con hosting estático (Cloudflare R2, AWS S3, Google Cloud Storage, etc.) puede servir directamente estos archivos. Configura `index.html` como documento principal y aplica caché a `styles.css`, `script.js` y `favicon.svg`.

## Antes de publicar definitivamente

La ficha de Google compartida no pudo consultarse automáticamente por un bloqueo de Google. Antes de activar la web permanente, completa o confirma en el HTML: dirección, teléfono, horario, redes sociales y carta real. No se han inventado esos datos.
