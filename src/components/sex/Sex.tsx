import { Female, Male } from "../icons";
import { PropTypes } from "./Sex.types";

const Sex: React.FC<PropTypes> = ({ sex }) => {
  if (sex === undefined || sex === null) {
    return null;
  }

  return sex ? <Female /> : <Male />;
};

export default Sex;
