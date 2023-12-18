import { TabHeaderWrapper } from "./TabsHeader.styles";
import { PropTypes } from "./TabsHeader.types";

const TabsHeader: React.FC<PropTypes> = ({
  children,
  changeTab,
  disabled,
  selectedTab,
  id,
  ...props
}) => {
  return (
    <TabHeaderWrapper
      id={id}
      onClick={() => !disabled && changeTab()}
      selectedTab={selectedTab}
      disabled={disabled}
      {...props}
    >
      {children}
    </TabHeaderWrapper>
  );
};

export default TabsHeader;
