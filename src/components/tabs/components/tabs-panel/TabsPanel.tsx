"use client";

import { PropTypes } from "./TabsPanel.types";
import { TabsPanelWrapper } from "./TabsPanel.styles";

const TabsPanel: React.FC<PropTypes> = ({ children, ...props }) => {
  return <TabsPanelWrapper {...props}>{children}</TabsPanelWrapper>;
};

export default TabsPanel;
