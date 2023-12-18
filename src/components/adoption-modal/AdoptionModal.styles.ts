import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";
import Heading from "../heading/Heading";
import Link from "../link/Link";

export const Wrapper = styled.div`
  padding: var(--spacing-80) var(--spacing-32);
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;

  ${media.lteSmallMedia} {
    padding: var(--spacing-32) var(--spacing-16);
  }
`;

export const StyledText = styled.span`
  ${typography.p.large};
  margin-block: var(--spacing-32);
  max-width: 80%;
`;

export const StyledLink = styled(Link)`
  color: var(--color-main-default);
`;

export const StyledOl = styled.ol`
  list-style-type: unset;
`;

export const StyledLi = styled.li`
  list-style: unset;
`;
