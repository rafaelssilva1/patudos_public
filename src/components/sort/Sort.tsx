import useQueryParams from "@base/hooks/useQueryParams";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";
import { IconTypes } from "../button/Button.types";
import { StyledSelect } from "./Sort.styles";

const SortBy: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const searchParams = useSearchParams();

  const { createQueryString } = useQueryParams();

  const sortList = [
    { name: t("sort-by.age-desc"), value: "ageDesc" },
    { name: t("sort-by.age-asc"), value: "ageAsc" },
    { name: t("sort-by.pickup-desc"), value: "pickupDesc" },
    { name: t("sort-by.pickup-asc"), value: "pickupAsc" },
  ];

  const handleSortPick = ({
    sortType,
    value,
  }: {
    sortType: string;
    value: string;
  }) => {
    router.push(
      `${pathname}?${createQueryString({
        name: sortType,
        data: [{ value }],
      })}`,
    );
  };

  return (
    <StyledSelect
      id={"sort"}
      onChange={(e) => {
        handleSortPick({ sortType: "sort", value: e.target.value });
      }}
      icon={IconTypes.SortBy}
      label={t("sort-by.title")}
      isTyping={searchParams.has("sort")}
      defaultValue={searchParams.get("sort") ?? t("sort-by.title")}
    >
      {sortList.map(({ value, name }, index) => (
        <option key={`${value}-${index}`} value={value}>
          {name}
        </option>
      ))}
    </StyledSelect>
  );
};

export default SortBy;
