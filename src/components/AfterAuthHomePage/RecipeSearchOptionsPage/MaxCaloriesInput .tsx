import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Slider,
  Typography,
} from "@mui/material";
import { ConfiguratorItemParamType } from "@/types/types";

export const MaxCaloriesInput = ({
  settings,
  setRequestSettings,
}: ConfiguratorItemParamType) => {
  const [maxCalories, setMaxCalories] = useState(
    settings.maxCaloriesInput.value
  );

  return (
    <Box sx={{ minWidth: 200, pl: 2, pr: 2, position: "relative" }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ transform: "translate(10px, -15px)", fontSize: "20px" }}
          id="calories-select-label"
        >
          Max calories
        </InputLabel>
        <Typography
          sx={{
            position: "absolute",
            fontSize: 20,
            right: "25px",
            top: "-25px",
          }}
        >
          <em>{`${maxCalories}`}</em>
        </Typography>
        <Slider
          aria-label="Temperature"
          value={maxCalories}
          valueLabelDisplay="auto"
          marks
          step={50}
          min={50}
          max={1500}
          onChange={(e, newValue) => {
            settings.maxCaloriesInput.value = +newValue;
            setRequestSettings(settings);
            setMaxCalories(+newValue);
          }}
        />
      </FormControl>
    </Box>
  );
};
