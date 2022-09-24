import { StoreState } from './store';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { CalculatorAction } from './actions';

export { StoreState, store } from './store';
export {
  numberInput,
  operatorInput,
  calculateInput,
  clearInput,
  Operator
} from './actions';

export function select<T>(fn: (state: StoreState) => T): T {
  return useSelector<StoreState, T>(fn);
}

export function dispatcher(): Dispatch<CalculatorAction> {
  return useDispatch();
}
