import typography from "@base/theme/typography.styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-16);
  border-radius: 1rem;

  background-color: var(--color-bg-grey);
  padding: var(--spacing-16) var(--spacing-12);

  ${media.extraSmallMedia} {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  width: 18rem;
  height: 18rem;
  position: relative;
  border-radius: 1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: var(--spacing-8);

  ${media.extraSmallMedia} {
    justify-content: flex-start;
    gap: var(--spacing-10);
  }
`;

export const StyledText = styled.span`
  ${typography.p.default};
  margin-bottom: var(--spacing-6);
`;

export const StyledPickUpDate = styled.span`
  ${typography.p.small}
  margin-top: var(--spacing-12)
`;

export const SexWrapper = styled("div", {
  shouldForwardProp: (prop: string): boolean => !["sex"].includes(prop),
})<{ sex?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.1rem;
  height: 2.1rem;

  padding: var(--spacing-4);
  margin-bottom: var(--spacing-10);
  border-radius: 50%;
  ${({ sex }) => css`
    background-color: ${sex ? "var(--color-pink)" : "var(--color-blue)"};
  `}
`;
