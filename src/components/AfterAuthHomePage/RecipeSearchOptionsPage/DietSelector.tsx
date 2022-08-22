import React, { useState } from "react";
import { Box, Divider, FormLabel, Grid, Paper } from "@mui/material";
import { ConfiguratorItemParamType, isLoadingType } from "@/types/types";
import { ShowRecipesButton } from "../ShowRecipesButton";
import { IngridientsList } from "./IngridientsList";
import { DietChooseField } from "./DietChooseField";
import { MealTypesSelector } from "./MealTypesSelector";
import { ExcludeIngridientList } from "./ExcludeIngridientList";
import { MaxCaloriesInput } from "./MaxCaloriesInput ";
import { CustomSpinner } from "@/components/CustomSpinner/CustomSpinner";

export const DietSelector = ({
  settings,
  setRequestSettings,
}: ConfiguratorItemParamType) => {
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  return (
    <Paper sx={{ p: 3 }} elevation={3}>
      {!isLoading ? (
        <Box component="form" noValidate>
          <FormLabel component="legend">Recipe configurator</FormLabel>
          <Divider sx={{ m: 2 }} />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={11} md={4}>
              <DietChooseField
                settings={settings}
                setRequestSettings={setRequestSettings}
              />
              <Divider sx={{ mt: 3 }} />
            </Grid>
            <Grid item xs={11} md={4}>
              <MealTypesSelector
                settings={settings}
                setRequestSettings={setRequestSettings}
              />
              <Divider sx={{ mt: 3 }} />
            </Grid>
            <Grid item xs={11} md={4} sx={{ mt: "25px" }}>
              <MaxCaloriesInput
                settings={settings}
                setRequestSettings={setRequestSettings}
              />
              <Divider sx={{ mt: 3 }} />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={1}
              sx={{ mt: "15px" }}
            >
              <Grid item xs={11} md={6}>
                <IngridientsList
                  settings={settings}
                  setRequestSettings={setRequestSettings}
                />
                <Divider />
              </Grid>
              <Grid item xs={11} md={6}>
                <ExcludeIngridientList
                  settings={settings}
                  setRequestSettings={setRequestSettings}
                />
                <Divider />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <ShowRecipesButton
                settings={settings}
                setRequestSettings={setRequestSettings}
                setIsLoading={setIsLoading}
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <CustomSpinner />
      )}
    </Paper>
  );
};
