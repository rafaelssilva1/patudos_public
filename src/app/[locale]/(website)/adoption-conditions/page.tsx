"use client";

import { useTranslations } from "next-intl";
import {
  StyledHeading,
  StyledLink,
  StyledText,
  Wrapper,
} from "./AdoptionTerms.styles";
import {
  StyledLi,
  StyledOl,
} from "@base/components/adoption-modal/AdoptionModal.styles";

const AdoptionTermsPage = () => {
  const t = useTranslations();

  return (
    <Wrapper>
      <div>
        <StyledHeading level="1">{t("adoption-form.title")}</StyledHeading>
        <StyledText>
          {t.rich("adoption-form.text", {
            p: (chunks) => <p>{chunks}</p>,
            b: (chunks) => <b>{chunks}</b>,
            a: (chunks) => (
              <StyledLink href="#adoption_terms">{chunks}</StyledLink>
            ),
          })}
        </StyledText>
      </div>
      <div id="adoption_terms">
        <StyledHeading level="2">{t("adoption-form.subtitle")}</StyledHeading>
        <StyledText>
          {t.rich("adoption-form.notice", {
            p: (chunks) => <p>{chunks}</p>,
            ol: (chunks) => <StyledOl>{chunks}</StyledOl>,
            li: (chunks) => <StyledLi>{chunks}</StyledLi>,
          })}
        </StyledText>
      </div>
    </Wrapper>
  );
};

export default AdoptionTermsPage;
