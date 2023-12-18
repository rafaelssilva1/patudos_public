import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  padding: var(--spacing-32);
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-block: var(--spacing-60) var(--spacing-32);
`;

export const TableHeader = styled.thead`
  ${typography.p.default}
  border-bottom: 0.05rem solid var(--color-text-grey);
  margin-bottom: var(--spacing-8);

  & th {
    text-align: left;
    padding-bottom: var(--spacing-8);
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;
