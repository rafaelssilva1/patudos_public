import { MenuWrapper, StyledLink, Wrapper } from "./Header.styles";
import Logo from "../../icons/Logo";
import { usePathname } from "next-intl/client";
import LINKS from "../urls";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@base/components/language-switcher/LanguageSwitcher";
import BaseLink from "../../link/Link";

const DesktopHeader: React.FC = () => {
  const t = useTranslations();

  const pathname = usePathname();
  const currentPath = pathname.replace(/[^a-zA-Z0-9\-]/, "");

  return (
    <Wrapper>
      <BaseLink href="/" aria-label="logo">
        <Logo isInverted />
      </BaseLink>
      <MenuWrapper>
        {LINKS.map(({ href, text }, index) => (
          <StyledLink
            key={`${t(text)}-${index}`}
            href={t(href)}
            isCurrent={t(href) === currentPath}
          >
            {t(text)}
          </StyledLink>
        ))}
      </MenuWrapper>
      <LanguageSwitcher />
    </Wrapper>
  );
};

export default DesktopHeader;
