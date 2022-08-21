import {
  Paper,
  Alert,
  FormControl,
  Button,
  Grid,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import React from "react";
import { BookmarkPropsType } from "../../../types/types";
import { Cuisines as fullList } from "../../../utils/consts";
import { chooseClearAll } from "./chooseClearAll";
import { togleStatus } from "./togleStatus";

export const CuisinesListBookmark = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => (
  <Paper elevation={3}>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Choose your cusines</FormLabel>
      <Divider sx={{ m: 2 }} />
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
          {fullList.map((cusine, index) => (
            <Grid item xs={2} sm={3} md={4} key={index}>
              <FormControlLabel
                sx={{ userSelect: "none" }}
                control={
                  <Checkbox
                    checked={settings.cuisinesList.includes(cusine)}
                    onChange={(e) => {
                      togleStatus(e, setRequestSettings, settings);
                    }}
                    name={cusine}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                }
                label={cusine}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </FormControl>
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Button
        sx={{ mb: 3 }}
        variant="contained"
        onClick={() => {
          chooseClearAll(setRequestSettings, settings, fullList);
        }}
      >
        {settings.cuisinesList.length > 0 ? "Clear all" : "Choose all"}
      </Button>
    </Grid>
    {!settings.cuisinesList.length && (
      <Alert severity="info">
        {
          "*if you have not chosen any cuisine, then the recipes will be from different cuisines, selected randomly"
        }
      </Alert>
    )}
  </Paper>
);
