import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuState {
  active: string;
}

const initialState: MenuState = {
  active: '',
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = menuSlice.actions;

export default menuSlice.reducer;
