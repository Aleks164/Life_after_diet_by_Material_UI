import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { BookmarkPropsType } from "@/types/types";
import { MealTypes } from "@/utils/consts";

export const MealTypesSelector = ({
  settings,
  setRequestSettings,
}: ConfiguratorItemParamType) => {
  const curMealType = settings.mealTypesSelector.mealType;
  const [selectValue, setSelectValue] = useState(curMealType);

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="meal-select-label">Сhoose a meal type</InputLabel>
        <Select
          labelId="meal-select-label"
          id="meal-select"
          value={selectValue}
          label="Сhoose a meal type"
          onChange={(e) => {
            settings.mealTypesSelector.mealType = e.target.value;
            setSelectValue(e.target.value);
            setRequestSettings(settings);
          }}
        >
          {[
            <MenuItem key={"diets"} value="">
              <em>None</em>
            </MenuItem>,
          ].concat(
            MealTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type.toLowerCase()}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
};
