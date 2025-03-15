import { JSX, ReactNode } from 'react';
import cn from './Title.module.scss';

interface ITitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

export default function Title(props: ITitleProps) {
  const { level, children } = props;
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={cn.title}>{children}</HeadingTag>;
}
