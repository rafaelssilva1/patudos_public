import Link from "@base/components/link/Link";
import {
  MenuWrapper,
  StyledClose,
  StyledHamburguerMenu,
  StyledLink,
  Wrapper,
} from "./Header.styles";
import Logo from "@base/components/icons/Logo";
import { Sizes } from "@base/components/icons/utils/icons.types";
import React, { useState } from "react";
import { usePathname } from "next-intl/client";
import LINKS from "../urls";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@base/components/language-switcher/LanguageSwitcher";

const MobileHeader: React.FC = () => {
  const t = useTranslations();

  const pathname = usePathname();
  const currentPath = pathname.replace(/[^a-zA-Z0-9\-]/, "");

  const [isOpen, setIsMenu] = useState(false);

  return (
    <Wrapper>
      <Link href="/" aria-label="logo">
        <Logo isInverted size={Sizes.LogoSmall} />
      </Link>
      <StyledHamburguerMenu onClick={() => setIsMenu(true)} />
      <MenuWrapper isOpen={isOpen}>
        {isOpen && (
          <>
            <StyledClose onClick={() => setIsMenu(false)} />
            {LINKS.map(({ href, text }, index) => (
              <StyledLink
                key={`${t(text)}-${index}`}
                href={t(href)}
                isCurrent={t(href) === currentPath}
                onClick={() => setIsMenu(false)}
              >
                {t(text)}
              </StyledLink>
            ))}
            <LanguageSwitcher />
          </>
        )}
      </MenuWrapper>
    </Wrapper>
  );
};

export default MobileHeader;
