import { CardMain } from '@/entities/card-main';
import { useResponsive } from '@/shared/hooks';
import { GraphUpIcon, StructureIcon } from '@/shared/icons/main';
import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import cn from './TrainerList.module.scss';

export default function TrainerList() {
  const { isMobile, isMediumTablet } = useResponsive();

  return (
    <>
      <Flex
        justify="space-between"
        gap={40}
        direction={isMobile ? 'column' : 'row'}
        className={cn.list}
      >
        <CardMain
          className={cn.item}
          text="Наш тренажёр предоставляет уникальный шанс углубить свои знания и
          поднять их на новый уровень"
          iconType="yellow"
          icon={<StructureIcon />}
        />
        <CardMain
          className={cn.item}
          text="Изучение технологий ещё никогда не было таким доступным и эффективным"
          iconType="yellow"
          icon={<GraphUpIcon />}
        />
      </Flex>

      <Flex justify={isMediumTablet ? 'center' : 'flex-start'}>
        <Button>Начать обучение</Button>
      </Flex>
    </>
  );
}
