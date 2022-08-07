import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app-slice';
import menuReducer from './menu-slice';
import modalReducer from './modal-slice';

const store = configureStore({
  reducer: {
    app: appReducer,
    menu: menuReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
