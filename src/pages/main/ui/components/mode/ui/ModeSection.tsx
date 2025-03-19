import { CardMain } from '@/entities/card-main';
import { BookmarkIcon, StudentIcon } from '@/shared/icons/main';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { Title } from '@/shared/ui/title';
import cn from './ModeSection.module.scss';

export default function ModeSection() {
  return (
    <section className={cn.section}>
      <div className="container">
        <Title align="center" className={cn.title}>
          режим прохождения собеседований
        </Title>

        <Flex className={cn.bottom} gap={120}>
          <img src="./images/mode.png" alt="mode" />

          <Flex gap={23} direction="column" className={cn.cards}>
            <CardMain
              icon={<StudentIcon />}
              iconType="purple"
              text="Практикуйте изученные темы в режиме собеседований."
              type="primary"
            />
            <CardMain
              icon={<BookmarkIcon />}
              iconType="yellow"
              text="Воспользуйтесь удобными карточками для запоминания и возможностью сохранения материала для последующего повторения."
              type="secondary"
            />

            <Text size="large">
              Это идеальный способ подготовиться к реальным собеседованиям.
            </Text>
          </Flex>
        </Flex>
      </div>
    </section>
  );
}
