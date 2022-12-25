import { configureStore, ThunkAction, Action, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { createMiddleware, createReducer } from 'async-selector-kit';
import weatherReducer from '../features/Weather/reducers';
import { reducer as burgerMenu } from 'redux-burger-menu';
//======================================================

const rootReducer = combineReducers({
  AsyncSelector: createReducer(),
  weather: weatherReducer,
  burgerMenu,
})

const middlewares = [
  createMiddleware()
]

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
})

// @ts-ignore
window.store = store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
