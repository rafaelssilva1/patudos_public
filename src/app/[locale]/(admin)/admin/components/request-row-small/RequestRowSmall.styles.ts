import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  gap: var(--spacing-8);
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 4.1rem;
  height: 4.1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  gap: var(--spacing-8);
`;

export const DateText = styled.span`
  ${typography.p.small}
  color: var(--color-white);
`;

export const RequestDetailsText = styled.span`
  ${typography.p.default}
  color: var(--color-white);
`;
