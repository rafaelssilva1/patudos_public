"use client";

import { ContentWrapper, PetsWrapper, RequestsWrapper } from "./Admin.styles";
import { StatusTypes } from "@base/app/api/status/status.types";
import { PetTypes } from "@base/app/api/pets/pets.types";
import { AdoptionRequestsTypes } from "@base/app/api/adoptions/adoptions.types";
import { redirect } from "next-intl/server";
import PetRowSmall from "./components/pet-row-small/PetRowSmall";
import Heading from "@base/components/heading/Heading";
import RequestRowSmall from "./components/request-row-small/RequestRowSmall";

type PropTypes = {
  isUserLoggedIn: boolean;
  data: {
    petsData: PetTypes;
    adoptionRequestsData: AdoptionRequestsTypes;
    adoptionStatusData: StatusTypes;
  };
};

const Admin: React.FC<PropTypes> = ({ isUserLoggedIn, data }) => {
  const { petsData, adoptionRequestsData, adoptionStatusData } = data;

  if (!isUserLoggedIn) {
    redirect("/login");
  }

  if (!isUserLoggedIn) {
    return null;
  }

  return (
    <ContentWrapper>
      <Heading level="2">Pedidos de Adoção Recentes</Heading>
      <PetsWrapper>
        {adoptionRequestsData.data?.map(
          ({ id, name, pet_id, adoption_status }, index) => {
            const adoptionStatusName =
              adoptionStatusData.data.find((el) => el.id === adoption_status)
                ?.name || "";

            return (
              <RequestRowSmall
                key={index}
                data={{
                  id,
                  name,
                  pet_id,
                  adoption_status,
                  adoptionStatusName,
                }}
              />
            );
          },
        )}
      </PetsWrapper>
      <Heading level="2">Animais Recentes</Heading>
      <RequestsWrapper>
        {petsData.data?.map(({ id, name, type, pickupDate, image }, index) => {
          return (
            <PetRowSmall
              key={index}
              data={{
                id,
                image,
                name,
                type,
                pickupDate,
              }}
            />
          );
        })}
      </RequestsWrapper>
    </ContentWrapper>
  );
};

export default Admin;
