import TextArea from "@base/components/text-area/TextArea";
import { Wrapper } from "./TabsContent.styles";
import { PropTypes } from "./TabsContent.types";
import Heading from "@base/components/heading/Heading";

const TabsContent: React.FC<PropTypes> = ({
  shortDescription,
  description,
}) => {
  if (!shortDescription || !description) return null;

  return (
    <Wrapper>
      <div>
        <Heading level="2">Frase de Destaque</Heading>
        <TextArea
          displayEllipsis
          rows={5}
          content={shortDescription || ""}
          disabled
        />
      </div>
      <div>
        <Heading level="2">Descrição</Heading>
        <TextArea
          displayEllipsis
          rows={5}
          content={description || ""}
          disabled
        />
      </div>
    </Wrapper>
  );
};

export default TabsContent;
