"use client";

import { useEffect, useRef, useState } from "react";
import { PropTypes } from "../Requests.types";
import {
  ComponentText,
  ElementWrapper,
  MainWrapper,
  SelectedWrapper,
  StyledButton,
  StyledLink,
  StyledStatusElement,
  TitleWrapper,
  Wrapper,
} from "./RequestDetails.styles";
import Status from "../components/status/Status";
import Heading from "@base/components/heading/Heading";
import useOutsideClick from "@base/hooks/useClickOutside";
import { useRouter } from "next-intl/client";
import { IconTypes } from "@base/components/button/Button.types";

const RequestDetails: React.FC<PropTypes> = ({ data, token }) => {
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();

  const { adoptionRequestsData, adoptionStatusData } = data;
  const {
    id,
    pet_id,
    name,
    email,
    phone,
    municipality,
    adoption_status,
    pets_at_home,
    pet_types,
    how_many_pets,
    how_many_sterilized,
  } = adoptionRequestsData.data[0];

  const [petName, setPetName] = useState("");
  const [isOpen, setIsOpened] = useState(false);

  useEffect(() => {
    fetch(`/api/pets/${pet_id}?locale=pt`)
      .then((response) => response.json())
      .then((data) => setPetName(data.details[0].name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const adoptionStatus = adoptionStatusData?.data.find(
    (status) => status.id === adoption_status,
  );
  const remainingStatus = adoptionStatusData?.data.filter(
    (status) => status.id !== adoption_status,
  );

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

  const handleDelete = () => {
    window.confirm("Confirma que quer apagar este registo?");
    if (confirm("Confirma que quer apagar este registo?")) {
      fetch(`/api/adoptions/${id}`, {
        method: "DELETE",
        headers: {
          "X-JWT-Token": token,
        },
      }).then(() => {
        router.push("/admin/requests");
        router.refresh();
      });
    }
  };

  if (!adoptionRequestsData || !adoptionStatusData) return null;

  return (
    <Wrapper>
      <TitleWrapper>
        <Heading level="1">{name}</Heading>
        <MainWrapper>
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
        </MainWrapper>
        <StyledButton icon={IconTypes.Delete} onClick={handleDelete} />
      </TitleWrapper>
      <ElementWrapper>
        <ComponentText>ID único:</ComponentText> {id}
      </ElementWrapper>
      <ElementWrapper>
        <ComponentText>Nome do animal:</ComponentText> {petName}
      </ElementWrapper>
      <ElementWrapper>
        <ComponentText>Email:</ComponentText>{" "}
        <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
      </ElementWrapper>
      <ElementWrapper>
        <ComponentText>Contacto:</ComponentText> {phone}
      </ElementWrapper>
      <ElementWrapper>
        <ComponentText>Concelho:</ComponentText> {municipality}
      </ElementWrapper>
      <ElementWrapper>
        <ComponentText>Tem animais em casa?:</ComponentText>{" "}
        {pets_at_home === 1 ? "Sim" : "Não"}
      </ElementWrapper>
      <ElementWrapper>
        <ComponentText>Quantos:</ComponentText> {pet_types}
      </ElementWrapper>
      <ElementWrapper>
        <ComponentText>Quais:</ComponentText> {how_many_pets}
      </ElementWrapper>
      <ElementWrapper>
        <ComponentText>Quantos são esterilizados:</ComponentText>{" "}
        {how_many_sterilized}
      </ElementWrapper>
    </Wrapper>
  );
};

export default RequestDetails;
