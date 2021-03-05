import {Food} from './food';

export interface Recipe {
  name: string;
  parts: Map<Food, number>;
}
