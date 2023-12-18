"use client";

import { usePathname } from "next/navigation";
import {
  StyledHeading,
  StyledUl,
  TextWrapper,
  Wrapper,
  StyledLi,
} from "./PrivacyPolicy.styles";
import { useTranslations } from "next-intl";
import Heading from "@base/components/heading/Heading";

const PrivacyPolicyPage = () => {
  const pathname = usePathname();

  const t = useTranslations();

  return (
    <Wrapper>
      <Heading level="1">{t("privacy-policy.title")}</Heading>
      <TextWrapper>
        {t.rich("privacy-policy.content", {
          p: (chunks) => <p>{chunks}</p>,
          h2: (chunks) => <StyledHeading level="2">{chunks}</StyledHeading>,
          ul: (chunks) => <StyledUl>{chunks}</StyledUl>,
          li: (chunks) => <StyledLi>{chunks}</StyledLi>,
        })}
      </TextWrapper>
    </Wrapper>
  );
};

export default PrivacyPolicyPage;
