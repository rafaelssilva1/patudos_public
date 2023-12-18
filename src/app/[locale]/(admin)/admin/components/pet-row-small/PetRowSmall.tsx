import { PropTypes } from "./PetRowSmall.types";
import {
  DateText,
  ImageWrapper,
  InfoWrapper,
  PetDetailsText,
  Wrapper,
  InnerWrapper,
} from "./PetRowSmall.styles";
import ResponsiveImage from "@base/components/image/Image";
import { useMemo } from "react";
import Button from "@base/components/button/Button";
import { useRouter } from "next-intl/client";
import { Sizes } from "@base/components/button/Button.types";

const PetRowSmall: React.FC<PropTypes> = ({ data }) => {
  const router = useRouter();
  const { id, name, type, image, pickupDate } = data;

  const date = new Date(pickupDate || "");

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const parsedMonth = useMemo(() => {
    switch (month) {
      case 1:
        return "janeiro";
      case 2:
        return "fevereiro";
      case 3:
        return "março";
      case 4:
        return "abril";
      case 5:
        return "maio";
      case 6:
        return "junho";
      case 7:
        return "julho";
      case 8:
        return "agosto";
      case 9:
        return "setembro";
      case 10:
        return "outubro";
      case 11:
        return "novembro";
      default:
        return "dezembro";
    }
  }, [month]);

  const pet = useMemo(() => {
    switch (type) {
      case "1":
        return "Cão";
      default:
        return "Gato";
    }
  }, [type]);

  const handleClick = () => {
    router.push(`/admin/edit/${id}`);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <ImageWrapper>
          <ResponsiveImage src={image} />
        </ImageWrapper>
        <InfoWrapper>
          <DateText>{`${day} de ${parsedMonth}`}</DateText>
          <PetDetailsText>{`${name} - ${pet}`}</PetDetailsText>
        </InfoWrapper>
      </InnerWrapper>
      <Button onClick={handleClick} size={Sizes.Small}>
        Editar
      </Button>
    </Wrapper>
  );
};

export default PetRowSmall;
