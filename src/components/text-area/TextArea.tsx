import { BaseTextArea } from "./TextArea.styles";
import { PropTypes } from "./TextArea.types";

const TextArea: React.FC<PropTypes> = ({
  content,
  rows,
  cols,
  displayEllipsis = false,
  ...remainingProps
}) => {
  return (
    <BaseTextArea
      rows={rows || 1}
      cols={cols}
      displayEllipsis={displayEllipsis}
      value={content}
      {...remainingProps}
    />
  );
};

export default TextArea;
