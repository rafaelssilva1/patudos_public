import useQueryParams, { QueryDataTypes } from "@base/hooks/useQueryParams";
import { usePathname, useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";
import {
  SpecialNeeds,
  FiltersGrid,
  StyledHeading,
  Wrapper,
  StyledButton,
} from "./FiltersContent.styles";
import { useSearchParams } from "next/navigation";
import { MultiSelect } from "@base/components/multiple-select/MultipleSelect";
import { Item } from "@base/components/multiple-select/MultipleSelect.types";
import { useCallback, useState } from "react";
import { PropTypes } from "../Filters.types";
import { CheckboxVariant } from "@base/components/checkbox/Checkbox.types";

const FiltersContent: React.FC<PropTypes> = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const searchParams = useSearchParams();

  const { createQueryString } = useQueryParams();

  const filtersData = {
    type: [
      { name: t("other-info.type.cat"), id: "0" },
      { name: t("other-info.type.dog"), id: "1" },
    ],
    sex: [
      { name: t("pet-details.sex.male"), id: "0" },
      { name: t("pet-details.sex.female"), id: "1" },
    ],
    size: [
      { name: t("pet-details.sex.male"), id: "1" },
      { name: t("pet-details.sex.male"), id: "2" },
      { name: t("pet-details.sex.male"), id: "3" },
      { name: t("pet-details.sex.male"), id: "4" },
      { name: t("pet-details.sex.male"), id: "5" },
      { name: t("pet-details.sex.male"), id: "6" },
    ],
    colors: [...data.colorsData],
    sizes: [...data.sizesData],
  };

  const handleSpecialNeedsClick = () => {
    router.push(
      `${pathname}?${createQueryString({
        name: "specialNeeds",
        data: [{ value: "0" }],
        remove: true,
        reset: true,
      })}`,
    );
  };

  const handleTypeSelect = (filters: Item[]) => {
    let array: QueryDataTypes[] = [];
    filters.forEach((el) => array.push({ value: el?.id || "" }));

    router.push(
      `${pathname}?${createQueryString({
        name: "type",
        data: array,
        reset: true,
      })}`,
    );
  };

  const handleSexSelect = (filters: Item[]) => {
    let array: QueryDataTypes[] = [];
    filters.forEach((el) => array.push({ value: el?.id || "" }));

    router.push(
      `${pathname}?${createQueryString({
        name: "sex",
        data: array,
        reset: true,
      })}`,
    );
  };

  const handleColorsSelect = (filters: Item[]) => {
    let array: QueryDataTypes[] = [];
    filters.forEach((el) => array.push({ value: el?.id || "" }));

    router.push(
      `${pathname}?${createQueryString({
        name: "color",
        data: array,
        reset: true,
      })}`,
    );
  };

  const handleSizesSelect = (filters: Item[]) => {
    let array: QueryDataTypes[] = [];
    filters.forEach((el) => array.push({ value: el?.id || "" }));

    router.push(
      `${pathname}?${createQueryString({
        name: "size",
        data: array,
        reset: true,
      })}`,
    );
  };

  const parseDefaultFilters = useCallback(
    ({
      filters,
      filterOptions,
    }: {
      filters: string | null;
      filterOptions: Item[];
    }) => {
      const array = filters?.split("|");

      let parsedArray: Item[] = [];
      array?.forEach((el) => {
        const current = filterOptions.find((a) => a.id?.toString() === el);
        parsedArray.push({ ...current });
      });

      return parsedArray;
    },
    [],
  );

  const clearAllFilters = () => {
    // router.push(pathname);
    // window.location.reload();

    router.push(
      `${pathname}?${createQueryString({
        name: "",
        data: [],
        clearAllFilters: true,
      })}`,
    );
  };

  return (
    <Wrapper>
      <StyledHeading level="1">{t("filters.title")}</StyledHeading>
      <FiltersGrid>
        <MultiSelect
          items={filtersData.type}
          placeholder={t("filters.type")}
          handleClick={handleTypeSelect}
          resetOnChange={searchParams.size === 0}
          defaultSelected={parseDefaultFilters({
            filters: searchParams.get("type"),
            filterOptions: filtersData.type,
          })}
        />
        <MultiSelect
          items={filtersData.sex}
          placeholder={t("filters.sex")}
          handleClick={handleSexSelect}
          resetOnChange={searchParams.size === 0}
          defaultSelected={parseDefaultFilters({
            filters: searchParams.get("sex"),
            filterOptions: filtersData.sex,
          })}
        />
        <MultiSelect
          items={filtersData.colors}
          placeholder={t("filters.color")}
          handleClick={handleColorsSelect}
          resetOnChange={searchParams.size === 0}
          defaultSelected={parseDefaultFilters({
            filters: searchParams.get("color"),
            filterOptions: filtersData.colors,
          })}
        />
        <MultiSelect
          items={filtersData.sizes}
          placeholder={t("filters.size")}
          handleClick={handleSizesSelect}
          resetOnChange={searchParams.size === 0}
          defaultSelected={parseDefaultFilters({
            filters: searchParams.get("size"),
            filterOptions: filtersData.sizes,
          })}
        />
      </FiltersGrid>
      <SpecialNeeds
        id={t("filters.special-needs")}
        value={t("filters.special-needs")}
        label={t("filters.special-needs")}
        name={t("filters.special-needs")}
        checked={searchParams.has("specialNeeds")}
        onClick={handleSpecialNeedsClick}
        resetOnChange={searchParams.size === 0}
        variant={CheckboxVariant.Small}
      />
      <StyledButton onClick={clearAllFilters}>
        {t("filters.clear-all-filters")}
      </StyledButton>
    </Wrapper>
  );
};

export default FiltersContent;
