import { CardMain } from '@/entities/card-main';
import { GraphUpIcon, StructureIcon } from '@/shared/icons/main';
import { Flex } from '@/shared/ui/flex';
import cn from './TrainerList.module.scss';

export default function TrainerList() {
  return (
    <Flex justify="space-between" gap={40}>
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
  );
}
