import {
  FigmaIcon,
  GithubIcon,
  InstIcon,
  TelegramIcon,
  YoutubeIcon,
} from '@/shared/icons/social';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import cn from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={cn.footer}>
      <div className="container">
        <img className={cn.logo} src="./icons/logo-text-white.svg" alt="logo" />

        <Text className={cn.title} color="white">
          Выбери, каким будет IT завтра, вместе с нами
        </Text>

        <ul className={cn.list}>
          <li>
            <YoutubeIcon />
          </li>
          <li>
            <GithubIcon />
          </li>
          <li>
            <InstIcon />
          </li>
          <li>
            <TelegramIcon />
          </li>
        </ul>

        <Text size="tiny" color={400} className={cn.description}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </Text>

        <Flex justify="space-between" align="center">
          <Text size="tiny" color={400}>
            © 2024 YeaHub
          </Text>

          <Flex align="center" gap={15}>
            <Text size="tiny" color={400}>
              Документы
            </Text>
            <FigmaIcon />
            <GithubIcon />
          </Flex>
        </Flex>
      </div>
    </footer>
  );
}
