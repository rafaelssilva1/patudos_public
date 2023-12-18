export type Item = {
  id?: string;
  name?: string;
};

export type PropTypes = {
  raised?: boolean;
  items: Item[];
  placeholder: string;
  handleClick: (arg: Item[]) => void;
  resetOnChange?: boolean;
  defaultSelected?: Item[];
};

export type StylingProps = {
  opened: boolean;
  raised?: boolean;
  wrapperClientHeight: number;
  selectedItems?: boolean;
};
