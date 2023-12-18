import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  gap: var(--spacing-8);
  align-items: center;
  justify-content: space-between;
  width: 30rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 4.1rem;
  height: 4.1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  gap: var(--spacing-8);
`;

export const DateText = styled.span`
  ${typography.p.small}
`;

export const PetDetailsText = styled.span`
  ${typography.p.default}
`;
