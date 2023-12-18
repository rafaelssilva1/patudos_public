import styled from "@emotion/styled";
import Button from "../button/Button";
import typography from "@base/theme/typography.styles";
import * as media from "@base/theme/custom-media";

export const StyledButton = styled(Button)`
  ${typography.p.default}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: var(--spacing-12);
`;

export const SortWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  ${media.extraSmallMedia} {
    display: none;
  }
  width: 100%;
  max-width: 144rem;
  height: auto;
`;
export const MobileWrapper = styled.div`
  ${media.gteSmallMedia} {
    display: none;
  }
`;
