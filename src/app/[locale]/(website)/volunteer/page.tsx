"use client";

import { useTranslations } from "next-intl";
import {
  AltImageWrapper,
  InnerTextWrapper,
  StyledHeading,
  StyledText,
} from "./Volunteer.styles";
import ResponsiveImage from "@base/components/image/Image";
import Heading from "@base/components/heading/Heading";

const VolunteerPage = () => {
  const t = useTranslations();

  return (
    <div>
      <AltImageWrapper>
        <ResponsiveImage
          src={`https://static.patudosvagos.pt/images/voluntariado-1.jpg`}
          priority
        />
        <InnerTextWrapper>
          <StyledHeading level="1">{t("volunteer.highlight")}</StyledHeading>
          <Heading level="1">{t("volunteer.title")}</Heading>
        </InnerTextWrapper>
      </AltImageWrapper>
      <StyledText>
        {t.rich("volunteer.text-1", {
          ul: (chunks) => <ul>{chunks}</ul>,
          li: (chunks) => <li>{chunks}</li>,
          p: (chunks) => <p>{chunks}</p>,
          b: (chunks) => <b>{chunks}</b>,
        })}
      </StyledText>
      <AltImageWrapper>
        <ResponsiveImage
          src={`https://static.patudosvagos.pt/images/voluntariado-2.jpg`}
          priority
        />
      </AltImageWrapper>
      <StyledText>
        {t.rich("volunteer.text-2", {
          ul: (chunks) => <ul>{chunks}</ul>,
          li: (chunks) => <li>{chunks}</li>,
          p: (chunks) => <p>{chunks}</p>,
          b: (chunks) => <b>{chunks}</b>,
        })}
      </StyledText>
    </div>
  );
};

export default VolunteerPage;
