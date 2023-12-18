import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";

export const Wrapper = styled.div`
  display: flex;
  position: relative;

  ${media.extraSmallMedia} {
    flex-direction: column;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-24);
  flex-wrap: wrap;
  justify-content: center;
`;

export const DonateWrapper = styled.div`
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-stroke-light-grey);
  border-radius: 0.8rem;
  box-shadow: 0 0.1rem 0.02rem var(--box-shadow);
  cursor: pointer;
  margin-bottom: var(--spacing-20);
  transition: box-shadow 0.3s;
  width: 32rem;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  align-items: center;
  padding: var(--spacing-16);

  & span {
    text-align: center;
  }
`;

export const StyledText = styled.span`
  ${typography.p.large}
`;

export const ContentWrapper = styled.div`
  margin: var(--spacing-32);
  max-width: 144rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  flex-wrap: nowrap;
  width: 50%;

  ${media.extraSmallMedia} {
    width: 80%;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  height: 100%;

  ${media.extraSmallMedia} {
    width: 100%;
    height: 50rem;
  }
`;
