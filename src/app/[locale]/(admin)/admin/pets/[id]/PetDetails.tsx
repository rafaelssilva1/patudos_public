"use client";

import Heading from "@base/components/heading/Heading";
import {
  CardWrapper,
  InfoWrapper,
  OtherInfoWrapper,
  Wrapper,
  TitleWrapper,
  TopWrapper,
  ImageWrapper,
  StyledStatusElement,
  SelectedWrapper,
  MainWrapper,
  StyledEditButton,
} from "./PetDetails.styles";
import { PropTypes } from "./PetDetails.types";
import Sex from "@base/components/sex/Sex";
import Weight from "@base/components/icons/Weight";
import { useMemo, useRef, useState } from "react";
import Status from "../../requests/components/status/Status";
import IconCard from "@base/components/icon-card/IconCard";
import OtherInfoCard from "@base/components/other-info-card/OtherInfoCard";
import ResponsiveImage from "@base/components/image/Image";
import { useRouter } from "next-intl/client";
import useOutsideClick from "@base/hooks/useClickOutside";
import TabsContent from "./components/tabs-content/TabsContent";
import Button from "@base/components/button/Button";
import {
  ButtonVariants,
  IconPosition,
  IconTypes,
} from "@base/components/button/Button.types";

const PetDetails: React.FC<PropTypes> = ({ data, token, id }) => {
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  const [isOpen, setIsOpened] = useState(false);

  const { petDetailsData, colorsData, petStatusData, sizesData } = data;
  const petDetails = petDetailsData.details;
  const {
    type,
    name,
    birthDate,
    pickupDate,
    sex,
    shortDescription,
    description,
    vaccinated,
    sterilized,
    dewormed,
    fivFelv,
    specialNeeds,
    image,
    pet_status,
  } = petDetails[0];

  const parsedBirthDate = new Date(birthDate || "");
  const parsedPickupDate = new Date(pickupDate || "");

  const { shortDescription: shortDescriptionPt, description: descriptionPt } =
    petDetails[1];

  const { name: colorName, code } = colorsData?.colors?.[0] || {};
  const { name: sizeName } = sizesData?.sizes?.[0] || {};

  const cardInfo = useMemo(() => {
    const sexInfo = {
      icon: <Sex sex={sex} />,
      color: sex ? "var(--color-pink)" : "var(--color-blue)",
      title: sex ? "Fêmea" : "Macho",
      subtitle: "Sexo",
    };
    const sizeInfo = {
      icon: <Weight />,
      title: sizeName,
      subtitle: "Tamanho",
      removePadding: true,
    };
    const colorInfo = {
      color: code,
      title: colorName,
      subtitle: "Cor",
    };

    return [sexInfo, sizeInfo, colorInfo];
  }, [sex, code, colorName, sizeName]);

  const otherInfo = useMemo(() => {
    const vaccinatedInfo = {
      display: true,
      isTrue: vaccinated ?? false,
      text: "Vacinado(a)",
    };
    const sterilizedInfo = {
      display: true,
      isTrue: sterilized ?? false,
      text: sex ? "Esterilizada" : "Esterilizado",
    };
    const dewormedInfo = {
      display: true,
      isTrue: dewormed ?? false,
      text: sex ? "Desparasitada" : "Desparasitado",
    };
    const fivFelvInfo = {
      display: !type,
      isTrue: fivFelv ?? false,
      text: "Fiv/Felv",
    };
    const specialNeedsInfo = {
      display: true,
      isTrue: specialNeeds ? true : false,
      text: "Necessidades especiais",
    };

    return [
      vaccinatedInfo,
      sterilizedInfo,
      dewormedInfo,
      fivFelvInfo,
      specialNeedsInfo,
    ];
  }, [dewormed, sex, sterilized, vaccinated, fivFelv, type, specialNeeds]);

  const petStatus = petStatusData.data?.find((el) => el.id === pet_status)
    ?.name;

  const handleClick = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };
  useOutsideClick(handleClose, wrapperRef);

  const handleEditStatus = (statusId: string) => {
    fetch(`/api/status/pets/${id}`, {
      method: "PUT",
      body: JSON.stringify({ statusId }),
      headers: {
        "X-JWT-Token": token,
      },
    }).then(() => {
      handleClose();
      router.refresh();
    });
  };

  const handleEditClick = () => {
    router.push(`/admin/edit/${id}`);
  };

  const remainingStatus = petStatusData.data?.filter(
    (status) => status.id !== pet_status,
  );

  const [descriptionLocale, setDescriptionLocale] = useState(true);

  if (!petDetailsData || !colorsData || !petStatusData || !sizesData)
    return null;

  return (
    <Wrapper>
      <TitleWrapper>
        <Heading level="1">{name}</Heading>
        <MainWrapper>
          <Status
            id={pet_status}
            idValue={pet_status || 0}
            name={petStatus}
            onClick={handleClick}
          />
          {isOpen && (
            <SelectedWrapper ref={wrapperRef}>
              {remainingStatus?.map((el, index) => (
                <StyledStatusElement
                  key={index}
                  onClick={() => handleEditStatus(String(el.id))}
                >
                  {el.name}
                </StyledStatusElement>
              ))}
            </SelectedWrapper>
          )}
        </MainWrapper>
        <StyledEditButton
          icon={IconTypes.Settings}
          iconPosition={IconPosition.Right}
          onClick={handleEditClick}
        >
          Editar
        </StyledEditButton>
      </TitleWrapper>
      <TopWrapper>
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
          <div>
            <Heading level="5">
              Data de Nascimento:{" "}
              {`${parsedBirthDate.getDate()}/${
                parsedBirthDate.getMonth() + 1
              }/${parsedBirthDate.getFullYear()}`}
            </Heading>
            <Heading level="5">
              Data de Recolha:{" "}
              {`${parsedPickupDate.getDate()}/${
                parsedPickupDate.getMonth() + 1
              }/${parsedPickupDate.getFullYear()}`}
            </Heading>
          </div>
        </InfoWrapper>
        <ImageWrapper>
          <ResponsiveImage src={image} placeholder="blur" />
        </ImageWrapper>
      </TopWrapper>
      <div>
        <Button
          onClick={() => setDescriptionLocale(!descriptionLocale)}
          variant={ButtonVariants.Secondary}
        >
          {descriptionLocale ? "PT" : "EN"}
        </Button>
        {descriptionLocale && (
          <TabsContent
            shortDescription={shortDescriptionPt}
            description={descriptionPt}
          />
        )}
        {!descriptionLocale && (
          <TabsContent
            shortDescription={shortDescription}
            description={description}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default PetDetails;
