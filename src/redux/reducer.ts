import {
  CALCULATE_INPUT,
  CalculatorAction,
  CLEAR_INPUT,
  NUMBER_INPUT,
  Operator,
  OPERATOR_INPUT
} from './actions';
import { preloadedState, StoreState } from './store';

export function reducer(
  state: StoreState | undefined,
  action: CalculatorAction
): StoreState {
  if (!state) return preloadedState;
  switch (action.type) {
    case NUMBER_INPUT: {
      let value = state.displayValue;
      if (state.hanging) value = 0;
      const strvalue = String(value) + action.value;
      if (strvalue.length > 13) return state;
      return { ...state, displayValue: +strvalue, hanging: false };
    }
    case OPERATOR_INPUT:
      return {
        ...state,
        operator: action.value,
        value: state.displayValue,
        hanging: true
      };
    case CALCULATE_INPUT: {
      if (state.operator === null) return state;
      const value = calc(state.value, state.displayValue, state.operator);
      return { value, displayValue: value, operator: null, hanging: true };
    }
    case CLEAR_INPUT:
      return preloadedState;
  }
  return state;
}

function calc(a: number, b: number, operator: Operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}
