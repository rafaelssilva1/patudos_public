import { useMemo } from "react";
import { PropTypes } from "./Pagination.types";
import { Arrow } from "@base/components/icons";
import { ArrowPosition } from "@base/components/icons/Arrow";
import {
  ArrowWrapper,
  IconWrapper,
  StyledPageNumber,
  Wrapper,
} from "./Pagination.styles";
import { ButtonVariants } from "@base/components/button/Button.types";

const Pagination: React.FC<PropTypes> = ({
  pageLength,
  currentPage,
  handleClick,
}) => {
  const parsedCurrentPage = Number(currentPage);

  const pagesToRender = useMemo(() => {
    let array = [];
    for (var i = 0; i < pageLength; i++) {
      array.push(i + 1);
    }
    return array;
  }, [pageLength]);

  if (pageLength === 1) return null;

  const slicedArray = pagesToRender.slice(
    parsedCurrentPage === 1
      ? 0
      : parsedCurrentPage === pageLength
      ? parsedCurrentPage - 3
      : parsedCurrentPage - 2,
    parsedCurrentPage !== 1 ? parsedCurrentPage + 1 : parsedCurrentPage + 2,
  );

  return (
    <Wrapper>
      <IconWrapper>
        {!(parsedCurrentPage === 1) && (
          <ArrowWrapper onClick={() => handleClick(parsedCurrentPage - 1)}>
            <Arrow position={ArrowPosition.Left} />
          </ArrowWrapper>
        )}
      </IconWrapper>
      {slicedArray.map((el) => {
        const isCurrent = Number(currentPage) === el;

        return (
          <StyledPageNumber
            key={el}
            onClick={() => handleClick(el)}
            currentPage={isCurrent}
            variant={ButtonVariants.Secondary}
          >
            {el}
          </StyledPageNumber>
        );
      })}
      <IconWrapper>
        {!(parsedCurrentPage === pageLength) && (
          <ArrowWrapper onClick={() => handleClick(parsedCurrentPage + 1)}>
            <Arrow position={ArrowPosition.Right} />
          </ArrowWrapper>
        )}
      </IconWrapper>
    </Wrapper>
  );
};

export default Pagination;
