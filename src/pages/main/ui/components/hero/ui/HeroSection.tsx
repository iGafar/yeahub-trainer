import { CardMain } from '@/entities/card-main';
import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { Title } from '@/shared/ui/title';
import { CardsData } from '../model/data';
import cn from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={cn.section}>
      <div className="container">
        <Flex justify="space-between" gap={40} align="center">
          <div>
            <span className={cn.tag}>Топ вопросов</span>

            <Title level={1} className={cn.title}>
              YEAHUB помогает расти и достигать целей
            </Title>

            <Text className={cn.text}>
              Развивайте и улучшайте свои навыки на одной платформе: изучайте
              новое, готовьтесь к собеседованиям, погружайтесь в нюансы или
              обновляйте знания — YeaHub поможет справиться с любой задачей
            </Text>

            <Button>Присоединиться</Button>
          </div>

          <div className={cn.picture}>
            <img src="./images/main-hero-cover.jpg" alt="section background" />
          </div>
        </Flex>

        <Flex gap={20} justify="space-between" className={cn.card_list}>
          {CardsData.map((card) => (
            <CardMain key={card.id} className={cn.card_item} {...card} />
          ))}
        </Flex>
      </div>
    </section>
  );
}
