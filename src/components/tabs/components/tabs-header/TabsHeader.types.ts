export type PropTypes = {
  children: React.ReactNode;
  changeTab: () => void;
  disabled?: boolean;
  selectedTab: string;
  id: string;
};

export type StylingProps = {
  disabled?: boolean;
  selectedTab: string;
  id: string;
};
