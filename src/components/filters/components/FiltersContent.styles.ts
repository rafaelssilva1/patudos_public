import styled from "@emotion/styled";
import Checkbox from "@base/components/checkbox/Checkbox";
import Heading from "@base/components/heading/Heading";
import Button from "@base/components/button/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-18);
  padding: var(--spacing-40) var(--spacing-24);
  border-radius: 1rem;
  margin: 0 auto;

  background-color: var(--color-bg-dark-grey);
  width: 100%;
  max-width: 144rem;
  height: auto;
`;

export const SpecialNeeds = styled(Checkbox)`
  color: var(--color-white);
`;

export const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 30rem));
  gap: var(--spacing-20);
  align-items: start;
`;

export const StyledHeading = styled(Heading)`
  color: var(--color-white);
`;

export const StyledButton = styled(Button)`
  font-size: 1.4rem;
  width: fit-content;
`;
