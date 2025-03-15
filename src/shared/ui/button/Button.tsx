import { ReactNode } from 'react';

import cn from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button(props: IButtonProps) {
  const { children, onClick } = props;

  return (
    <button onClick={onClick} className={cn.btn}>
      {children}
    </button>
  );
}
