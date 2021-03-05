export interface Food {
  name: string;
  category: string; /* from the shop */
  packageGramm: number; /* gramm in one package in the shop */
  kCal: number; /* per 100g */
  carbohydrates: number; /* per 100g */
  protein: number; /* per 100g */
  fat: number; /* per 100g */
}
