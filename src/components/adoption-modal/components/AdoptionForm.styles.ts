import Button from "@base/components/button/Button";
import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";
import Select from "@base/components/select/Select";

export const Form = styled.form`
  width: 80%;
  max-width: 50rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-8);

  ${media.extraSmallMedia} {
    width: 100%;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-24);

  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: fit-content;
  margin-bottom: var(--spacing-24);

  ${media.extraSmallMedia} {
    width: 100%;
  }
`;

export const StyledSelect = styled(Select)``;
