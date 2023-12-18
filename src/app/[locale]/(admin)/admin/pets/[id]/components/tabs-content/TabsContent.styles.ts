import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: var(--spacing-32);
  margin-block: var(--spacing-32);

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-32);
  }
`;
