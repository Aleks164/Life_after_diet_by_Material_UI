import React, { useState } from "react";
import { Box, FormControl, InputLabel, Slider } from "@mui/material";
import { BookmarkPropsType, SelectorParamType } from "../../../types/types";

export const MaxCaloriesInput = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const [maxCalories, setMaxCalories] = useState(
    settings.maxCaloriesInput.value
  );

  const selectorParam = {
    settings,
    option: "maxCaloriesInput",
    optionType: "value",
    optionTypeValue: maxCalories,
    setRequestSettings,
  } as SelectorParamType;

  return (
    <Box sx={{ minWidth: 200, pl: 2, pr: 2, position: "relative" }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ transform: "translate(10px, -15px)", fontSize: "20px" }}
          id="calories-select-label"
        >
          Max calories
        </InputLabel>
        <Slider
          aria-label="Temperature"
          defaultValue={500}
          valueLabelDisplay="auto"
          marks
          step={50}
          min={50}
          max={1500}
          onChange={(e) => {
            settings.maxCaloriesInput.value = +e.target.value;
            setRequestSettings(settings);
            setMaxCalories(+e.target.value);
          }}
        />
      </FormControl>
    </Box>
  );
};
