const Valid = true;
const Invalid = false;
const Pristine = null;
export type InputState = typeof Valid | typeof Invalid | typeof Pristine;

export type UserType = {
  id: string;
};

export type MyPlantsType = {
  id: string;
  name: string;
  surname: string;
  imageUrl: string;
  plantId: string;
  sensorId: string;
  values?: {
    humidity: string;
    reservoir: string;
  };
};

export type DiscoverType = {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  environment: string;
  size: string;
  description: string;
  water: string;
  frequency: string;
  temperature: string;
  lighting: string;
  image: string;
};
