export type User = {
  id: string;
  email: string;
  password: string;
};

export type Stages = {
  name: string;
  color: string;
};

export type LocationColors = {
  name: string;
  color: string;
};

export type Application = {
  id: string;
  company: string;
  position: string;
  stage: string;
  link: string;
  ref_id: string;
  apply_date: string;
  location: string;
  location_colors: LocationColors[] | null;
  description: string;
  created_date: string;
  last_updated: string;
};

export type ApplicationRaw = Omit<Application, 'location_colors'> & {
  location_colors: string | null;
};