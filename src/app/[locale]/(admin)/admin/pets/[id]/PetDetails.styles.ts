import typography, { weight } from "@base/theme/typography.styles";
import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";
import Tabs from "@base/components/tabs/Tabs";
import Button from "@base/components/button/Button";

export const Wrapper = styled.div`
  padding: var(--spacing-32);
`;

export const TitleWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: var(--spacing-16);
`;

export const StyledEditButton = styled(Button)`
  position: absolute;
  right: var(--spacing-32);
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;

  & img {
    border-radius: 1rem;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-block: var(--spacing-32);
`;

export const InfoWrapper = styled.div`
  width: 50%;
  display: flex;
  gap: var(--spacing-24);
  flex-wrap: wrap;

  ${media.lteSmallMedia} {
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: var(--spacing-14);
  width: 100%;
`;

export const OtherInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: var(--spacing-44);
`;

export const MainWrapper = styled.div`
  position: relative;
`;

export const SelectedWrapper = styled.div`
  position: absolute;
  z-index: var(--index-menu);
  background-color: var(--color-white);
  width: 100%;
  min-width: 13rem;
  ${typography.p.small}
  border: 0.1rem solid var(--color-text-grey);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--spacing-8);

  & p {
    cursor: pointer;
  }
`;

export const StyledStatusElement = styled.p`
  &:hover {
    font-weight: ${weight.bold};
  }
`;
