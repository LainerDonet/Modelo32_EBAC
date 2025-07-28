import { ADD_SONG, REMOVE_SONG } from './libraryActions';

const initialState = [];

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      // Verificar si la canción ya existe en la biblioteca
      const songExists = state.some(song => song.idAlbum === action.payload.idAlbum);
      if (songExists) {
        return state; // No agregar si ya existe
      }
      // Agregar la nueva canción al estado
      return [...state, action.payload];
      
    case REMOVE_SONG:
      // Eliminar la canción con el ID especificado
      return state.filter(song => song.idAlbum !== action.payload);
      
    default:
      return state;
  }
};

export default libraryReducer;