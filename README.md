# 🎵 Biblioteca Musical con React y TheAudioDB API

Este proyecto forma parte del **módulo de Introducción a React III** del curso de **Front-End Developer** de la **Escola Britânica de Artes Criativas e Tecnologia (EBAC)**.

Este proyecto es una biblioteca musical construida con React que se conecta dinámicamente a la [API pública TheAudioDB](https://www.theaudiodb.com/api_guide.php) para mostrar información real de artistas, álbumes y canciones. Esta integración mejora la experiencia de usuario, reemplazando datos ficticios por datos reales obtenidos mediante peticiones HTTP.

## 🚀 Funcionalidades implementadas

### 1. 🔗 Conexión con API externa
- Se integró la API [TheAudioDB](https://www.theaudiodb.com/) para:
  - Buscar álbumes de un artista.
  - Consultar detalles de un álbum específico.

### 2. 🧭 Navegación con React Router
- Se instalaron las dependencias necesarias de `react-router-dom`.
- Se configuraron las rutas principales:
  - `/` → Página principal para búsquedas.
  - `/song/:id` → Página de detalles de una canción.

### 3. 🔍 Componente de búsqueda (`SearchBar`)
- Input controlado con `useState` para ingresar el nombre del artista.
- Botón o tecla Enter para activar la búsqueda y realizar la consulta a la API.

### 4. 📡 Hook personalizado `useFetch`
- Se creó un custom hook para manejar:
  - Estados de carga.
  - Errores en peticiones.
  - Datos obtenidos desde la API.

### 5. 🎧 Resultados (`SearchResults`)
- Renderiza información básica de las canciones:
  - Título.
  - Artista.
  - Álbum.
- Incluye enlaces con `<Link>` hacia los detalles de cada canción.

### 6. 📝 Página de detalles (`SongDetail`)
- Utiliza `useParams()` para obtener el ID desde la URL.
- Hace una nueva petición a la API para obtener detalles del álbum.
- Muestra información específica de la canción seleccionada.

### 7. ⚙️ Renderizado condicional
- Muestra mensajes mientras los datos se están cargando ("Cargando...").
- Muestra mensajes de error claros si hay fallos en la API.
- Renderiza contenido solo si los datos están disponibles correctamente.

---

## 📦 Instalación y ejecución local

```bash
git clone https://github.com/LainerDonet/Modulo29_EBAC.git
cd tu-repositorio
npm install
npm start


