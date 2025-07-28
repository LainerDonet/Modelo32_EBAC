# Migración a Redux - Biblioteca Musical

## 📋 Resumen de Cambios

Se ha implementado **Redux** para gestionar el estado global de la biblioteca musical personalizada del usuario. Esta migración permite un manejo más robusto y escalable del estado, especialmente para las funcionalidades de agregar y eliminar álbumes de la biblioteca.

## 🚀 Nuevas Dependencias

### Dependencias Agregadas
```bash
npm install redux@^5.0.1 react-redux@^9.1.0
```

### package.json actualizado
```json
{
  "dependencies": {
    "redux": "^5.0.1",
    "react-redux": "^9.1.0"
  }
}
```

## 🏗️ Nueva Estructura Redux

### Carpeta `src/redux/`
```
src/redux/
├── store.js              # Configuración del store Redux
├── libraryActions.js     # Action creators y types
└── libraryReducer.js     # Reducer para la biblioteca
```

### 1. Store (`src/redux/store.js`)
```javascript
import { createStore } from 'redux';
import libraryReducer from './libraryReducer';

const store = createStore(
  libraryReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

**Características:**
- Configurado con Redux DevTools
- Usa `libraryReducer` como reducer principal
- Exportado para uso global

### 2. Actions (`src/redux/libraryActions.js`)
```javascript
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song
});

export const removeSong = (songId) => ({
  type: REMOVE_SONG,
  payload: songId
});
```

**Funcionalidades:**
- `ADD_SONG`: Agregar álbum/canción a la biblioteca
- `REMOVE_SONG`: Eliminar álbum/canción por ID
- Action creators con payload estructurado

### 3. Reducer (`src/redux/libraryReducer.js`)
```javascript
const initialState = [];

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      // Verificar duplicados
      const songExists = state.some(song => song.idAlbum === action.payload.idAlbum);
      if (songExists) return state;
      return [...state, action.payload];
      
    case REMOVE_SONG:
      return state.filter(song => song.idAlbum !== action.payload);
      
    default:
      return state;
  }
};
```

**Características:**
- Estado inicial: array vacío
- Prevención de duplicados automática
- Inmutabilidad garantizada
- Filtrado por ID para eliminación

## 🔗 Integración con Componentes

### 4. Provider Setup (`src/index.js`)
```javascript
import { Provider } from 'react-redux';
import store from './redux/store';

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

**Cambios:**
- ✅ Aplicación envuelta con `Provider`
- ✅ Store disponible globalmente
- ✅ Todos los componentes tienen acceso a Redux

### 5. App.js - Eliminación de Estado Local
```javascript
// ANTES: Estado local
const [library, setLibrary] = useState([]);

// DESPUÉS: Redux
const library = useSelector(state => state);
```

**Cambios:**
- ❌ Eliminado `useState` para biblioteca
- ❌ Eliminado `addToLibrary` y `clearLibrary`
- ✅ Uso de `useSelector` para acceder al estado
- ✅ Componentes reciben datos del store Redux

### 6. SearchResults.js - Dispatch de Acciones
```javascript
import { useDispatch } from 'react-redux';
import { addSong } from '../../redux/libraryActions';

const dispatch = useDispatch();

const handleAddToLibrary = (album) => {
  if (!isAlbumInLibrary(album.idAlbum)) {
    dispatch(addSong(album));
  }
};
```

**Funcionalidades:**
- ✅ `useDispatch` para despachar acciones
- ✅ `handleAddToLibrary` usa Redux en lugar de props
- ✅ Verificación de duplicados con estado Redux
- ✅ UI actualizada automáticamente

### 7. Library.js - Gestión Completa con Redux
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';

const albums = useSelector(state => state);
const dispatch = useDispatch();

const handleRemoveSong = (albumId) => {
  dispatch(removeSong(albumId));
};

const handleClearLibrary = () => {
  albums.forEach(album => {
    dispatch(removeSong(album.idAlbum));
  });
};
```

**Nuevas funcionalidades:**
- ✅ Botón "✕" individual en cada álbum
- ✅ Eliminar álbum específico con `dispatch(removeSong)`
- ✅ "Limpiar biblioteca" elimina todos los álbumes
- ✅ Estado sincronizado automáticamente

## 🎯 Funcionalidades Implementadas

### ✅ Gestión de Biblioteca
- **Agregar álbumes**: Click en "Añadir a biblioteca"
- **Eliminar individual**: Botón "✕" en cada álbum
- **Limpiar todo**: Botón "Limpiar biblioteca"
- **Prevención de duplicados**: Verificación automática por ID

### ✅ Estado Global
- **Persistencia**: Estado mantenido durante navegación
- **Sincronización**: Todos los componentes se actualizan automáticamente
- **Inmutabilidad**: Estado Redux nunca se muta directamente

### ✅ Interfaz de Usuario
- **Estados visuales**: Botones muestran si álbum está agregado
- **Feedback inmediato**: UI se actualiza instantáneamente
- **Hover effects**: Botón eliminar visible al pasar mouse

## 🛠️ Guía de Instalación

### 1. Instalar Dependencias
```bash
npm install redux react-redux
```

### 2. Crear Estructura Redux
```bash
mkdir src/redux
# Crear archivos: store.js, libraryActions.js, libraryReducer.js
```

### 3. Actualizar Archivos Existentes
- `src/index.js` → Agregar Provider
- `src/App.js` → Integrar useSelector
- `src/components/SearchResults/SearchResults.js` → Agregar useDispatch
- `src/components/Library/Library.js` → Integrar Redux completo

### 4. Verificar Funcionamiento
```bash
npm start
```

## 📱 Flujo de Usuario

### Agregar Álbumes
1. Usuario busca artista
2. Aparecen álbumes en resultados
3. Click en "Añadir a biblioteca"
4. Redux despacha `ADD_SONG`
5. Reducer agrega álbum (si no existe)
6. UI se actualiza automáticamente

### Eliminar Álbumes
1. Usuario va a "Mi Biblioteca"
2. Ve álbumes guardados
3. Hover sobre álbum → aparece botón "✕"
4. Click en "✕" → Redux despacha `REMOVE_SONG`
5. Reducer filtra y elimina álbum
6. UI se actualiza automáticamente

## 🎨 Beneficios de la Migración

### 🚀 Performance
- Estado centralizado reduce re-renders innecesarios
- Componentes solo se actualizan cuando cambia su parte del estado

### 🧩 Escalabilidad
- Fácil agregar nuevas funcionalidades (favoritos, playlists, etc.)
- Estado predecible y debuggeable

### 🔧 Mantenibilidad
- Lógica de estado separada de componentes
- Actions y reducers reutilizables
- Redux DevTools para debugging

### 🎯 UX Mejorada
- Sincronización automática entre componentes
- Estado persistente durante navegación
- Feedback visual inmediato

## 🚦 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo con Redux DevTools
npm start

# Build para producción
npm run build

# Limpiar y reinstalar (si hay problemas)
rm -rf node_modules package-lock.json
npm install
```

## 🛡️ Características de Seguridad

- **Prevención de duplicados**: Reducer verifica IDs existentes
- **Inmutabilidad**: Estado nunca se modifica directamente
- **Validación**: Actions tienen estructura consistente
- **Estado predecible**: Cada action produce resultado esperado

## 📊 Redux DevTools

La aplicación incluye soporte para Redux DevTools:
- Instala la extensión Redux DevTools en tu navegador
- Inspecciona el estado en tiempo real
- Reproduce acciones (time-travel debugging)
- Monitorea dispatches y cambios de estado

¡La migración a Redux está completa y la aplicación está lista para usar! 🎉