# AdaptativeFlow AI - Landing Page

## Descripción del Proyecto
Este proyecto contiene los archivos base para la landing page de **AdaptativeFlow AI**, diseñada con una estética "Dark Luxury". La web está construida con código puro (Vanilla) y es completamente responsiva, incluyendo animaciones interactivas y un diseño orientado al sector EdTech (Tecnología Educativa).

## Estructura de Archivos
Para que la página web funcione correctamente y cargue todos los recursos visuales, los archivos deben estar organizados estrictamente en esta estructura de carpetas:

```text
/ (Carpeta Principal del Proyecto)
│
├── index.html       # Archivo principal (Estructura y contenido de la web)
├── styles.css       # Archivo de diseño (Colores, modo oscuro, layout y responsividad)
├── script.js        # Archivo de interactividad (Animaciones de scroll, partículas y flip cards)
│
└── images/          # Carpeta obligatoria para los recursos visuales
    ├── logo.jpg          # Logo de AdaptativeFlow AI
    ├── hero_visual.jpg   # Imagen principal tridimensional (Portada)
    ├── service_1.jpg     # Imagen del servicio: App Móvil
    ├── service_2.jpg     # Imagen del servicio: Licencia Institucional
    ├── service_3.jpg     # Imagen del servicio: Extensión Asíncrona
    ├── service_4.jpg     # Imagen del servicio: Módulo Biométrico
    ├── service_5.jpg     # Imagen del servicio: Consultoría
    └── service_6.jpg     # Imagen del servicio: Ergonomía
```

## Detalles de los Archivos

### Archivos de Código
1. **`index.html`**: Contiene el esqueleto de la página. Incluye el menú de navegación, la sección principal (hero), tarjetas de servicios giratorias (flip cards), estadísticas de la plataforma y el pie de página (footer). *Nota: Asegurarse de que el archivo se llame exactamente `index.html` y no `index.html.html` para su correcta publicación.*
2. **`styles.css`**: Define la paleta de colores (Cyan/Light Blue sobre fondos ultra oscuros), las tipografías (Inter y Plus Jakarta Sans), el efecto "Glassmorphism" en las tarjetas y asegura que la web se adapte a celulares, tablets y computadoras.
3. **`script.js`**: Controla la lógica interactiva. Genera las partículas flotantes del fondo, anima los números (contadores) cuando el usuario hace scroll, oscurece el menú al bajar por la página y permite que las tarjetas giren al tocarlas en dispositivos móviles.

### Archivos de Imagen (`/images`)
Todas las imágenes han sido generadas mediante IA, respetando la coherencia visual de la marca y guardadas en formato `.jpg` para una carga óptima. Deben estar ubicadas dentro de una subcarpeta llamada `images` ubicada al mismo nivel que los archivos de código.