import { ReactNode } from 'react';

import classNames from 'classnames';
import cn from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

export default function Button(props: IButtonProps) {
  const { children, onClick, fullWidth } = props;

  return (
    <button
      onClick={onClick}
      className={classNames(cn.btn, fullWidth && cn.full)}
    >
      {children}
    </button>
  );
}
