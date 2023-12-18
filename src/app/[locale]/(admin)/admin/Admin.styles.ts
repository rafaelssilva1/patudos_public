import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const ModulesWrapper = styled.div`
  width: 75%;
  margin-left: 25%;
`;

export const ContentWrapper = styled.div`
  padding: var(--spacing-32);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;

export const PetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  background-color: var(--color-bg-dark-grey);
  border-radius: 1rem;
  padding: var(--spacing-16);
`;

export const RequestsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-16);
  background-color: var(--color-bg-light-grey);
  border-radius: 1rem;
  padding: var(--spacing-16);
`;
