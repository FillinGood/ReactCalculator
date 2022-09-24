import React from 'react';
import {
  calculateInput,
  clearInput,
  dispatcher,
  numberInput,
  Operator,
  operatorInput
} from '../redux';
import { Button } from './Button';

export function Numpad() {
  const dispatch = dispatcher();

  function num(n: number) {
    return () => dispatch(numberInput(n));
  }
  function op(o: Operator) {
    return () => dispatch(operatorInput(o));
  }
  const calc = () => dispatch(calculateInput());

  const clear = () => dispatch(clearInput());

  React.useEffect(() => {
    const map: Record<string, () => void> = {
      0: num(0),
      1: num(1),
      2: num(2),
      3: num(3),
      4: num(4),
      5: num(5),
      6: num(6),
      7: num(7),
      8: num(8),
      9: num(9),
      '/': op('/'),
      '*': op('*'),
      '-': op('-'),
      '+': op('+'),
      Enter: calc
    };
    document.body.addEventListener('keydown', (e) => {
      const fn = map[e.key];
      if (fn) {
        fn();
        e.preventDefault();
        e.stopPropagation();
        e.cancelBubble = true;
        return false;
      }
    });
  }, []);

  return (
    <div className="numpad">
      <div className="numpad-row">
        <Button onClick={num(7)}>7</Button>
        <Button onClick={num(8)}>8</Button>
        <Button onClick={num(9)}>9</Button>
        <Button className="op" onClick={op('/')}>
          /
        </Button>
      </div>
      <div className="numpad-row">
        <Button onClick={num(4)}>4</Button>
        <Button onClick={num(5)}>5</Button>
        <Button onClick={num(6)}>6</Button>
        <Button className="op" onClick={op('*')}>
          *
        </Button>
      </div>
      <div className="numpad-row">
        <Button onClick={num(1)}>1</Button>
        <Button onClick={num(2)}>2</Button>
        <Button onClick={num(3)}>3</Button>
        <Button className="op" onClick={op('-')}>
          -
        </Button>
      </div>
      <div className="numpad-row">
        <Button onClick={clear}>C</Button>
        <Button onClick={num(0)}>0</Button>
        <Button className="op" onClick={calc}>
          =
        </Button>
        <Button className="op" onClick={op('+')}>
          +
        </Button>
      </div>
    </div>
  );
}
