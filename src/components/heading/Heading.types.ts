type Level = "1" | "2" | "3" | "4" | "5";

export type StylingProps = {
  level: Level;
};

export type PropTypes = {
  children: React.ReactNode;
  level: Level;
  id?: string;
  onClick?: () => void;
};
