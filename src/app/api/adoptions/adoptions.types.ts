export type AdoptionRequestsType = {
  id: number;
  pet_id: number;
  name: string;
  email: string;
  phone: string;
  pets_at_home: number;
  how_many_pets: string;
  pet_types: string;
  how_many_sterilized: string;
  municipality: string;
  adoption_status: number;
};

export type AdoptionRequestsTypes = {
  data: AdoptionRequestsType[];
  count: {
    count: number;
  }[];
  error?: string;
};
