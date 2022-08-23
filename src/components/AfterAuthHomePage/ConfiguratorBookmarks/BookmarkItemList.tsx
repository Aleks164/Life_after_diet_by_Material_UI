import React from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { FormGroup, Grid, FormControlLabel, Checkbox } from "@mui/material";
import { BookmarkItemListParamType } from "@/types/types";

export const BookmarkItemList = ({
  settings,
  setRequestSettings,
  fullList,
  togleStatus,
  fieldName,
  Icon,
  ChecekedIcon
}: BookmarkItemListParamType) => (
  <FormGroup>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        ml: "auto",
        mr: "auto",
        pt: "2%",
      }}
    >
      {fullList.map((listItem, index) => (
        <Grid item xs={2} sm={3} md={4} key={index}>
          <FormControlLabel
            sx={{ userSelect: "none" }}
            control={
              <Checkbox
                checked={settings[fieldName].includes(listItem)}
                onChange={(e) => {
                  togleStatus(e, setRequestSettings, settings);
                }}
                name={listItem}
                icon={<Icon/>}
                checkedIcon={<ChecekedIcon/>}
              />
            }
            label={listItem}
          />
        </Grid>
      ))}
    </Grid>
  </FormGroup>
);
