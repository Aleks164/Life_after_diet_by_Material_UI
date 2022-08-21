import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { BookmarkPropsType } from "../../../types/types";
import { DietList } from "../../../utils/consts";

export const DietChooseField = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const curDiet = settings.dietSelector.diet;
  const [inputValue, setInputValue] = useState(curDiet);

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <Divider />
        <InputLabel id="diet-select-label">Сhoose a diet</InputLabel>
        <Select
          labelId="diet-select-label"
          id="diet-select"
          value={inputValue}
          label="Сhoose a diet"
          onChange={(e) => {
            settings.dietSelector.diet = e.target.value;
            setInputValue(e.target.value);
            setRequestSettings(settings);
          }}
        >
          {[
            <MenuItem key={"diets"} value="">
              <em>None</em>
            </MenuItem>,
          ].concat(
            DietList.map((dietName, index) => (
              <MenuItem key={index} value={dietName}>
                {dietName.toLowerCase()}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
};
