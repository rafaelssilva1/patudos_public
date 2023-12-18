import Heading from "@base/components/heading/Heading";
import Tabs from "@base/components/tabs/Tabs";
import typography from "@base/theme/typography.styles";
import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";

export const Wrapper = styled.main`
  margin: 0 auto;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  margin: 0 auto var(--spacing-32);
  max-width: 144rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-32);
`;

export const StyledTabs = styled(Tabs)`
  width: 100%;
  position: relative;
`;

export const StyledHeading = styled(Heading)`
  text-align: center;
  margin-block: var(--spacing-16);
`;

export const StyledText = styled.p`
  ${typography.p.default};
  text-align: center;
`;

export const StyledContentText = styled.p`
  ${typography.p.default}
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-24);

  ${media.extraSmallMedia} {
    flex-direction: column;
  }
`;

export const PetsWrapper = styled.div`
  display: grid;
  gap: var(--spacing-16);
  grid-template-columns: repeat(5, 20rem);
  gap: var(--spacing-32);

  ${media.mediumMedia} {
    grid-template-columns: repeat(3, 21rem);
  }
  ${media.smallMedia} {
    grid-template-columns: repeat(2, 21rem);
  }
  ${media.extraSmallMedia} {
    grid-template-columns: repeat(1, minmax(21rem, 35rem));
    gap: var(--spacing-16);
  }
`;
