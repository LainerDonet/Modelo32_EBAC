// src/redux/slices/searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk asíncrono para buscar canciones
export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (artistName, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(artistName)}`
      );
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Estado inicial
const initialState = {
  results: [], // Array para almacenar las canciones obtenidas de la API
  loading: false, // Booleano para indicar si la app está cargando
  error: null, // Mensaje de error, si ocurre
  searchTerm: '' // Término de búsqueda actual
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // Reducer para reiniciar los resultados
    resetResults: (state) => {
      state.results = [];
      state.error = null;
      state.searchTerm = '';
    },
    // Reducer para limpiar solo el error
    clearError: (state) => {
      state.error = null;
    }
  },
  // ExtraReducers para manejar los estados del thunk asíncrono
  extraReducers: (builder) => {
    builder
      // Pending: Cambia loading a true y limpia error
      .addCase(fetchSongs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.searchTerm = action.meta.arg; // Guardar el término de búsqueda
      })
      // Fulfilled: Almacena los datos obtenidos en results y cambia loading a false
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.album || [];
        state.error = null;
      })
      // Rejected: Almacena el mensaje de error en error
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error al buscar álbumes';
        state.results = [];
      });
  }
});

// Exportar las acciones
export const { resetResults, clearError } = searchSlice.actions;

// Exportar el reducer
export default searchSlice.reducer;