import { Wrapper } from "./Color.styles";
import { PropTypes } from "./Color.types";

const Color: React.FC<PropTypes> = ({ color }) => {
  if (!color) return null;

  return <Wrapper color={color || ""}></Wrapper>;
};

export default Color;
