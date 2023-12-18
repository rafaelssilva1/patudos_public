import React from "react";
import { PropTypes } from "./OtherInfoCard.types";
import { Wrapper, StyledHeading, IconWrapper } from "./OtherInfoCard.styles";
import { Close } from "@base/components/icons";
import Check from "@base/components/icons/Check";

const OtherInfoCard: React.FC<PropTypes> = ({ data }) => {
  const { isTrue, text, display } = data || {};

  if (!data || !display) {
    return null;
  }

  return (
    <Wrapper>
      <IconWrapper bgColor={isTrue}>
        {isTrue ? <Check color="white" /> : <Close />}
      </IconWrapper>
      <StyledHeading level="4">{text}</StyledHeading>
    </Wrapper>
  );
};

export default OtherInfoCard;
