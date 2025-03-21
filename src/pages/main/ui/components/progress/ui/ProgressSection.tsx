import { useResponsive } from '@/shared/hooks';
import { Box } from '@/shared/ui/box';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { Title } from '@/shared/ui/title';
import ProgressList from './ProgressList';
import cn from './ProgressSection.module.scss';

export default function ProgressSection() {
  const { isTablet } = useResponsive();

  return (
    <section className={cn.section}>
      <div className="container">
        <Box size="large">
          <Flex gap={20}>
            <div>
              <Title className={cn.title}>отслеживайте свой прогресс</Title>
              <Text className={cn.subtitle}>
                YeaHub предоставляет продвинутые инструменты для мониторинга
                вашего обучения.
              </Text>
              {isTablet && (
                <div className={cn.img_wrapper}>
                  <img src="./images/statistics.png" alt="statistics" />
                </div>
              )}
              <ProgressList />
            </div>
            {!isTablet && (
              <div className={cn.img_wrapper}>
                <img src="./images/statistics.png" alt="statistics" />
              </div>
            )}
          </Flex>
        </Box>
      </div>
    </section>
  );
}
