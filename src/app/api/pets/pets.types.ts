export type PetDetailsType = {
  id?: string;
  locale?: string;
  type?: string;
  name?: string;
  birthDate?: string;
  sex?: number;
  color?: string;
  shortDescription?: string;
  description?: string;
  vaccinated?: boolean;
  sterilized?: boolean;
  dewormed?: boolean;
  size?: number;
  fivFelv?: boolean;
  pickupDate?: string;
  updated_on?: string;
  image?: string;
  specialNeeds?: boolean;
  pet_status: number;
};

export type PetImageType = {
  id?: string;
  pet_id?: number;
  url: string;
};

export type PetTypes = {
  data: PetDetailsType[];
  count: {
    count: number;
  }[];
  error?: string;
};

export type PetType = {
  details: PetDetailsType[];
  images: PetImageType[];
};

export type PetsType = PetType[];

export type PetPageType = Partial<PetDetailsType>[];
