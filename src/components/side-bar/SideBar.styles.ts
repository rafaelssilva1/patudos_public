import styled from "@emotion/styled";
import Button from "../button/Button";

export const Wrapper = styled.div`
  width: 25%;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-32);
  padding: var(--spacing-40) var(--spacing-60);
  border-right: 0.1rem solid var(--color-text-grey);
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--spacing-20);
  align-items: flex-end;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  justify-content: flex-start;
`;

export const StyledLogoutButton = styled(Button)`
  position: absolute;
  bottom: var(--spacing-32);
  right: var(--spacing-60);
`;
