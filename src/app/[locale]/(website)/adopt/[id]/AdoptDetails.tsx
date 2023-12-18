"use client";

import IconCard from "@base/components/icon-card/IconCard";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Close } from "@base/components/icons";
import Weight from "@base/components/icons/Weight";
import {
  CardWrapper,
  InfoWrapper,
  OtherInfoWrapper,
  PetDetailsWrapper,
  StyledHeading,
  Wrapper,
  StyledShortDescription,
  ButtonWrapper,
  TopWrapper,
  ImageWrapper,
  StyledDescription,
  Overlay,
  IconWrapper,
  Backdrop,
  StyledModal,
} from "./AdoptDetails.styles";
import OtherInfoCard from "@base/components/other-info-card/OtherInfoCard";
import Button from "@base/components/button/Button";
import {
  ButtonVariants,
  IconPosition,
  IconTypes,
} from "@base/components/button/Button.types";
import useViewport from "@base/hooks/useViewport";
import socialShare from "@base/utils/socialShare";
import Carousel from "@base/components/carousel/Carousel";
import { PetType } from "@base/app/api/pets/pets.types";
import { SizesType } from "@base/app/api/sizes/sizes.types";
import { ColorsType } from "@base/app/api/colors/colors.types";
import Sex from "@base/components/sex/Sex";
import AdoptionModal from "@base/components/adoption-modal/AdoptionModal";
import ResponsiveImage from "@base/components/image/Image";

const PetDetails = ({
  data: { petDetailsData, sizesData, colorData },
}: {
  data: {
    petDetailsData: PetType;
    sizesData: SizesType;
    colorData: ColorsType;
  };
}) => {
  const t = useTranslations();

  const { viewport } = useViewport();
  const isMobile = viewport?.lteSmall;

  const { images } = petDetailsData || {};
  const {
    sex,
    vaccinated,
    sterilized,
    dewormed,
    name,
    shortDescription,
    description,
    fivFelv,
    type,
    image,
  } = petDetailsData?.details?.[0] || {};

  const { name: colorName, code } = colorData?.colors?.[0] || {};

  const { name: sizeName } = sizesData?.sizes?.[0] || {};

  const cardInfo = useMemo(() => {
    const sexInfo = {
      icon: <Sex sex={sex} />,
      color: sex ? "var(--color-pink)" : "var(--color-blue)",
      title: sex ? t("pet-details.sex.female") : t("pet-details.sex.male"),
      subtitle: t("pet-details.sex.title"),
    };
    const sizeInfo = {
      icon: <Weight />,
      title: sizeName,
      subtitle: t("pet-details.size.title"),
      removePadding: true,
    };
    const colorInfo = {
      color: code,
      title: colorName,
      subtitle: t("pet-details.color.title"),
    };
    return [sexInfo, sizeInfo, colorInfo];
  }, [sex, t, code, colorName, sizeName]);

  const otherInfo = useMemo(() => {
    const vaccinatedInfo = {
      display: true,
      isTrue: vaccinated ?? false,
      text: t("pet-details.vaccinated.title"),
    };
    const sterilizedInfo = {
      display: true,
      isTrue: sterilized ?? false,
      text: sex
        ? t("pet-details.sterilized.female")
        : t("pet-details.sterilized.male"),
    };
    const dewormedInfo = {
      display: true,
      isTrue: dewormed ?? false,
      text: sex
        ? t("pet-details.dewormed.female")
        : t("pet-details.dewormed.male"),
    };
    const fivFelvInfo = {
      display: !type,
      isTrue: fivFelv ?? false,
      text: t("pet-details.fivFelv.title"),
    };

    return [vaccinatedInfo, sterilizedInfo, dewormedInfo, fivFelvInfo];
  }, [dewormed, sex, sterilized, t, vaccinated, fivFelv, type]);

  const [showDescription, setShowDescription] = useState(false);
  const [showAdoptMeModal, setShowAdoptMeModal] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  const handleAdoptMeClick = () => {
    setShowAdoptMeModal(true);
  };
  const handleAdoptMeClose = () => {
    setShowAdoptMeModal(false);
  };

  const handleMessageClick = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined"
    ) {
      const text = `${t("pet-details.buttons.message")} ${
        window && window.location.href
      }`;
      const shareableUrl = socialShare({ text });

      window.open(shareableUrl, "_blank");
    }
  };

  if (!petDetailsData) {
    return null;
  }

  return (
    <Wrapper>
      <PetDetailsWrapper>
        <TopWrapper>
          <StyledHeading level="1">{name}</StyledHeading>
          <Button
            icon={IconTypes.Message}
            iconPosition={IconPosition.Left}
            onClick={handleMessageClick}
          />
        </TopWrapper>
        <InfoWrapper>
          <CardWrapper>
            {cardInfo.map((el, index) => (
              <IconCard key={index} data={el} />
            ))}
          </CardWrapper>
          <OtherInfoWrapper>
            {otherInfo.map((el, index) => (
              <OtherInfoCard key={`${el}-${index}`} data={el} />
            ))}
          </OtherInfoWrapper>
        </InfoWrapper>
        <StyledShortDescription>{shortDescription}</StyledShortDescription>
        <ButtonWrapper>
          <Button variant={ButtonVariants.Secondary} onClick={handleClick}>
            {t("pet-details.buttons.know-my-story")}
          </Button>
          <Button variant={ButtonVariants.Primary} onClick={handleAdoptMeClick}>
            {t("pet-details.buttons.adopt-me")}
          </Button>
        </ButtonWrapper>
      </PetDetailsWrapper>
      <ImageWrapper>
        <ResponsiveImage src={image} placeholder="blur" />
        {showDescription && !isMobile && (
          <Overlay>
            <IconWrapper onClick={handleClick}>
              <Close />
            </IconWrapper>
            <StyledDescription>{description}</StyledDescription>
          </Overlay>
        )}
      </ImageWrapper>

      {isMobile && (
        <Backdrop showDescription={showDescription}>
          <Overlay showDescription={showDescription}>
            <IconWrapper onClick={handleClick}>
              <Close />
            </IconWrapper>
            <StyledDescription>{description}</StyledDescription>
          </Overlay>
        </Backdrop>
      )}
      <StyledModal open={showAdoptMeModal} onClose={handleAdoptMeClose}>
        <AdoptionModal showAdoptMeModal={showAdoptMeModal} />
      </StyledModal>
    </Wrapper>
  );
};

export default PetDetails;
