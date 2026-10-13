import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
    
export const store = configureStore({
  reducer:rootReducer,
  devTools: import.meta.env.DEV,
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store