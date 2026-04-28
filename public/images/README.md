# Techneterra — Image Upload Guide

## Carpeta para imágenes nuevas: `/public/images/`

Arrastra tus fotos aquí y sigue este proceso:

---

## Paso 1 — Subir las imágenes

Copia tus archivos `.jpg` o `.png` a esta carpeta `/public/images/`:

```
techneterra-web/
  public/
    images/
      ← PON TUS FOTOS AQUÍ
      ttr500e-field.jpg       ← ya existe
      ttr500e-render.jpg      ← ya existe
      team-robot.jpg          ← ya existe
      landscape-banner.jpg    ← ya existe
```

## Paso 2 — Registrar en la galería

Abre `src/components/PhotoGallery.tsx` y agrega tus fotos al array `PHOTOS`:

```tsx
const PHOTOS = [
  // ... fotos existentes ...
  
  // AGREGA AQUÍ:
  { src: '/images/TU_FOTO.jpg', alt: 'Descripción', caption: 'Caption opcional' },
]
```

## Paso 3 — Rebuild

```bash
npm run build
```

Los archivos generados van a `/out/` — estos son los que se despliegan al servidor.

---

## Formatos soportados
- `.jpg` / `.jpeg` — recomendado para fotos de campo
- `.png` — para renders, logos con transparencia
- `.webp` — máxima compresión (Next.js optimizado)

## Tamaños recomendados
- Foto hero/featured: 2400×1600px mínimo
- Galería: 1200×800px mínimo
- Thumbnails: 600×400px

## Convención de nombres
```
ttr500e-[contexto].jpg       → fotos del robot TTR-500E
ttr300e-[contexto].jpg       → fotos del robot TTR-300E  
field-[ubicacion].jpg        → fotos de campo
team-[evento].jpg            → fotos del equipo
driscolls-[fecha].jpg        → fotos campo Driscoll's
```
