import { createStore } from 'redux';
import libraryReducer from './libraryReducer';

const store = createStore(
  libraryReducer,
  // Redux DevTools Extension support
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;