import { CardMain } from '@/entities/card-main';
import { useResponsive } from '@/shared/hooks';
import { GraphNew, PersonArmsSpread } from '@/shared/icons/main';
import { Flex } from '@/shared/ui/flex';
import cn from './ProgressList.module.scss';

export default function ProgressList() {
  const { isMobile } = useResponsive();

  return (
    <Flex
      justify="space-between"
      gap={40}
      direction={isMobile ? 'column' : 'row'}
    >
      <CardMain
        className={cn.item}
        text="Наш тренажёр предоставляет уникальный шанс углубить свои знания и
          поднять их на новый уровень"
        iconType="purple"
        icon={<PersonArmsSpread />}
      />
      <CardMain
        className={cn.item}
        text="Изучение технологий ещё никогда не было таким доступным и эффективным"
        iconType="purple"
        icon={<GraphNew />}
      />
    </Flex>
  );
}
