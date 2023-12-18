export enum InputTypes {
  Checkbox = "checkbox",
  Radio = "radio",
}

export type PropTypes = {
  id: string;
  value: string;
  error?: string;
  checked?: boolean;
  disabled?: boolean;
  type?: InputTypes;
  name: string;
  onClick?: () => void;
  resetOnChange?: boolean;
  label: string;
  variant?: CheckboxVariant;
};

export type StylingProps = {
  error?: string;
  isChecked?: boolean;
  type?: InputTypes;
  variant?: CheckboxVariant;
};

export enum CheckboxVariant {
  Default = "Default",
  Small = "Small",
}
