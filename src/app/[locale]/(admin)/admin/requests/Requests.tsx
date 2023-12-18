"use client";

import Heading from "@base/components/heading/Heading";
import Pagination from "@base/components/pagination/Pagination";
import { usePathname, useRouter } from "next-intl/client";
import { ContentWrapper } from "../Admin.styles";
import { StyledTable, TableHeader, TitleWrapper } from "./Requests.styles";
import { PropTypes } from "./Requests.types";
import RequestRow from "./components/request-row/RequestRow";
import { ADOPTION_REQUESTS_RENDER_LIMIT } from "@base/utils/global-variables";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import useQueryParams from "@base/hooks/useQueryParams";

const Requests: React.FC<PropTypes> = ({ data, token }) => {
  const { adoptionRequestsData, adoptionStatusData } = data;

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createQueryString } = useQueryParams();
  const pageParam = searchParams.get("page") ?? "1";

  const dataToRender = useMemo(() => {
    const lowerLimit =
      Number(pageParam) * ADOPTION_REQUESTS_RENDER_LIMIT -
      ADOPTION_REQUESTS_RENDER_LIMIT;
    const ceilLimit = ADOPTION_REQUESTS_RENDER_LIMIT * Number(pageParam);

    const slice = pageParam
      ? adoptionRequestsData.data?.slice(lowerLimit, ceilLimit)
      : adoptionRequestsData.data?.slice(0, ADOPTION_REQUESTS_RENDER_LIMIT);

    return slice;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClick = (page: number) => {
    router.push(
      `${pathname}?${createQueryString({
        name: "page",
        data: [{ value: page.toString() }],
      })}`,
    );
  };

  const isThereAnyDataToRender = !!adoptionRequestsData.data?.length;

  if (!adoptionRequestsData || !adoptionStatusData) return null;

  return (
    <ContentWrapper>
      <TitleWrapper>
        <Heading level="1">Pedidos de Adoção</Heading>
      </TitleWrapper>
      <StyledTable>
        <TableHeader>
          <tr>
            <th>Nome</th>
            <th>Animal</th>
            <th>Email</th>
            <th>Contacto</th>
            <th>Concelho</th>
            <th>Estado</th>
          </tr>
        </TableHeader>
        <tbody>
          {dataToRender?.map((el, index) => {
            return (
              <RequestRow
                key={index}
                data={el}
                adoptionStatusData={adoptionStatusData}
                token={token}
              />
            );
          })}
        </tbody>
      </StyledTable>
      <Pagination
        handleClick={handleClick}
        pageLength={
          isThereAnyDataToRender
            ? Math.ceil(
                (adoptionRequestsData?.count?.[0].count || 1) /
                  ADOPTION_REQUESTS_RENDER_LIMIT,
              )
            : 1
        }
        currentPage={pageParam}
      />
    </ContentWrapper>
  );
};

export default Requests;
