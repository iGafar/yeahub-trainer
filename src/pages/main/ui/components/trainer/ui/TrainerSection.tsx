import { useResponsive } from '@/shared/hooks';
import { Box } from '@/shared/ui/box';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { Title } from '@/shared/ui/title';
import QuestionsList from './QuestionsList';
import TrainerList from './TrainerList';
import cn from './TrainerSection.module.scss';

export default function TrainerSection() {
  const { isMediumTablet } = useResponsive();

  return (
    <section className={cn.section}>
      <div className="container">
        <Box size="large">
          <Flex gap={20}>
            {!isMediumTablet && <QuestionsList />}

            <div className={cn.block_left}>
              <Title level={2} className={cn.title}>
                Удобный тренажёр
              </Title>
              <Text className={cn.subtitle}>
                Практикуйте изученные темы в нашем тренажёре.
              </Text>

              {isMediumTablet && (
                <img
                  className={cn.list}
                  src="./images/trainer-list.png"
                  alt="list"
                />
              )}

              <TrainerList />
            </div>
          </Flex>
        </Box>
      </div>
    </section>
  );
}
