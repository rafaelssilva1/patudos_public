import { useTranslations } from "next-intl";
import Button from "../button/Button";
import { ButtonVariants } from "../button/Button.types";
import ResponsiveImage from "../image/Image";
import {
  ContentWrapper,
  ImageWrapper,
  StyledHeading,
  StyledText,
  Wrapper,
} from "./ServiceCard.styles";
import { PropTypes } from "./ServiceCard.types";
import socialShare from "@base/utils/socialShare";

const ServiceCard: React.FC<PropTypes> = ({
  service,
  title,
  content,
  ...remainingProps
}) => {
  const t = useTranslations();

  const handleMessageClick = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined"
    ) {
      const text = `${t("homepage.services.message")} ${service}`;
      const shareableUrl = socialShare({ text });

      window.open(shareableUrl, "_blank");
    }
  };

  if (!title || !content) return null;

  return (
    <Wrapper {...remainingProps}>
      <ImageWrapper>
        <ResponsiveImage
          src={`https://static.patudosvagos.pt/images/pet_hotel_1.jpg`}
        />
      </ImageWrapper>
      <ContentWrapper>
        <StyledHeading level="3">{title}</StyledHeading>
        <StyledText>{content}</StyledText>
        <Button variant={ButtonVariants.Secondary} onClick={handleMessageClick}>
          {t("homepage.services.cta")}
        </Button>
      </ContentWrapper>
      <ImageWrapper>
        <ResponsiveImage
          src={`https://static.patudosvagos.pt/images/pet_hotel_2.jpg`}
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default ServiceCard;
