import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ViewRecipeParamType } from "../../types/types";
import { useClientSettings } from "../../hooks/useClientSettings";
import { showRecipes } from "./showRecipes";

export const ViewRecipesButton = ({
  settings,
  setIsLoading,
}: ViewRecipeParamType) => {
  const { setClientSettings } = useClientSettings();
  const navigate = useNavigate();
  const showRecipesParam = {
    setClientSettings,
    settings,
    setIsLoading,
    navigate,
  };

  return (
    <Button
      sx={{ m: 3, mb: 1 }}
      variant="contained"
      size="large"
      onClick={async () => {
        console.log(settings);
        await showRecipes(showRecipesParam);
      }}
    >
      {"Find recipes"}
    </Button>
  );
};
