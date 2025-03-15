import { Button } from '@/shared/ui/button';
import Flex from '@/shared/ui/flex/Flex';

export default function Header() {
  return (
    <header>
      <Flex justify="space-between" className="container">
        <Flex gap={8} align="center">
          <img src="./icons/logo.svg" alt="logo" />
          <img src="./icons/logo-text.svg" alt="logo text" />
        </Flex>

        <ul>
          <li>
            <p>База вопросов</p>
          </li>
          <li>
            <p>Тренажер</p>
          </li>
        </ul>

        <div>
          <Button>Вход</Button>
          <Button>Регистрация</Button>
        </div>
      </Flex>
    </header>
  );
}
