import {
  Paper,
  Alert,
  FormControl,
  Button,
  Grid,
  FormLabel,
  Divider,
} from "@mui/material";
import React from "react";
import { BookmarkPropsType } from "@/types/types";
import { BookmarkItemList } from "./BookmarkItemList";

export const BookmarkTemplate = ({
  settings,
  setRequestSettings,
  chooseClearAll,
  togleStatus,
  fullList,
  bookmarkLable,
  alertInfo,
  fieldName,
  Icon,
  ChecekedIcon
}: BookmarkPropsType) => (
  <Paper elevation={3}>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">{bookmarkLable}</FormLabel>
      <Divider sx={{ m: 2 }} />
      <BookmarkItemList
        settings={settings}
        setRequestSettings={setRequestSettings}
        fullList={fullList}
        togleStatus={togleStatus}
        fieldName={fieldName}
        Icon={Icon}
  ChecekedIcon={ChecekedIcon}
      />
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
      <Alert severity="info">{alertInfo}</Alert>
    )}
  </Paper>
);
