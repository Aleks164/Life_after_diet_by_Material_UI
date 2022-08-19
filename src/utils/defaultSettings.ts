import { SettingType } from "@/types/types";

export const defaultSettings: SettingType = {
  dietSelector: { diet: "", },
  cuisinesList: [],
  intolerancesList: [],
  ingridientsSelector: { ingridients: [], },
  mealTypesSelector: { mealType: "", },
  excludeIngridientsSelector: { excludeIngridients: [], },
  maxCaloriesInput: { value: 500, },
};
