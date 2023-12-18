export type StatusType = {
  id: number;
  name?: string;
};

export type StatusTypes = {
  data: StatusType[];
  error?: string;
};
