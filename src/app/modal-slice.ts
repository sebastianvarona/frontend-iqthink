import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from './types';

export interface ModalState {
  active: boolean;
  characters: Character[];
  selected: Character;
  query: string;
}

const initialState: ModalState = {
  active: false,
  characters: [],
  selected: {
    _id: '',
    name: '',
    race: '',
  },
  query: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleActive: (state): void => {
      state.active = !state.active;
    },
    setActive: (state, action: PayloadAction<boolean>): void => {
      state.active = action.payload;
    },
    setCharacters: (state, action: PayloadAction<Character[]>): void => {
      state.characters = action.payload;
    },
    setSelected: (state, action: PayloadAction<Character>): void => {
      state.selected = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>): void => {
      state.query = action.payload;
    },
  },
});

export const { toggleActive, setActive, setCharacters, setSelected, setQuery } =
  modalSlice.actions;

export default modalSlice.reducer;
