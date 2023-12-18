export type ColorType = {
  id: number;
  name: string;
  code: string;
  locale?: string;
};

export type ColorsType = {
  colors: ColorType[];
};
