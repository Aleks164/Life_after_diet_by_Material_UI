import { Box, Typography } from "@mui/material";
import React from "react";
import { ClientSettingsType } from "../../../types/types";
import { ChooseItem } from "./ChooseItem";
import { SinglStringChooseItem } from "./SinglStringChooseItem";

export const HaveChosenInfo = ({ сlientSettings }: ClientSettingsType) => (
  <>
    <Typography sx={{ mt: "25px" }} variant="h5">
      You have chosen:
    </Typography>
    <Box>
      {сlientSettings.dietSelector.diet && (
        <SinglStringChooseItem
          label={"Diet:"}
          content={сlientSettings.dietSelector.diet}
        />
      )}
      {сlientSettings.mealTypesSelector.mealType && (
        <SinglStringChooseItem
          label={"Meal type:"}
          content={сlientSettings.mealTypesSelector.mealType}
        />
      )}
      {сlientSettings.maxCaloriesInput.value && (
        <SinglStringChooseItem
          label={"Maximum calories:"}
          content={String(сlientSettings.maxCaloriesInput.value)}
        />
      )}
      {сlientSettings.cuisinesList.length > 0 && (
        <ChooseItem
          itemName={"Cuisines: "}
          сlientSettings={сlientSettings.cuisinesList}
        />
      )}
      {сlientSettings.intolerancesList.length > 0 && (
        <ChooseItem
          itemName={"List of intolerances: "}
          сlientSettings={сlientSettings.intolerancesList}
        />
      )}
      {сlientSettings.ingridientsSelector.ingridients.length > 0 && (
        <ChooseItem
          itemName={"List of ingridients: "}
          сlientSettings={сlientSettings.ingridientsSelector.ingridients}
        />
      )}
      {сlientSettings.excludeIngridientsSelector.excludeIngridients.length >
        0 && (
        <ChooseItem
          itemName={"List of excludes: "}
          сlientSettings={
            сlientSettings.excludeIngridientsSelector.excludeIngridients
          }
        />
      )}
    </Box>
  </>
);
