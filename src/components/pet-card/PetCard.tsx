import { useTranslations } from "next-intl";
import Sex from "../sex/Sex";
import Heading from "../heading/Heading";
import ResponsiveImage from "../image/Image";
import {
  SexWrapper,
  ImageWrapper,
  InfoWrapper,
  StyledPickUpDate,
  StyledText,
  TitleWrapper,
  Wrapper,
} from "./PetCard.styles";
import { PropTypes } from "./PetCard.types";
import getPetTypeText from "@base/utils/getPetTypeText";
import getAgeText from "@base/utils/getAgeText";
import { useMemo } from "react";

const PetCard: React.FC<PropTypes> = ({ data }) => {
  const t = useTranslations();
  const { name, type, birthDate, pickupDate, image, sex } = data;

  const typeText = t(getPetTypeText({ type }));
  const { ageText, age } = getAgeText({ birthDate });
  const { yearDiff, monthDiff } = age;

  const timePassed = useMemo(() => {
    if (yearDiff === 0) {
      return `${monthDiff} ${
        monthDiff > 1 ? t("other-info.time.months") : t("other-info.time.month")
      }`;
    } else {
      return `${yearDiff} ${
        yearDiff > 1 ? t("other-info.time.years") : t("other-info.time.year")
      }`;
    }
  }, [t, yearDiff, monthDiff]);

  const pickupDateToRender = useMemo(() => {
    const date = new Date(pickupDate || "");
    const day = date.getDate();
    const month = t(`other-info.months.${date.getMonth() + 1}`);
    const year = date.getFullYear();

    const parsedDate = `${day} ${month} ${year}`;

    return parsedDate;
  }, [pickupDate, t]);

  if (!data) return null;

  return (
    <Wrapper>
      <ImageWrapper>
        <ResponsiveImage
          src={image}
          alt={name}
          styles={{ borderRadius: "0.5rem" }}
          placeholder="blur"
        />
      </ImageWrapper>
      <InfoWrapper>
        <TitleWrapper>
          <Heading level="2">{name}</Heading>
          <SexWrapper sex={!!sex}>
            <Sex sex={sex} />
          </SexWrapper>
        </TitleWrapper>
        <StyledText>{typeText}</StyledText>
        <StyledText>
          {t(ageText)} &#xB7; {timePassed}
        </StyledText>
        <StyledPickUpDate>{pickupDateToRender}</StyledPickUpDate>
      </InfoWrapper>
    </Wrapper>
  );
};

export default PetCard;
