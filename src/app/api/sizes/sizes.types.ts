export type SizeType = {
  id: number;
  name: string;
  code: string;
  locale?: string;
};

export type SizesType = {
  sizes: SizeType[];
};
