"use client";

import {
  ContentWrapper,
  DonateWrapper,
  ImageWrapper,
  ItemWrapper,
  ItemsWrapper,
  StyledText,
  Wrapper,
} from "./Donate.styles";
import Mbway from "@base/components/icons/Mbway";
import Paypal from "@base/components/icons/Paypal";
import Bank from "@base/components/icons/Bank";
import Heading from "@base/components/heading/Heading";
import { useTranslations } from "next-intl";
import ResponsiveImage from "@base/components/image/Image";

const DonatePage = () => {
  const t = useTranslations();

  return (
    <Wrapper>
      <ContentWrapper>
        <Heading level="1">{t("donate.title")}</Heading>
        <StyledText>{t("donate.text")}</StyledText>
        <ItemsWrapper>
          <DonateWrapper>
            <ItemWrapper>
              <Mbway />
              <StyledText>915 152 155</StyledText>
            </ItemWrapper>
          </DonateWrapper>
          <DonateWrapper>
            <ItemWrapper>
              <Paypal />
              <StyledText>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=LYNPPPFAB6GEU"
                  target="_blank"
                >
                  paypal.com/donate
                </a>
              </StyledText>
            </ItemWrapper>
          </DonateWrapper>
          <DonateWrapper>
            <ItemWrapper>
              <Bank />
              <StyledText>PT50 0007 0000 0053 9933 2352 3</StyledText>
            </ItemWrapper>
          </DonateWrapper>
        </ItemsWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <ResponsiveImage
          src={`https://static.patudosvagos.pt/images/doacoes.jpg`}
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default DonatePage;
