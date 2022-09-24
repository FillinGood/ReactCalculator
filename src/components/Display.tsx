import React from 'react';
import classNames from 'classnames';
import { select } from '../redux';

export function Display() {
  const displayValue = select((s) => s.displayValue);
  const len = String(displayValue).length;
  const size = len < 6 ? 'big' : len > 9 ? 'small' : 'med';
  return (
    <div className="display">
      <div className={classNames('value', size)}>{displayValue}</div>
    </div>
  );
}
