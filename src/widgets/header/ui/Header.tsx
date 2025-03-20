import { useResponsive } from '@/shared/hooks';
import { Button } from '@/shared/ui/button';
import CustomSelect from '@/shared/ui/custom-select';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import classNames from 'classnames';
import { useState } from 'react';
import cn from './Header.module.scss';

const selectOptions = [
  {
    label: 'База вопросов',
    value: 'База вопросов',
  },
  {
    label: 'Тренажер',
    value: 'Тренажер',
  },
];

export default function Header() {
  const { isTablet, isMobile } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className={cn.header}>
      <Flex justify="space-between" align="center" className="container">
        <Flex gap={8} align="center" className={cn.logo}>
          <img src="./icons/logo.svg" alt="logo" />
          {!isMobile && <img src="./icons/logo-text.svg" alt="logo text" />}
        </Flex>

        <nav className={cn.nav}>
          {isTablet ? (
            <CustomSelect placeholder="Подготовка" options={selectOptions} />
          ) : (
            <Flex gap={20}>
              <Text span>База вопросов</Text>
              <Text span>Тренажер</Text>
            </Flex>
          )}
        </nav>

        <Flex
          gap={26}
          className={classNames(cn.menu, isMenuOpen && cn.open)}
          justify={isTablet ? 'center' : 'flex-start'}
          direction={isTablet ? 'column' : 'row'}
        >
          <Button fullWidth={isTablet}>Вход</Button>
          <Button fullWidth={isTablet}>Регистрация</Button>
        </Flex>

        <button
          className={cn.menu_btn}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Flex>
    </header>
  );
}
