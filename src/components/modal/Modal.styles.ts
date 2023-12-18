import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";

export const BaseModal = styled.div`
  z-index: var(--index-modal);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--color-bg-dark-grey);

  ${media.gteSmallMedia} {
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  color: var(--color-white);
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: var(--index-default);
`;

export const Backdrop = styled.div`
  background-color: var(--color-black-90);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
