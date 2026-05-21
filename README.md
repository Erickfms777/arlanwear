# Arlanwear

Sitio web de comercio electrónico orientado a moda de lujo. Desarrollado con tecnologías web estándar (HTML5, CSS3 y JavaScript Vanilla), sin dependencia de frameworks externos. Incluye carrito de compras funcional, diseño responsive y animaciones mediante CSS y la API de IntersectionObserver.

**URL en producción:** [erickfms777.github.io/arlanwear](https://erickfms777.github.io/arlanwear/index.html)

---

## Estado del proyecto

Este sitio web se encuentra actualmente en desarrollo. Se trata de un proyecto escolar en curso, por lo que algunas funcionalidades pueden estar incompletas o sujetas a cambios. Las iteraciones se realizan de forma continua conforme avanza el desarrollo académico.

| Elemento | Estado |
|----------|--------|
| Estructura de páginas | Completado |
| Estilos y diseño visual | Completado |
| Responsive (móvil y tablet) | Completado |
| Carrito de compras | Completado |
| Pasarela de pago (checkout) | En desarrollo |
| Páginas de producto individual | Pendiente |
| Backend / base de datos | Pendiente |

---

## Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica de las 4 páginas |
| CSS3 | Estilos, animaciones y diseño responsive |
| JavaScript ES6 | Lógica del carrito e interactividad |
| Google Fonts | Tipografías Cormorant Garamond y Montserrat |
| Unsplash CDN | Imágenes de productos y fondos |
| localStorage API | Persistencia del carrito entre páginas |
| GitHub Pages | Despliegue y hosting |

---

## Estructura del proyecto

```
arlanwear/
│
├── index.html          → Página principal
├── tienda.html         → Tienda con 8 productos y filtros por categoría
├── colecciones.html    → Colecciones editoriales
├── contacto.html       → Formulario de contacto
│
├── estilos.css         → Estilos globales, animaciones y breakpoints
├── cart.js             → Sistema de carrito (objeto Cart)
│
└── Arlanwear_files/    → Recursos de imagen propios (logo)
```

---

## Funcionalidades

### Carrito de compras

- Agregar y eliminar productos
- Modificar la cantidad de cada ítem
- Cálculo automático del subtotal
- Persistencia entre páginas mediante `localStorage`
- Panel lateral deslizable (sidebar)
- Notificación visual (toast) al agregar productos
- Contador animado en el ícono del carrito

### Diseño e interfaz

- Paleta de color basada en dorado, negro y crema
- Header fijo con efecto de desenfoque (backdrop-filter) al hacer scroll
- Animaciones de entrada al hacer scroll con IntersectionObserver
- Hero a pantalla completa con imagen de fondo
- Efectos hover en tarjetas de productos y categorías

### Responsive

| Breakpoint | Comportamiento |
|------------|----------------|
| Mayor a 1024px | Navegación horizontal, 4 columnas de productos |
| Menor o igual a 1024px | 3 columnas de productos |
| Menor o igual a 768px | Menú hamburguesa, 2 columnas de productos |
| Menor o igual a 480px | 1 columna, layout completamente apilado |

### Páginas

- **index.html** — Hero, sección de categorías, productos destacados, banner intermedio y newsletter
- **tienda.html** — 8 productos con filtros por categoría (calzado, remeras, pantalones, chaquetas)
- **colecciones.html** — Grid editorial con 6 colecciones: Street Luxe, Edición Limitada, Clásicos, Noir, Resort y Avant-Garde
- **contacto.html** — Formulario con campos de nombre, apellido, email, asunto y mensaje

---

## Instalación y uso

### Entorno local

1. Clonar o descargar el repositorio
2. Abrir `index.html` directamente en el navegador

No requiere instalación de dependencias, servidor local ni herramientas de compilación.

### Despliegue en GitHub Pages

1. Subir todos los archivos a la rama `main` del repositorio
2. Ir a **Settings → Pages**
3. Seleccionar la rama `main` y la carpeta `/ (root)` como origen
4. Guardar — el sitio quedará disponible en `https://usuario.github.io/repositorio/`

---

## Variables CSS

El archivo `estilos.css` define los tokens de diseño como variables globales:

```css
:root {
  --gold:       #b8973a;   /* Dorado principal */
  --gold-light: #d4b05a;   /* Dorado claro */
  --gold-dark:  #8b7224;   /* Dorado oscuro, hover y precios */
  --black:      #0a0a0a;   /* Negro profundo */
  --off-black:  #111111;   /* Negro suave, fondo newsletter */
  --cream:      #faf9f7;   /* Fondo general */
  --white:      #ffffff;
  --gray:       #999999;   /* Textos secundarios */
}
```

---

## API del carrito (`cart.js`)

El carrito está implementado como un objeto global `Cart` con los siguientes métodos:

```javascript
// Agregar un producto al carrito
Cart.add({ id: 'p1', name: 'Zapatillas', price: 650, img: 'url' })

// Eliminar un producto por ID
Cart.remove('p1')

// Modificar la cantidad (delta positivo o negativo)
Cart.changeQty('p1', +1)
Cart.changeQty('p1', -1)  // Si qty llega a 0, se elimina automáticamente

// Consultar totales
Cart.total()   // Retorna el total en número
Cart.count()   // Retorna la cantidad total de ítems
```

---

## Créditos

- Imágenes: [Unsplash](https://unsplash.com) — licencia de uso libre
- Tipografías: [Google Fonts](https://fonts.google.com) — Cormorant Garamond y Montserrat
- Hosting: [GitHub Pages](https://pages.github.com)
- Logo: generado con ChatGPT Image

---

## Autor

Arlanwear — Moda de lujo que define tu identidad.  
Correo: info@arlanwear.com  
Sitio: [erickfms777.github.io/arlanwear](https://erickfms777.github.io/arlanwear/index.html)

---

© 2026 Arlanwear. Todos los derechos reservados.

Este proyecto está protegido bajo una licencia de derechos reservados. Queda prohibida
la copia, modificación o distribución del código sin autorización expresa del autor.
Consultar el archivo [LICENSE](./LICENSE) para más detalles.
