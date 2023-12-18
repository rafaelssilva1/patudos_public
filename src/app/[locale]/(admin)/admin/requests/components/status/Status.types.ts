import { StatusType } from "@base/app/api/status/status.types";

export type PropTypes = StatusType & {
  onClick?: () => void;
  defaultStyles?: boolean;
  idValue: number;
  selectedStatus?: string;
  defaultSelected?: boolean;
};

export enum StatusVariant {
  Pendente = "1",
  EmAvaliação = "2",
  Aprovada = "3",
  Recusada = "4",
}
