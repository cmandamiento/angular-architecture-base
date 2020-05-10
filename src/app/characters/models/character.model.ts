import { Pagination } from 'src/app/shared/models/pagination.model';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  selected?: boolean;
  location: {
    name: string;
  };
  gender: string;
  type: string;
};

export interface Catalog {
  info: Pagination,
  results: Character[]
}
