export const NUMBER_INPUT = 'NUMBER_INPUT';
export const OPERATOR_INPUT = 'OPERATOR_INPUT';
export const CALCULATE_INPUT = 'CALCULATE_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';

export interface NumberInputAction {
  type: typeof NUMBER_INPUT;
  value: number;
}

export type Operator = '+' | '-' | '*' | '/';

export interface OperatorInputAction {
  type: typeof OPERATOR_INPUT;
  value: Operator;
}

export interface CalculateInputAction {
  type: typeof CALCULATE_INPUT;
}

export interface ClearInputAction {
  type: typeof CLEAR_INPUT;
}

export type CalculatorAction =
  | NumberInputAction
  | OperatorInputAction
  | CalculateInputAction
  | ClearInputAction;

export function numberInput(value: number): NumberInputAction {
  return { type: NUMBER_INPUT, value };
}

export function operatorInput(value: Operator): OperatorInputAction {
  return { type: OPERATOR_INPUT, value };
}

export function calculateInput(): CalculateInputAction {
  return { type: CALCULATE_INPUT };
}

export function clearInput(): ClearInputAction {
  return { type: CLEAR_INPUT };
}
