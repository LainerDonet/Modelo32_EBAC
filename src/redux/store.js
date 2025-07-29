// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './slices/librarySlice';
import searchReducer from './slices/searchSlice';

// Configurar el store con Redux Toolkit
const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer
  },
  // Redux DevTools está incluido por defecto en configureStore
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;