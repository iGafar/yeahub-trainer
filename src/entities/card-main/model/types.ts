import { TIconWrapperColor } from '@/shared/ui/icon-wrapper/IconWrapper';
import { ReactNode } from 'react';

export type TCardMainType = 'default' | 'primary' | 'secondary';

export interface ICardMainProps {
  icon: ReactNode;
  title?: string;
  text?: string;
  children?: ReactNode;
  className?: string;
  type?: TCardMainType;
  iconType?: TIconWrapperColor;
}
