import classNames from 'classnames';
import { JSX, ReactNode } from 'react';
import cn from './Title.module.scss';

type TTextAlign = 'left' | 'center' | 'right';
interface ITitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
  align?: TTextAlign;
}

export default function Title(props: ITitleProps) {
  const { level = 2, children, className, align = 'left' } = props;
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      className={classNames(
        cn.title,
        cn[`h${level}`],
        cn[`align_${align}`],
        className,
      )}
    >
      {children}
    </HeadingTag>
  );
}
