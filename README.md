# 🎵 Biblioteca Musical (ReactII - EBAC)

Este proyecto forma parte del **módulo de Introducción a React** del curso de **Front-End Developer** de la **Escola Britânica de Artes Criativas e Tecnologia (EBAC)**.

La aplicación es una **versión estática** de una Biblioteca Musical construida con **React** utilizando **componentes de función**. El diseño se inspira en la interfaz de **YouTube Music** y está orientado a practicar los fundamentos esenciales de React: función, hooks como useState y useEffect.

---

## 🚀 Características del proyecto

* ✅ Estructura modular con componentes reutilizables.
* ✅ Componente `Header` que muestra el título de la aplicación.
* ✅ Componente `Song` que representa una canción individual (título, artista, duración).
* ✅ Componente raíz `App` que organiza los demás y muestra varias canciones.
* ✅ Componente SearchResults `SearchResults` que reciba un array de canciones ficticias como props.
* ✅ Componente Library `Library` que recibe un array de canciones ficticias como props.
* ✅ Estilos con `App.css` para simular el diseño de YouTube Music.
* ✅ Datos ficticios para mostrar una lista de canciones de forma estática.

---

## 🛠️ Tecnologías utilizadas

* React (con componentes de clase)
* JSX
* CSS3
* Node.js + npm (para entorno y dependencias)

---

## ⚙️ Instalación y ejecución en local

### 1. Clonar el repositorio

```bash
git clone https://github.com/LainerDonet/Modelo28_EBAC.git
cd Modelo28_EBAC
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm start
```

Esto abrirá la aplicación en tu navegador en: [http://localhost:3000](http://localhost:3000)

---

## 📚 Objetivos de aprendizaje

* Comprender la estructura de un proyecto React.
* Crear componentes de función y utilizar hooks como useState y useEffect
* Estilizar componentes con CSS modular.

---

## 📁 Estructura del proyecto

```
/src
│
├── /components
│   ├── Header.js             # Componente del encabezado
│   ├── Song.js               # Componente para una canción individual
|   ├── SearchResults.js      # Componente de Busqueda 
│   └── Library.js            # Componente para generra biblioteca
│
├── App.js             # Componente principal
├── App.css            # Estilos generales
└── index.js           # Punto de entrada de la app
```

---


---

## ✍️ Autor

**Lainer Felipe Donet Vasconcellos**
Este proyecto fue desarrollado como parte de los ejercicios prácticos del curso de Front-End en EBAC.

---

