// src/redux/slices/librarySlice.js
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial: array vacío para almacenar las canciones en la biblioteca
const initialState = [];

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    // Agregar una canción al array, verificando que no exista previamente
    addSong: (state, action) => {
      const songExists = state.some(song => song.idAlbum === action.payload.idAlbum);
      if (!songExists) {
        state.push(action.payload);
      }
    },
    // Eliminar una canción según su ID
    removeSong: (state, action) => {
      return state.filter(song => song.idAlbum !== action.payload);
    }
  }
});

// Exportar las acciones (se generan automáticamente)
export const { addSong, removeSong } = librarySlice.actions;

// Exportar el reducer como default export
export default librarySlice.reducer;