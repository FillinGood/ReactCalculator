import { configureStore } from '@reduxjs/toolkit';
import { Operator } from './actions';
import { reducer } from './reducer';

export interface StoreState {
  displayValue: number;
  operator: Operator | null;
  value: number;
  hanging: boolean;
}

export const preloadedState: StoreState = {
  displayValue: 0,
  operator: null,
  value: 0,
  hanging: false
};

export const store = configureStore({
  reducer,
  preloadedState,
  devTools: true
});
