"use client";

import { useTranslations } from "next-intl";

import PetCard from "@base/components/pet-card/PetCard";
import { PetDetailsType, PetTypes } from "@base/app/api/pets/pets.types";
import { PetsWrapperGrid, StyledLink, Wrapper } from "./Adopt.styles";
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Pagination from "@base/components/pagination/Pagination";
import { RENDER_LIMIT } from "@base/utils/global-variables";
import useQueryParams from "@base/hooks/useQueryParams";
import Filters from "@base/components/filters/Filters";
import { ColorsType } from "@base/app/api/colors/colors.types";
import { SizesType } from "@base/app/api/sizes/sizes.types";

const Adopt = ({
  data,
}: {
  data?: { petsData: PetTypes; sizesData: SizesType; colorsData: ColorsType };
}) => {
  const { petsData, sizesData, colorsData } = data || {};

  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page") ?? "1";
  const sortBy = searchParams.get("sort");

  const orderedData = useMemo(() => {
    let orderedArray: PetDetailsType[] = [];
    if (sortBy === "ageDesc") {
      orderedArray =
        petsData?.data?.sort(
          (a, b) =>
            new Date(b.birthDate!).getTime() - new Date(a.birthDate!).getTime(),
        ) || [];
    } else if (sortBy === "ageAsc") {
      orderedArray =
        petsData?.data?.sort(
          (a, b) =>
            new Date(a.birthDate!).getTime() - new Date(b.birthDate!).getTime(),
        ) || [];
    } else if (sortBy === "pickupAsc") {
      orderedArray =
        petsData?.data?.sort(
          (a, b) =>
            new Date(a.pickupDate!).getTime() -
            new Date(b.pickupDate!).getTime(),
        ) || [];
    } else {
      orderedArray =
        petsData?.data?.sort(
          (a, b) =>
            new Date(b.pickupDate!).getTime() -
            new Date(a.pickupDate!).getTime(),
        ) || [];
    }
    return orderedArray;
  }, [petsData, sortBy]);

  const dataToRender = useMemo(() => {
    const lowerLimit = Number(pageParam) * RENDER_LIMIT - RENDER_LIMIT;
    const ceilLimit = RENDER_LIMIT * Number(pageParam);

    const slice = pageParam
      ? orderedData?.slice(lowerLimit, ceilLimit)
      : orderedData?.slice(0, RENDER_LIMIT);

    return slice;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { createQueryString } = useQueryParams();

  const handleClick = (page: number) => {
    router.push(
      `${pathname}?${createQueryString({
        name: "page",
        data: [{ value: page.toString() }],
      })}`,
    );
  };

  const isThereAnyDataToRender = data || !data!.petsData.error;

  if (!petsData || !sizesData || !colorsData) return null;

  return (
    <Wrapper>
      <Filters data={{ sizesData, colorsData }} />
      {isThereAnyDataToRender && (
        <>
          <PetsWrapperGrid>
            {dataToRender?.map((el, index) => {
              return (
                <StyledLink
                  key={index}
                  href={`${t("header.adopt.url")}/${el.id}`}
                >
                  <PetCard data={el} />
                </StyledLink>
              );
            })}
          </PetsWrapperGrid>
          <Pagination
            handleClick={handleClick}
            pageLength={
              isThereAnyDataToRender
                ? Math.ceil((petsData?.count?.[0].count || 1) / RENDER_LIMIT)
                : 1
            }
            currentPage={pageParam}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Adopt;
