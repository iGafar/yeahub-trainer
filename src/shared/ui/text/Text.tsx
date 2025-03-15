import { ReactNode } from 'react';

interface ITextProps {
  children: ReactNode;
}

export default function Text(props: ITextProps) {
  const { children } = props;

  return <p>{children}</p>;
}
