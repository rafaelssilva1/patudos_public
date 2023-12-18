import { useEffect, useRef, useState } from "react";
import Status from "../status/Status";
import {
  SelectedWrapper,
  StyledButton,
  StyledLink,
  StyledStatusElement,
  StyledTd,
  StyledText,
  Wrapper,
} from "./RequestRow.styles";
import { PropTypes } from "./RequestRow.types";
import { IconPosition, IconTypes } from "@base/components/button/Button.types";
import useOutsideClick from "@base/hooks/useClickOutside";
import { useRouter } from "next-intl/client";

const RequestRow: React.FC<PropTypes> = ({
  data,
  adoptionStatusData,
  token,
}) => {
  const wrapperRef = useRef<null | HTMLTableCellElement>(null);
  const router = useRouter();

  const { id, pet_id, name, email, phone, municipality, adoption_status } =
    data;

  const adoptionStatus = adoptionStatusData?.data.find(
    (status) => status.id === adoption_status,
  );

  const remainingStatus = adoptionStatusData?.data.filter(
    (status) => status.id !== adoption_status,
  );

  const [petName, setPetName] = useState("");
  const [isOpen, setIsOpened] = useState(false);

  useEffect(() => {
    fetch(`/api/pets/${pet_id}?locale=pt`)
      .then((response) => response.json())
      .then((data) => setPetName(data.details[0].name));
  }, [pet_id]);

  const handleClick = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };
  useOutsideClick(handleClose, wrapperRef);

  const handleEditStatus = (statusId: number) => {
    fetch(`/api/status/adoptions/${id}`, {
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

  const handleDetailsClick = () => {
    router.push(`/admin/requests/${id}`);
  };

  if (!data || !adoptionStatusData) return null;

  return (
    <Wrapper>
      <StyledTd>
        <StyledText>{name}</StyledText>
      </StyledTd>
      <StyledTd>
        <StyledText>{petName}</StyledText>
      </StyledTd>
      <StyledTd>
        <StyledText>
          <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
        </StyledText>
      </StyledTd>
      <StyledTd>
        <StyledText>{phone}</StyledText>
      </StyledTd>
      <StyledTd>
        <StyledText>{municipality}</StyledText>
      </StyledTd>
      <StyledTd>
        <Status
          id={adoption_status}
          idValue={adoption_status}
          name={adoptionStatus?.name}
          onClick={handleClick}
        />
        {isOpen && (
          <SelectedWrapper ref={wrapperRef}>
            {remainingStatus?.map((el, index) => (
              <StyledStatusElement
                key={index}
                onClick={() => handleEditStatus(el.id)}
              >
                {el.name}
              </StyledStatusElement>
            ))}
          </SelectedWrapper>
        )}
      </StyledTd>
      <StyledTd>
        <StyledButton
          icon={IconTypes.Chevron}
          iconPosition={IconPosition.Right}
          onClick={handleDetailsClick}
        />
      </StyledTd>
    </Wrapper>
  );
};

export default RequestRow;
