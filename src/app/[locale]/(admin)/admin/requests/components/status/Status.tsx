import { StyledText, Wrapper } from "./Status.styles";
import { PropTypes } from "./Status.types";

const Status: React.FC<PropTypes> = ({
  idValue,
  name,
  onClick,
  defaultStyles = true,
  selectedStatus,
  defaultSelected,
}) => {
  if (!idValue || !name) return null;

  return (
    <Wrapper
      selectedStatus={selectedStatus}
      defaultSelected={defaultSelected}
      defaultStyles={defaultStyles}
      idValue={idValue}
      onClick={onClick}
    >
      <StyledText>{name}</StyledText>
    </Wrapper>
  );
};

export default Status;
