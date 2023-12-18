"use client";

import { useTranslations } from "next-intl";
import Logo from "../icons/Logo";
import Link from "../link/Link";
import {
  ColumnWrapper,
  LinksWrapper,
  StyledHeading,
  StyledLink,
  Wrapper,
  StyledSpan,
} from "./Footer.styles";
import { linksType } from "./Footer.types";
import LINKS from "./urls";

const Footer: React.FC = () => {
  const t = useTranslations();

  const renderChildren = (links: linksType[]) => {
    return links.map(({ text, href }, index) => {
      if (!href) {
        return <StyledSpan key={`${t(text)}-${index}`}>{t(text)}</StyledSpan>;
      }
      return (
        <StyledLink key={`${t(text)}-${index}`} href={t(href)}>
          {t(text)}
        </StyledLink>
      );
    });
  };

  return (
    <Wrapper role="contentinfo">
      <Link href="/" aria-label="logo">
        <Logo isInverted />
      </Link>
      {LINKS.map(({ title, links }, index: number) => {
        return (
          <ColumnWrapper key={`${t(title)}-${index}`}>
            <StyledHeading level="2">{t(title)}</StyledHeading>
            <LinksWrapper>{renderChildren(links)}</LinksWrapper>
          </ColumnWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Footer;
