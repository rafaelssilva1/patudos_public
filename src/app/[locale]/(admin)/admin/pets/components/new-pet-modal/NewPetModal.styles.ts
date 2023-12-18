import Modal from "@base/components/modal/Modal";
import Select from "@base/components/select/Select";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as media from "@base/theme/custom-media";

export const StyledModal = styled(Modal)`
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-full-black);
  padding: var(--spacing-60);
  overflow: scroll;

  & svg {
    color: var(--color-full-black);
  }

  ${media.gteSmallMedia} {
    width: 80%;
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  padding: var(--spacing-32);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: var(--spacing-32);
`;

export const TitleWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-32);
`;

export const InputFormSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-32);
`;

export const FormSection = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;

export const StyledSelect = styled(Select)`
  & > div {
    margin-bottom: var(--spacing-16);
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;

export const ColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-16);
`;

export const ColorCircle = styled("div", {
  shouldForwardProp: (prop: string): boolean =>
    !["color", "selectedColor"].includes(prop),
})<{ color?: string; selectedColor?: boolean }>`
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  border: 0.05rem solid var(--color-full-black);
  cursor: pointer;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}

  ${({ selectedColor }) =>
    selectedColor &&
    css`
      border: 0.5rem solid var(--color-main-default);
    `}
`;

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);

  & > div {
    max-width: 20rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;

  & img {
    border-radius: 1rem;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;
