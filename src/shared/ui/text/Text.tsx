import classNames from 'classnames';
import { ReactNode } from 'react';
import cn from './Text.module.scss';

type TTextSize = 'large' | 'medium' | 'small' | 'tiny';
type TTextWeight = 'reg' | 'med' | 'sb';
type TTextAlign = 'left' | 'center' | 'right';
type TTextColor = 400 | 700 | 800 | 900 | 'white';

interface ITextProps {
  children: ReactNode;
  span?: boolean;
  size?: TTextSize;
  weight?: TTextWeight;
  className?: string;
  align?: TTextAlign;
  color?: TTextColor;
}

export default function Text(props: ITextProps) {
  const {
    children,
    span = false,
    size = 'medium',
    weight = 'reg',
    className,
    align = 'left',
    color = 700,
  } = props;

  const TextTag = span ? 'span' : 'p';

  const textClassName = classNames(
    cn.text,
    cn[`size_${size}`],
    cn[`weight_${weight}`],
    cn[`align_${align}`],
    cn[`color_${color}`],
    className,
  );

  return <TextTag className={textClassName}>{children}</TextTag>;
}
