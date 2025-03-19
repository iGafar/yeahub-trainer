import classNames from 'classnames';
import { ReactNode } from 'react';
import cn from './Box.module.scss';

type TBoxRadius = 12 | 16 | 24;
type TBoxBack = 'white' | 'yellow' | 'purple';
type TBoxSize = 'small' | 'medium' | 'large';

interface IBoxProps {
  children: ReactNode;
  radius?: TBoxRadius;
  withShadow?: boolean;
  back?: TBoxBack;
  size?: TBoxSize;
  className?: string;
}

export default function Box(props: IBoxProps) {
  const {
    children,
    withShadow = false,
    radius = 12,
    back = 'white',
    size = 'medium',
    className,
  } = props;

  const boxClassName = `${cn.box} ${cn[`radius_${radius}`]} ${cn[`back_${back}`]} ${cn[`size_${size}`]} ${withShadow ? cn.shadow : ''}`;

  return <div className={classNames(boxClassName, className)}>{children}</div>;
}
