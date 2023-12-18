import Color from "@base/components/color/Color";
import { StyledIdTd, StyledStatusTd, StyledTd, Wrapper } from "./PetRow.styles";
import { PropTypes } from "./PetRow.types";
import Status from "../../../requests/components/status/Status";
import { useRouter } from "next-intl/client";

const PetRow: React.FC<PropTypes> = ({ data }) => {
  const { id, name, type, sex, petStatusId, petStatus, petColor } = data;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/admin/pets/${id}`);
  };

  if (!data) return null;

  return (
    <Wrapper onClick={handleClick}>
      <StyledIdTd>{id}</StyledIdTd>
      <StyledTd>{name}</StyledTd>
      <StyledTd>{type === "1" ? "Cão" : "Gato"}</StyledTd>
      <StyledTd>{sex ? "Fêmea" : "Macho"}</StyledTd>
      <StyledTd>
        <Color color={petColor} />
      </StyledTd>
      <StyledStatusTd>
        <Status
          id={Number(id)}
          idValue={Number(petStatusId) || 1}
          name={petStatus}
        />
      </StyledStatusTd>
    </Wrapper>
  );
};

export default PetRow;
