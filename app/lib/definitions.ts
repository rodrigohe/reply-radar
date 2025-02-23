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

export type UsersLocationColors = {
  id: string;
  user_id: string;
  location: string;
  location_colors: LocationColors[] | null;
  created_date: string;
  last_updated: string;
}

export type CountByStage = {
  stage: string;
  count: number;
  color_hex: string;
}

export type AppsCountPerYearMonth = {
  mon: string;
  month: number;
  year: number;
  count: number;
}