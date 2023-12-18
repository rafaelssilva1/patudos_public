"use client";

import Heading from "@base/components/heading/Heading";
import { PropTypes } from "./Pets.types";
import { TitleWrapper, Wrapper } from "./Pets.styles";
import { StyledTable, TableHeader } from "../requests/Requests.styles";
import PetRow from "./components/pet-row/PetRow";
import Pagination from "@base/components/pagination/Pagination";
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import useQueryParams from "@base/hooks/useQueryParams";
import { MIN_QUERY, RENDER_LIMIT } from "@base/utils/global-variables";
import { useEffect, useMemo, useState } from "react";
import Input from "@base/components/input/base-input/Input";
import Button from "@base/components/button/Button";
import { IconTypes } from "@base/components/button/Button.types";
import NewPetModal from "./components/new-pet-modal/NewPetModal";

const Pets: React.FC<PropTypes> = ({ data, token }) => {
  const { petsData, colorsData, petStatusData, sizesData } = data;
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createQueryString } = useQueryParams();
  const pageParam = searchParams.get("page") ?? "1";
  const currentFilter = searchParams.get("filter") ?? "";

  const [searchFilter, setSearchFilter] = useState(currentFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isThereAnyDataToRender = !!petsData.data?.length;

  const dataToRender = useMemo(() => {
    const lowerLimit = Number(pageParam) * RENDER_LIMIT - RENDER_LIMIT;
    const ceilLimit = RENDER_LIMIT * Number(pageParam);

    const slice = pageParam
      ? petsData.data?.slice(lowerLimit, ceilLimit)
      : petsData.data?.slice(0, RENDER_LIMIT);

    return slice;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petsData]);

  const handleClick = (page: number) => {
    router.push(
      `${pathname}?${createQueryString({
        name: "page",
        data: [{ value: page.toString() }],
      })}`,
    );
  };

  const maxObj = petsData.data?.reduce((accumulator, current) => {
    return accumulator.id! > current.id! ? accumulator : current;
  });

  useEffect(() => {
    if (searchFilter.length > MIN_QUERY) {
      setTimeout(() => {
        router.push(
          `${pathname}?${createQueryString({
            name: "filter",
            remove: true,
            data: [{ value: searchFilter }],
          })}`,
        );
      }, 400);
    } else {
      router.push(
        `${pathname}?${createQueryString({
          name: "filter",
          remove: true,
          data: [{ value: "" }],
        })}`,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFilter]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (!petsData || !colorsData || !petStatusData || !sizesData) return null;

  return (
    <Wrapper>
      <TitleWrapper>
        <Heading level="1">Animais</Heading>
        <Input
          type="search"
          placeholder="Procurar"
          onChange={(e) => setSearchFilter(e.target.value)}
          currentValue={searchFilter}
        />
        <Button icon={IconTypes.Plus} onClick={() => setIsModalOpen(true)}>
          Adicionar
        </Button>
        {isModalOpen && (
          <NewPetModal
            isOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClose={handleModalClose}
            token={token}
            data={{ colorsData, petStatusData, sizesData }}
            newId={maxObj ? Number(maxObj?.id) + 1 : 1}
          />
        )}
      </TitleWrapper>
      <StyledTable>
        <TableHeader>
          <tr>
            <th>ID único</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Sexo</th>
            <th>Cor</th>
            <th>Estado</th>
          </tr>
        </TableHeader>
        <tbody>
          {dataToRender?.map(
            (
              { id, name, type, sex, color, pet_status: petStatusId },
              index,
            ) => {
              const petColor = colorsData?.find((el) => el.id === Number(color))
                ?.code;
              const petStatus = petStatusData.data?.find(
                (el) => el.id === petStatusId,
              )?.name;

              return (
                <PetRow
                  key={index}
                  data={{
                    id,
                    name,
                    type,
                    sex,
                    petStatusId,
                    petColor,
                    petStatus,
                  }}
                />
              );
            },
          )}
        </tbody>
      </StyledTable>
      <Pagination
        handleClick={handleClick}
        pageLength={
          isThereAnyDataToRender
            ? Math.ceil((petsData?.count?.[0].count || 1) / RENDER_LIMIT)
            : 1
        }
        currentPage={pageParam}
      />
    </Wrapper>
  );
};

export default Pets;
