import { FilterIcon, PenNewSquareIcon } from '@/shared/icons/main';
import { Box } from '@/shared/ui/box';
import { Flex } from '@/shared/ui/flex';
import IconWrapper from '@/shared/ui/icon-wrapper/IconWrapper';
import { Text } from '@/shared/ui/text';
import { Title } from '@/shared/ui/title';
import cn from './PreparationSection.module.scss';

export default function PreparationSection() {
  return (
    <section className={cn.section}>
      <div className="container">
        <Flex className={cn.top} gap={20} align="flex-end">
          <Title className={cn.title}>Подготовьтесь к собеседованию в IT</Title>
          <Text className={cn.subtitle}>
            С YeaHub подготовка к собеседованию становится простым и
            захватывающим процессом.
          </Text>
        </Flex>
        <Flex gap={20}>
          <Box className={cn.box_left}>
            <div>
              <Flex gap={36}>
                <IconWrapper>
                  <PenNewSquareIcon />
                </IconWrapper>
                <Text>
                  Наша платформа предлагает обширную базу актуальных вопросов по
                  широкому спектру тем и навыков, которая регулярно обновляется.
                </Text>
              </Flex>
            </div>
            <img src="./images/preparation/left.jpg" alt="questions" />
          </Box>
          <Box back="yellow" className={cn.box_right}>
            <img src="./images/preparation/right.png" alt="right" />

            <Flex gap={24}>
              <IconWrapper color="yellow">
                <FilterIcon />
              </IconWrapper>

              <Text>
                Используйте удобные фильтры для поиска вопросов по интересующим
                вас темам и уровню сложности.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </div>
    </section>
  );
}
