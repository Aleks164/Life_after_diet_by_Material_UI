import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import { RecipeResponsType } from "../utils/singlRecipe";
import { DietListLowerCase } from "@/utils/urlBadgeList";

export type DietResponsType = {
  [id: number]: {
    id: number;
    title: string;
    image: string;
    imageType?: string;
    date?: number;
  };
};

export type IsAuthType = { isAuth: null | string };

export type SignInType = (newUser: string, cb: NavigateFunction) => void;

export type SignOutType = (cb: NavigateFunction) => void;

export type SignUpType = (
  newUser: string,
  cb: NavigateFunction
) => Promise<void>;

export type UserType = string | null;

export type BeforeLoginPagePathType = string;

export type SetBeforeLoginPagePathType = React.Dispatch<
  React.SetStateAction<BeforeLoginPagePathType>
>;

export type AuthKitType = {
  user: UserType;
  signIn: SignInType;
  signOut: SignOutType;
  beforeLoginPagePath: BeforeLoginPagePathType;
  setBeforeLoginPagePath: SetBeforeLoginPagePathType;
};

export type SettingType = {
  dietSelector: { diet: string; status: boolean };
  cuisinesList: string[];
  intolerancesList: string[];
  ingridientsSelector: { ingridients: string[]; status: boolean };
  mealTypesSelector: { mealType: string; status: boolean };
  excludeIngridientsSelector: { excludeIngridients: string[]; status: boolean };
  maxCaloriesInput: { value: number; status: boolean };
};

export type ChildrenType = { children: React.ReactElement };

export type LinkPropType = {
  children: React.ReactElement | string;
  to: string;
};

export type MarkbookType = {
  curMarkbook: string;
  curInformation: string;
};

export type RecipeItemType = {
  id: number;
  title: string;
  image: string;
  imageType?: string;
};

export type SetRecipeItemType = React.Dispatch<
  React.SetStateAction<RecipeItemType[]>
>;

export type markBookType = string;

export type SetCurMarkbookType = {
  setCurMarkbook: React.Dispatch<React.SetStateAction<markBookType>>;
  curMarkbook: string;
};

export type IngridientsListType = {
  [name: string]: {
    name: string;
    id: string;
  };
};

export type RecipeInfoType = RecipeItemType[];

export type isLoadingType = boolean;

export type SetIsLoadingType = React.Dispatch<
  React.SetStateAction<isLoadingType>
>;

export type SetSettingType = React.Dispatch<React.SetStateAction<SettingType>>;

export type HistoryFavouriteTypes = DietResponsType;

export type SetHistoryType = React.Dispatch<
  React.SetStateAction<DietResponsType>
>;

export type SetFavouriteType = React.Dispatch<
  React.SetStateAction<DietResponsType>
>;

export type SetRecipeInfo = React.Dispatch<
  React.SetStateAction<RecipeItemType[]>
>;

export type PageNumberType = number;

export type SetPageNumberType = React.Dispatch<
  React.SetStateAction<PageNumberType>
>;

export type RecipeListProps = {
  recipeInfo: RecipeItemType[];
  pageNumber: PageNumberType;
  setPageNumber: SetPageNumberType;
};

export type RecipeItemPropsType = { title: string; image: string; id: number };

export type SetCurMarkbook = React.Dispatch<React.SetStateAction<MarkbookType>>;

export type SetRequestSettingsType = React.Dispatch<
  React.SetStateAction<SettingType>
>;

export type SetInputValue = React.Dispatch<React.SetStateAction<string>>;

export type SettingParamType = { settings: SettingType };

export type ClientSettingsType = {
  сlientSettings: SettingType;
};

export interface ViewRecipeParamType extends SettingParamType {
  setIsLoading: SetIsLoadingType;
  setRequestSettings: SetRequestSettingsType;
}

export type DietDefenitionType = { [item: number]: string };

export type DietParamType = {
  settings: SettingType;
  setRequestSettings: SetRequestSettingsType;
  setRecipeInfo: SetRecipeInfo;
  setIsLoading: SetIsLoadingType;
};

export type BookmarkPropsType = {
  settings: SettingType;
  setRequestSettings: SetRequestSettingsType;
};

export type selectorParamFunction = (
  tumblerStatus: boolean,
  e:
    | React.DragEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement, MouseEvent>
) => void;

export type ProviderPropsType = {
  сlientSettings: SettingType;
  setClientSettings?: SetSettingType;
  сlientHistory: HistoryFavouriteTypes;
  setClientHistory?: SetHistoryType;
  сlientFavourite: HistoryFavouriteTypes;
  setClientFavourite?: SetFavouriteType;
  setHistory?: SetHistoryType;
  setFavourite?: SetFavouriteType;
};

export type Step = number;

export type Description = string;

export type RecipeType = {
  recipe: RecipeResponsType;
};

export type HistoryFavouriteType = DietResponsType[keyof DietResponsType][];

export type NextItemSliderParamType = {
  curItem: number;
  setCurItem: React.Dispatch<React.SetStateAction<number>>;
  setIsPresed: React.Dispatch<React.SetStateAction<boolean>>;
  togleAnimation: React.MutableRefObject<null>;
  caruselItemsList: string[];
};

export type LeftRightParamType = {
  isPresed: boolean;
  nextItemParam: NextItemSliderParamType;
  nextItem: (
    step: number,
    NextItemSliderParam: NextItemSliderParamType
  ) => void;
  direction: -1 | 1;
  buttonType: "leftButton" | "rightButton";
  children: string | ReactNode;
};

export type AuthBenefitsParamType = {
  caruselItemsList: string[];
  curItem: number;
};

export type StepType = number | { index: number };

export type HistoryLineParamType = {
  caruselItemsList: string[];
  isPresed: boolean;
  curItem: number;
  nextItem: (
    step: StepType,
    NextItemSliderParam: NextItemSliderParamType
  ) => void;
  nextItemParam: NextItemSliderParamType;
};

export type KeySettingType = keyof SettingType;

export type SettingIngrType = {
  [ingridientsSelector: string]: { ingridients: string[]; status: boolean };
};

export interface SelectorParamType {
  isFieldAvailable: boolean;
  settings: SettingType;
  option: KeySettingType;
  optionType: string;
  optionTypeValue: any;
  setRequestSettings: SetSettingType;
}

export interface InputParamType extends SelectorParamType {
  ingridientInputValue: string;
  fullListOfIngridients: string[];
  setIngridientInputValue: SetInputValue;
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  expanded: boolean;
}

export type FafouriteParamsType = {
  сlientFavourite: DietResponsType;
  setClientFavourite: SetFavouriteType | undefined;
  recipe: RecipeType["recipe"];
  isItInFafouritList: boolean;
  setIsItInFafouritList: React.Dispatch<React.SetStateAction<boolean>>;
};

export type RedirectParamType = {
  title: string;
  image: string;
  id: number;
  сlientHistory: DietResponsType;
  setClientHistory: SetHistoryType | undefined;
};

export type FlipPageParamType = {
  сlientSettings: SettingType;
  navigate: NavigateFunction;
  setPageNumber: SetPageNumberType;
  pageNumber: number;
};

export type PageNavigationParamType = {
  pageNumber: number;
  flipPageParam: FlipPageParamType;
  recipeInfoLength: number;
};

export type ShowRecipesParamType = {
  setClientSettings: SetSettingType | undefined;
  settings: SettingType;
  setIsLoading: SetIsLoadingType;
  navigate: NavigateFunction;
};

export type AuthLinkParamType = { to: string, type: string };

export type HeaderParamType = { isAuth: null | string, isSignUpPage: boolean, isLoginPage: boolean };

export type AccordionParamType = {
  settings: SettingType;
  selectorParam: InputParamType;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export type DietListType = typeof DietListLowerCase[number];

export type UrlNameTypes = {
  [urlName in DietListType | "healthyIcon"]: { "path": string; };
};

export type IconPropsType = { diets: DietListType[]; veryHealthy: boolean };