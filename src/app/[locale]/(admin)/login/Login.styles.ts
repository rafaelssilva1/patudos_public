import Button from "@base/components/button/Button";
import Heading from "@base/components/heading/Heading";
import Input from "@base/components/input/base-input/Input";
import { weight } from "@base/theme/typography.styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: var(--color-main-default);
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--color-white);
  padding: var(--spacing-108) var(--spacing-106);
  border-radius: 0.5rem;

  min-width: 58rem;
`;

export const StyledHeading = styled(Heading)`
  font-weight: ${weight.regular};
  color: var(--color-text-grey);
  margin-block: var(--spacing-4) var(--spacing-48);
`;

export const StyledButton = styled(Button)`
  margin-top: var(--spacing-36);
`;
