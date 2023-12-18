export type PropTypes = {
  onClose: () => void;
  open: boolean;
} & React.DialogHTMLAttributes<HTMLDivElement>;
