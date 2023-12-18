"use client";

import { Children, ReactElement, useEffect, useMemo, useState } from "react";
import { PropTypes } from "./Tabs.types";
import TabsHeader from "./components/tabs-header/TabsHeader";
import { HeaderList, Underline, Wrapper } from "./Tabs.styles";

const Tabs: React.FC<PropTypes> = ({
  children,
  defaultSelected,
  onChange,
  disabled,
  ...props
}) => {
  const validChildren: ReactElement[] = useMemo(
    () => Children.toArray(children).filter(Boolean) as ReactElement[],
    [children],
  );

  const [selectedTab, setSelectedTab] = useState<string>(
    defaultSelected || validChildren[0].props.id,
  );

  useEffect(() => {
    onChange && onChange(selectedTab);
  }, [selectedTab, onChange]);

  useEffect(() => {
    defaultSelected && setSelectedTab(defaultSelected);
  }, [defaultSelected]);

  const renderedTabHeader = useMemo(
    () =>
      validChildren.map((tab) => {
        const { id, title } = tab.props;

        return (
          <TabsHeader
            key={id}
            id={id}
            disabled={disabled}
            selectedTab={selectedTab}
            changeTab={() => setSelectedTab(id)}
          >
            {title}
          </TabsHeader>
        );
      }),
    [validChildren, disabled, selectedTab],
  );

  const tabContent = useMemo(() => {
    const selectedTabPanel = validChildren.find(
      (tab) => tab.props.id === selectedTab,
    );

    if (!selectedTabPanel) {
      return null;
    }

    return selectedTabPanel.props.children;
  }, [selectedTab, validChildren]);

  return (
    <Wrapper {...props}>
      <HeaderList>{renderedTabHeader}</HeaderList>
      <Underline />
      {tabContent}
    </Wrapper>
  );
};

export default Tabs;
