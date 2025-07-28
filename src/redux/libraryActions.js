// Action types
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

// Action creators
export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song
});

export const removeSong = (songId) => ({
  type: REMOVE_SONG,
  payload: songId
});