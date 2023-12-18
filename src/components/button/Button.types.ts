export enum ButtonVariants {
  Primary = "Primary",
  Secondary = "Secondary",
}
export enum Sizes {
  Default = "Default",
  Small = "Small",
}
export enum IconPosition {
  Left = "Left",
  Right = "Right",
}

export enum IconTypes {
  Chevron = "Chevron",
  Plus = "Plus",
  Eye = "Eye",
  Search = "Search",
  Close = "Close",
  Message = "Message",
  SortBy = "SortBy",
  Filters = "Filters",
  HamburguerMenuAlt = "HamburguerMenuAlt",
  Paw = "Paw",
  Copy = "Copy",
  EditAccount = "EditAccount",
  Delete = "Delete",
  Settings = "Settings",
}

export type PropTypes = {
  variant?: ButtonVariants;
  size?: Sizes;
  icon?: IconTypes;
  iconPosition?: IconPosition;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type StylingProps = {
  variant?: ButtonVariants;
  size?: Sizes;
  icon?: IconTypes;
  iconPosition?: IconPosition;
  hasChildren: boolean;
};
