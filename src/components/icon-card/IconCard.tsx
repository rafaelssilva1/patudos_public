import React from "react";
import { IconWrapper, Subtitle, Title, Wrapper } from "./IconCard.styles";
import { PropTypes } from "./IconCard.types";

const IconCard: React.FC<PropTypes> = ({ data }) => {
  const { icon, color, title, subtitle, removePadding } = data || {};

  if (!title || !subtitle) {
    return null;
  }

  return (
    <Wrapper>
      <IconWrapper color={color || ""} removePadding={removePadding}>
        {icon}
      </IconWrapper>
      <Title level="3">{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default IconCard;
