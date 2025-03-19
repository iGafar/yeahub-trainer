import { ICardMainProps } from '@/entities/card-main/model/types';
import { BookIcon, BookmarkIcon, ChartIcon } from '@/shared/icons/main';

export const CardsData: (ICardMainProps & { id: number })[] = [
  {
    id: 1,
    icon: <BookIcon />,
    iconType: 'gray',
    title: 'Большая база вопросов',
    text: 'Изучай технологии по актуальным теоритеческим вопросам',
  },
  {
    id: 2,
    icon: <ChartIcon />,
    iconType: 'purple',
    title: 'Прогресс обучения',
    text: 'Смотрите аналитику по пройденным темам, повторяйте изученные',
    type: 'primary',
  },
  {
    id: 3,
    icon: <BookmarkIcon />,
    iconType: 'gray',
    title: 'Удобный тренажёр',
    text: 'Улучшайте свои навыки в нашем тренажёре по запоминанию вопросов',
  },
];
