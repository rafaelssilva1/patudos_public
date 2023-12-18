import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";
import Select from "../select/Select";

export const StyledSelect = styled(Select)`
  ${typography.p.default};
  height: 3.2rem;
  padding-block: var(--spacing-4);
  color: var(--color-main-default);
  border-color: var(--color-main-default);
  width: 17rem;

  & label {
    ${typography.p.default};
    color: var(--color-main-default);
  }
`;
