import { addIngredientToList } from "./addIngredientToList";
import { defaultSettings } from "@/utils/defaultSettings";
import { ingridientsList } from "@/utils/ingridientsList";
import { SettingType,InputParamType } from "@/types/types";

describe("addIngredientToList test", () => {
  let setRequestSettingsSpy: jest.Mock;
  let setIngridientInputValueSpy: jest.Mock;
  let setMessageSpy: jest.Mock;  
  let eventTest: React.MouseEvent<HTMLButtonElement, MouseEvent>;

  const fullListOfIngridients = Object.keys(ingridientsList);
  const settings = defaultSettings;
  let option = "ingridientsSelector" as keyof SettingType;
  let optionType = "ingridients";

  beforeEach(() => {
    setRequestSettingsSpy = jest.fn();
    setMessageSpy = jest.fn();
    setIngridientInputValueSpy = jest.fn();    
    eventTest = {
      target: { setMessageSpy },
      preventDefault: jest.fn(),
    } as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>;
  });
  afterEach(() => {
    setRequestSettingsSpy.mockClear();
    setIngridientInputValueSpy.mockClear();
    setMessageSpy.mockClear();
  });

  it("show the expected message if the user has entered the wrong recipe name", () => {
    const ingridientInputValue = "test input value";

    addIngredientToList(eventTest, {      
       settings,
    ingridientInputValue,
    fullListOfIngridients,
    option,
    optionType,
    setRequestSettings:setRequestSettingsSpy,
    setIngridientInputValue:setIngridientInputValueSpy,
    setMessage:setMessageSpy
     } as unknown as InputParamType);
    expect(setMessageSpy).toHaveBeenCalledWith(
      'Please input a valid ingridient from list and press "+"'
    );
  });  
  it("show the expected message if the user tries to enter ingredients when they exist in the exclusion list", () => {
    const ingridientInputValue = "ahi tuna";
    settings.excludeIngridientsSelector.excludeIngridients.push(
      ingridientInputValue
    );

    addIngredientToList(eventTest, {      
       settings,
    ingridientInputValue,
    fullListOfIngridients,
    option,
    optionType,
    setRequestSettings:setRequestSettingsSpy,
    setIngridientInputValue:setIngridientInputValueSpy,
    setMessage:setMessageSpy
    } as unknown as InputParamType);
    expect(setMessageSpy).toHaveBeenCalledWith(
      `"${ingridientInputValue}" already exist in exclude ingredients list`
    );
  });
  it("show the expected message if the user tries to enter ingredients when they exist in the ingredients list", () => {
    const ingridientInputValue = "black olives";
    settings.ingridientsSelector.ingridients.push(ingridientInputValue);
    addIngredientToList(eventTest, {      
       settings,
    ingridientInputValue,
    fullListOfIngridients,
    option,
    optionType,
    setRequestSettings:setRequestSettingsSpy,
    setIngridientInputValue:setIngridientInputValueSpy,
    setMessage:setMessageSpy
     } as unknown as InputParamType);
    expect(setMessageSpy).toHaveBeenCalledWith(
      `"${ingridientInputValue}" already exist in ingredients list`
    );
  });
  it("add the ingredients to the list and reset input field", () => {
    const ingridientInputValue = "asiago cheese";

    addIngredientToList(eventTest, {      
       settings,
    ingridientInputValue,
    fullListOfIngridients,
    option,
    optionType,
    setRequestSettings:setRequestSettingsSpy,
    setIngridientInputValue:setIngridientInputValueSpy,
    setMessage:setMessageSpy
     } as unknown as InputParamType);

    const newIngridientsList = { ...settings };
    newIngridientsList.ingridientsSelector.ingridients.push(
      ingridientInputValue,
      "black olives"
    );
    newIngridientsList.excludeIngridientsSelector.excludeIngridients.push(
      "ahi tuna"
    );
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newIngridientsList);
    expect(setIngridientInputValueSpy).toHaveBeenCalledWith("");
  });
  it("add the excludes to the list and reset input field", () => {
    const ingridientInputValue = "apple juice";
    option = "excludeIngridientsSelector";
    optionType = "excludeIngridients";

    addIngredientToList(eventTest, {      
       settings,
    ingridientInputValue,
    fullListOfIngridients,
    option,
    optionType,
    setRequestSettings:setRequestSettingsSpy,
    setIngridientInputValue:setIngridientInputValueSpy,
    setMessage:setMessageSpy
     } as unknown as InputParamType);

    const newIngridientsList = { ...settings };
    newIngridientsList.ingridientsSelector.ingridients.push(
      ingridientInputValue,
      "black olives"
    );
    newIngridientsList.excludeIngridientsSelector.excludeIngridients.push(
      "ahi tuna",
      "apple juice"
    );
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newIngridientsList);
    expect(setIngridientInputValueSpy).toHaveBeenCalledWith("");
  });
});
