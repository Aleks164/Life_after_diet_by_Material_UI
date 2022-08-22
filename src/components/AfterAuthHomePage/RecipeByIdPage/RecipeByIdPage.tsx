import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeResponsType } from "../../../utils/singlRecipe";
import { isLoadingType } from "../../../types/types";
import { RecipePage } from "./RecipePage";
import { requestRecipeByIdFromAPI } from "../../../utils/requestRecipeByIdFromAPI";
import { SorryUnfoundPage } from "../RecipesListPage/SorryUnfoundPage";
import { CustomSpinner } from "@/components/CustomSpinner/CustomSpinner";

export const RecipeByIdPage = () => {
  const [recipe, setRecipe] = useState({} as RecipeResponsType);
  const [isLoading, setIsLoading] = useState<isLoadingType>(true);
  const [isRecipeExist, setIsRecipeExist] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id)
      requestRecipeByIdFromAPI(id)
        .then((response) => {
          setRecipe(response);
          setTimeout(() => {
            setIsLoading(!isLoading);
          }, 500);
        })
        .catch(() => {
          setIsRecipeExist(false);
        });
  }, []);

  return (
    <>
      {isRecipeExist ? (
        <>{isLoading ? <CustomSpinner /> : <RecipePage recipe={recipe} />}</>
      ) : (
        <SorryUnfoundPage idIsNotFund={true} />
      )}
    </>
  );
};
