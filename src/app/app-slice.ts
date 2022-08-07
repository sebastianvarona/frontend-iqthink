import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Adventure, Character } from './types';

export interface AppState {
  adventures: Array<Adventure>;
  charactersFilter: Array<string>;
}

const initialState: AppState = {
  adventures: [],
  charactersFilter: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addAdventure: (state, action: PayloadAction<Adventure>): void => {
      state.adventures.push(action.payload);
    },
    toggleCharacter: (state, action: PayloadAction<Character>): void => {
      !state.charactersFilter.includes(action.payload._id)
        ? state.charactersFilter.push(action.payload._id)
        : (state.charactersFilter = state.charactersFilter.filter(
            (character) => character !== action.payload._id
          ));
    },
  },
});

export const { addAdventure, toggleCharacter } = appSlice.actions;

export default appSlice.reducer;
