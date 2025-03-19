import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import cn from './Header.module.scss';

export default function Header() {
  return (
    <header className={cn.header}>
      <Flex justify="space-between" align="center" className="container">
        <Flex gap={8} align="center" className={cn.logo}>
          <img src="./icons/logo.svg" alt="logo" />
          <img src="./icons/logo-text.svg" alt="logo text" />
        </Flex>

        <nav className={cn.nav}>
          <Flex gap={20}>
            <Text span>База вопросов</Text>
            <p>Тренажер</p>
          </Flex>
        </nav>

        <Flex gap={26}>
          <Button>Вход</Button>
          <Button>Регистрация</Button>
        </Flex>
      </Flex>
    </header>
  );
}
