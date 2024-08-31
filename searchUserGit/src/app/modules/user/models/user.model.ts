import { Item } from './item.model';

export interface User {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}
