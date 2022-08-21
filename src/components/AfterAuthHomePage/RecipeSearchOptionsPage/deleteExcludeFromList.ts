import { DeletingParamType } from "../../../types/types";

export function deleteExcludeFromList(
  { deletingIngridient,
    settings, setRequestSettings }: DeletingParamType
) {
  const filtredList =
    settings.excludeIngridientsSelector.excludeIngridients.filter(
      (ingridient) => ingridient !== deletingIngridient
    );
  const newIngridientsList = {
    ...settings,
    excludeIngridientsSelector: {
      ...settings.excludeIngridientsSelector,
      excludeIngridients: filtredList,
    },
  };
  setRequestSettings(newIngridientsList);
}
