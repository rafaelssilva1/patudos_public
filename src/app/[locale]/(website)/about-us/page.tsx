"use client";

import Heading from "@base/components/heading/Heading";
import {
  ImageWrapper,
  TextWrapper,
  ContentWrapper,
  InnerTextWrapper,
  StyledText,
  AltImageWrapper,
} from "./AboutUs.styles";
import ResponsiveImage from "@base/components/image/Image";
import { useTranslations } from "next-intl";

const AboutUsPage = () => {
  const t = useTranslations();

  return (
    <div>
      <ContentWrapper>
        <ImageWrapper>
          <ResponsiveImage
            src={`https://static.patudosvagos.pt/images/sobre-nos-1.jpg`}
            priority
          />
        </ImageWrapper>
        <InnerTextWrapper>
          <Heading level="1">{t("about-us.title")}</Heading>
          <StyledText>
            {t.rich("about-us.intro", {
              ul: (chunks) => <ul>{chunks}</ul>,
              li: (chunks) => <li>{chunks}</li>,
              p: (chunks) => <p>{chunks}</p>,
            })}
          </StyledText>
        </InnerTextWrapper>
      </ContentWrapper>
      <TextWrapper>
        <StyledText>
          {t.rich("about-us.text", {
            ul: (chunks) => <ul>{chunks}</ul>,
            li: (chunks) => <li>{chunks}</li>,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </StyledText>
      </TextWrapper>
      <AltImageWrapper>
        <ResponsiveImage
          src={`https://static.patudosvagos.pt/images/sobre-nos-2.jpg`}
          priority
        />
      </AltImageWrapper>
    </div>
  );
};

export default AboutUsPage;
