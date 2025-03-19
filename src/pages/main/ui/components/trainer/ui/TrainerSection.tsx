import { Box } from '@/shared/ui/box';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { Title } from '@/shared/ui/title';
import QuestionsList from './QuestionsList';
import TrainerList from './TrainerList';
import cn from './TrainerSection.module.scss';

export default function TrainerSection() {
  return (
    <section className={cn.section}>
      <div className="container">
        <Box size="large">
          <Flex gap={20}>
            <div className={cn.block_right}>
              <Text color={900} size="large" weight="med" className={cn.title}>
                Список вопросов
              </Text>

              <Box withShadow>
                <QuestionsList />
              </Box>
            </div>

            <div className={cn.block_left}>
              <Title level={2} className={cn.title}>
                Удобный тренажёр
              </Title>
              <Text className={cn.subtitle}>
                Практикуйте изученные темы в нашем тренажёре.
              </Text>

              <TrainerList />
            </div>
          </Flex>
        </Box>
      </div>
    </section>
  );
}
