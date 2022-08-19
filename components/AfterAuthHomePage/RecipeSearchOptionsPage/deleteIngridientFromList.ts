import { InputParamType } from "../../../types/types";

export function deleteIngridientFromList(
  deletingIngridient: string,
  { settings, setRequestSettings }: InputParamType
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
