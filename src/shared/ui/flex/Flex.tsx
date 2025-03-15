import classNames from 'classnames';
import { ReactNode } from 'react';
import cn from './Flex.module.scss';

type TJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type TAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type TDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface IFlexProps {
  justify?: TJustify;
  align?: TAlign;
  direction?: TDirection;
  gap?: number | string;
  children: ReactNode;
  className?: string;
}

export default function Flex(props: IFlexProps) {
  const {
    justify = 'flex-start',
    align = 'stretch',
    direction = 'row',
    gap = 0,
    children,
    className,
  } = props;

  const styles = {
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
  };

  return (
    <div className={classNames(className, cn.flex)} style={styles}>
      {children}
    </div>
  );
}
