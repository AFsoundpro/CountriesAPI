import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: counterReducer,
  middleware: [thunkMiddleware, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;