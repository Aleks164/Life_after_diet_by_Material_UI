import React, { useState, useEffect } from "react";
import { Alert, Autocomplete, Box, Fab, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  ConfiguratorItemParamType,
  InputParamType,
} from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { addIngredientToList } from "./addIngredientToList";
import { AccordionIngridients } from "./AccordionIngridients";

export const IngridientsList = ({
  settings,
  setRequestSettings,
}: ConfiguratorItemParamType) => {
  const ingridients = Object.keys(ingridientsList);
  const [ingridientInputValue, setIngridientInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [expanded, setExpanded] = useState<boolean>(false);

  const selectorParam = {
    settings,
    option: "ingridientsSelector",
    optionType: "ingridients",
    fullListOfIngridients: ingridients,
    ingridientInputValue,
    setRequestSettings,
    setIngridientInputValue,
    setMessage,
    setExpanded,
    expanded,
  } as InputParamType;

  return (
    <Box sx={{ minWidth: 200, p: 1 }}>
      <Grid container columns={{ xs: 12 }}>
        <Grid item xs={10}>
          <Autocomplete
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => setOpen(false)}
            inputValue={ingridientInputValue}
            onInputChange={(_, value) => {
              setIngridientInputValue(value);
              if (!value) {
                setOpen(false);
              }
            }}
            options={ingridients}
            renderInput={(params) => (
              <TextField
                {...params}
                label="List of ingredients"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={2} sx={{ alignSelf: "center", pl: 1 }}>
          <Fab
            disabled={!!message}
            onClick={(e) => {
              addIngredientToList(e, selectorParam);
              setExpanded(true);
              setTimeout(() => {
                setMessage("");
              }, 3000);
            }}
            size="small"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      {message && <Alert severity="error">{message}</Alert>}
      <AccordionIngridients settings={settings} selectorParam={selectorParam} />
    </Box>
  );
};
