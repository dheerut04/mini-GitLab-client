import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../components/Login/reducer.ts';
import { diffViewReducer } from '../components/Diffview/reducer.ts';

export const store = configureStore({
  reducer: {
// @ts-ignore
    login: loginReducer,
// @ts-ignore
    diffView: diffViewReducer,
  }
});

  