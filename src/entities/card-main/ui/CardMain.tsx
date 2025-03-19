import { Box } from '@/shared/ui/box';
import IconWrapper from '@/shared/ui/icon-wrapper/IconWrapper';
import { Text } from '@/shared/ui/text';
import classNames from 'classnames';
import { ICardMainProps } from '../model/types';
import cn from './CardMain.module.scss';

export default function CardMain(props: ICardMainProps) {
  const {
    icon,
    title,
    text,
    children,
    className,
    type = 'default',
    iconType = 'gray',
  } = props;

  // const back = type === 'default' ? 'white' : 'purple';

  const back = (function () {
    switch (type) {
      case 'secondary':
        return 'yellow';
      case 'primary':
        return 'purple';
      default:
        return 'white';
    }
  })();

  return (
    <Box back={back} className={classNames(cn.card, cn[type], className)}>
      <IconWrapper color={iconType} className={cn.icon}>
        {icon}
      </IconWrapper>
      {title && (
        <Text size="large" className={cn.title}>
          {title}
        </Text>
      )}
      {text && <Text className={cn.text}>{text}</Text>}
      {children}
    </Box>
  );
}
