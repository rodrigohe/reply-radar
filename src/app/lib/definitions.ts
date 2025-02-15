export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Stages = {
  name: string;
  color: string;
};

export type Locations = {
  name: string;
  color: string;
}

export type Application = {
  id: string;
  company: string;
  position: string;
  stage: Stages;
  link: string;
  ref_id: string;
  apply_date: string;
  location: Locations[];
  description: string;
  created_date: string;
  last_updated: string;
};

export type ApplicationRaw = Omit<Application, 'location' | 'stage'> & {
  location: string;
  stage: string;
};