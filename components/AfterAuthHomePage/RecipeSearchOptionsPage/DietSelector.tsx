import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  FormLabel,
  Grid,
  Paper,
} from "@mui/material";
import { BookmarkPropsType, isLoadingType } from "@/types/types";
import { ViewRecipesButton } from "../ViewRecipesButton";
import { IngridientsList } from "./IngridientsList";
import { DietChooseField } from "./DietChooseField";
import { MealTypesSelector } from "./MealTypesSelector";
import { ExcludeIngridientList } from "./ExcludeIngridientList";
import { MaxCaloriesInput } from "./MaxCaloriesInput ";

export const DietSelector = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  return (
    <Paper sx={{ p: 3 }}>
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
              <Divider />
            </Grid>
            <Grid item xs={11} md={4}>
              <MealTypesSelector
                settings={settings}
                setRequestSettings={setRequestSettings}
              />
              <Divider />
            </Grid>
            <Grid item xs={11} md={4} sx={{ mt: "25px" }}>
              <MaxCaloriesInput
                settings={settings}
                setRequestSettings={setRequestSettings}
              />
              <Divider />
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
              <ViewRecipesButton
                settings={settings}
                setRequestSettings={setRequestSettings}
                setIsLoading={setIsLoading}
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <CircularProgress
          size={150}
          sx={{
            display: "block",
            margin: "auto",
            marginTop: "15%",
            marginBottom: "25%",
          }}
        />
      )}
    </Paper>
  );
};
