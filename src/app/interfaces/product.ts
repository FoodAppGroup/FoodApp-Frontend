export interface Product {
  name: string;
  category: string; /* from the shop */
  packageGram: number; /* gram in one package in the shop */
  kCal: number; /* per 100g */
  carbohydrates: number; /* per 100g */
  protein: number; /* per 100g */
  fat: number; /* per 100g */
  unit: string; /* enum with gram or pieces */
}
