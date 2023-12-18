import styled from "styled-components";
import Heading from "../heading/Heading";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-32);
  margin-block: var(--spacing-32);
  width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  height: 30rem;
  position: relative;

  & img {
    border-radius: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  border-radius: 1rem;
  background-color: var(--color-main-default);
  padding: var(--spacing-32) var(--spacing-60);
  max-width: 40rem;

  & button {
    width: 100%;
  }
`;

export const StyledHeading = styled(Heading)`
  color: var(--color-white);
  text-transform: uppercase;
`;

export const StyledText = styled.span`
  color: var(--color-white);
`;
