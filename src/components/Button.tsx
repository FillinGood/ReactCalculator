import React from 'react';

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const onClick = React.useCallback(() => props.onClick?.(), [props.onClick]);
  return (
    <button className={props.className} onClick={onClick}>
      {props.children}
    </button>
  );
}
