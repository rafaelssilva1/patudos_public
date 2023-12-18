export type PropTypes = {
  content: string;
  rows?: number;
  cols?: number;
  displayEllipsis?: boolean;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;
