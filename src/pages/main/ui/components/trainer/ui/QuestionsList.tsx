import { Box } from '@/shared/ui/box';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import { questionsListData } from '../model/data';
import cn from './QuestionsList.module.scss';

export default function QuestionsList() {
  return (
    <div className={cn.questions}>
      <Text color={900} size="large" weight="med" className={cn.title}>
        Список вопросов
      </Text>

      <Box withShadow>
        <ul className={cn.list}>
          {questionsListData.map((el) => (
            <li className={cn.item}>
              <Flex gap={8}>
                <img src={el.img} alt="" />
                <div>
                  <Text
                    size="small"
                    weight="med"
                    color={900}
                    className={cn.title}
                  >
                    {el.title}
                  </Text>

                  <Flex justify="space-between" gap={24}>
                    <Text span className={cn.tag}>
                      Рейтинг: <span>{el.rating}</span>
                    </Text>
                    <Text span className={cn.tag}>
                      Сложность: <span>{el.difficulty}</span>
                    </Text>
                  </Flex>
                </div>
              </Flex>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}
