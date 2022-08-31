import { deleteIngridientFromList } from "./deleteIngridientFromList";
import { defaultSettings } from "@/utils/defaultSettings";
import { DeletingParamType } from "@/types/types";

describe("addIngredientToList test", () => {
  let setRequestSettingsSpy: jest.Mock;
  const settings = defaultSettings;

  beforeEach(() => {
    setRequestSettingsSpy = jest.fn();
  });
  afterEach(() => {
    setRequestSettingsSpy.mockClear();
  });

  it("show the expected message if the user has entered the wrong recipe name", () => {
    let newSettings;
    const deletingIngridient = "ahi tuna";
    newSettings = JSON.stringify(settings);
    newSettings = JSON.parse(newSettings);
    newSettings.ingridientsSelector.ingridients.push("ahi tuna");
    deleteIngridientFromList( {deletingIngridient,
      settings: newSettings,
      setRequestSettings: setRequestSettingsSpy,
    } as DeletingParamType);
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(settings);
  });
});
