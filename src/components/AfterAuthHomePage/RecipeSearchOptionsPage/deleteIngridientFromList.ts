import { DeletingParamType } from "../../../types/types";

export function deleteIngridientFromList(
  { deletingIngridient,
    settings, setRequestSettings }: DeletingParamType
) {
  const filtredList = settings.ingridientsSelector.ingridients.filter(
    (ingridient) => ingridient !== deletingIngridient
  );
  const newIngridientsList = {
    ...settings,
    ingridientsSelector: {
      ...settings.ingridientsSelector,
      ingridients: filtredList,
    },
  };
  setRequestSettings(newIngridientsList);
}
