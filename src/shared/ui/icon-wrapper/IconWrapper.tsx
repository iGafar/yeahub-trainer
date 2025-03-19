import classNames from 'classnames';
import { ReactNode } from 'react';
import cn from './IconWrapper.module.scss';

export type TIconWrapperColor = 'gray' | 'purple' | 'yellow';

interface IIconWrapperProps {
  children: ReactNode;
  color?: TIconWrapperColor;
  className?: string;
}

export default function IconWrapper(props: IIconWrapperProps) {
  const { children, color = 'gray', className } = props;

  return (
    <div className={classNames(cn.icon, cn[color], className)}>{children}</div>
  );
}
