import { PropTypes } from "./RequestRowSmall.types";
import {
  DateText,
  ImageWrapper,
  InfoWrapper,
  RequestDetailsText,
  Wrapper,
  InnerWrapper,
  DetailsWrapper,
} from "./RequestRowSmall.styles";
import ResponsiveImage from "@base/components/image/Image";
import Button from "@base/components/button/Button";
import { useRouter } from "next-intl/client";
import {
  IconPosition,
  IconTypes,
  Sizes,
} from "@base/components/button/Button.types";
import { useEffect, useMemo, useState } from "react";
import { PetType } from "@base/app/api/pets/pets.types";
import Status from "../../requests/components/status/Status";

const RequestRowSmall: React.FC<PropTypes> = ({ data }) => {
  const router = useRouter();
  const { id, name, pet_id, adoption_status, adoptionStatusName } = data;

  const [petData, setPetData] = useState<PetType>();

  useEffect(() => {
    fetch(`/api/pets/${pet_id}?locale=pt`)
      .then((res) => res.json())
      .then((data) => setPetData(data));
  }, [pet_id]);

  const pet = useMemo(() => {
    switch (petData?.details[0].type) {
      case "1":
        return "Cão";
      default:
        return "Gato";
    }
  }, [petData?.details]);

  const handleClick = () => {
    router.push(`/admin/requests/${id}`);
  };

  if (!petData) return null;

  return (
    <Wrapper>
      <InnerWrapper>
        <ImageWrapper>
          <ResponsiveImage src={petData?.details[0].image} />
        </ImageWrapper>
        <InfoWrapper>
          <DetailsWrapper>
            <DateText>{`${petData?.details[0].name} - ${pet}`}</DateText>
            <RequestDetailsText>{name}</RequestDetailsText>
          </DetailsWrapper>
          <Status
            id={adoption_status}
            idValue={adoption_status}
            name={String(adoptionStatusName)}
          />
        </InfoWrapper>
      </InnerWrapper>
      <Button
        onClick={handleClick}
        size={Sizes.Small}
        icon={IconTypes.Chevron}
        iconPosition={IconPosition.Right}
      ></Button>
    </Wrapper>
  );
};

export default RequestRowSmall;
