# Refactorización a Styled-Components

## 📋 Resumen de Cambios

Se ha refactorizado completamente el proyecto de React para reemplazar los estilos CSS tradicionales con styled-components, organizando mejor los estilos y agregando funcionalidad dinámica basada en props.

## 🚀 Instalación

### 1. Instalar Styled-Components

```bash
npm install styled-components@^6.1.8
```

### 2. Archivos Eliminados

Los siguientes archivos CSS ya no son necesarios y deben eliminarse:
- `src/App.css`
- `src/index.css` (se mantiene solo para referencia, pero no se importa)

### 3. Nueva Estructura de Archivos

```
src/
├── App.js                      # Componente principal
├── index.js                    # Punto de entrada (sin CSS imports)
├── styles/
│   ├── GlobalStyles.js         # Estilos globales
│   ├── theme.js               # Tema completo
│   ├── App.styles.js          # Estilos del App
│   └── Button.styles.js       # Botones reutilizables
├── components/
│   ├── Header.js & Header.styles.js
│   ├── SearchBar.js & SearchBar.styles.js
│   ├── Song.js & Song.styles.js
│   ├── SearchResults.js & SearchResults.styles.js
│   ├── SongDetail.js & SongDetail.styles.js
│   └── Library.js & Library.styles.js
└── hooks/
    └── useFetch.js            # Sin cambios
```

## 🎨 Características Implementadas

### 1. Tema Global (YouTube Music Style)

- **Colores**: Esquema oscuro inspirado en YouTube Music
- **Tipografía**: Roboto con diferentes pesos
- **Espaciado**: Sistema consistente de espaciado
- **Breakpoints**: Responsive design
- **Animaciones**: Transiciones suaves

### 2. Estilos Dinámicos con Props

#### Ejemplos de Props Implementadas:

**Song Component:**
```javascript
<Song 
  title="Ma Meilleure Ennemie" 
  artist="Stromae y Pomme" 
  duration="2:49" 
  imagen="/img/ma_meilleure.png" 
  isHighlighted={true}  // ← Prop dinámica
/>
```

**Navigation Links:**
```javascript
<NavLink 
  to="/library" 
  $isActive={location.pathname === '/library'}  // ← Prop dinámica
>
  Mi Biblioteca
</NavLink>
```

**Add to Library Button:**
```javascript
<AddToLibraryButton 
  $isAdded={isAlbumInLibrary(album.idAlbum)}  // ← Prop dinámica
  onClick={() => !isAdded && onAddToLibrary(album)}
>
  {isAdded ? 'Ya en biblioteca' : 'Añadir a biblioteca'}
</AddToLibraryButton>
```

### 3. Funcionalidades Mejoradas

- **Biblioteca Personal**: Los álbumes se pueden agregar y no se duplican
- **Estados Visuales**: Indicadores visuales cuando un álbum ya está en biblioteca
- **Animaciones**: Hover effects y transiciones suaves
- **Responsive**: Diseño adaptable a diferentes pantallas
- **Accesibilidad**: Focus states y contrastes mejorados

## 🛠️ Guía de Uso

### 1. Usando el Tema

```javascript
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

### 2. Creando Componentes Estilizados

```javascript
import styled from 'styled-components';

const StyledComponent = styled.div`
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.accent.primary : theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
`;
```

### 3. Props Dinámicas

Usa el prefijo `$` para props que no deben pasarse al DOM:

```javascript
const DynamicButton = styled.button`
  background: ${({ theme, $variant }) => 
    $variant === 'primary' ? theme.colors.accent.gradient : theme.colors.neutral.gradient};
  opacity: ${({ $isDisabled }) => $isDisabled ? 0.6 : 1};
`;

// Uso
<DynamicButton $variant="primary" $isDisabled={false}>
  Click me
</DynamicButton>
```

## 🎯 Beneficios de la Refactorización

1. **Organización**: Cada componente tiene sus propios estilos
2. **Reutilización**: Tema y componentes reutilizables
3. **Dinamismo**: Estilos que cambian según props y estado
4. **Mantenibilidad**: Código más limpio y fácil de mantener
5. **Performance**: CSS-in-JS optimizado
6. **Developer Experience**: IntelliSense y TypeScript support

## 🚦 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar tests
npm test
```

## 📱 Características Responsive

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: 768px (mobile), 1024px (tablet), 1200px (desktop)
- **Grid Responsive**: Albums grid se adapta automáticamente
- **Navigation**: Menu responsive en móviles

## 🎨 Paleta de Colores

```javascript
// Backgrounds
primary: '#121212'    // Fondo principal
secondary: '#1e1e1e'  // Cards y elementos
tertiary: '#2a2a2a'   // Hover states

// Texto
primary: '#fff'       // Texto principal
secondary: '#aaa'     // Texto secundario
muted: '#888'         // Texto deshabilitado

// Accent (YouTube Music Style)
primary: '#ff0000'    // Rojo principal
secondary: '#ff3c5f'  // Rojo claro
gradient: 'linear-gradient(90deg, #ff3c5f 0%, #ff7c2b 100%)'
```

¡La refactorización está completa y lista para usar! 🎉

