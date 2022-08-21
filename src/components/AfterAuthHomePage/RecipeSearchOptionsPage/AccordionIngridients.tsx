import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { deleteIngridientFromList } from "./deleteIngridientFromList";
import { AccordionParamType } from "@/types/types";

export const AccordionIngridients = ({
  settings,
  selectorParam,
}: AccordionParamType) => (
  <div>
    <Button onClick={() => selectorParam.setExpanded(!selectorParam.expanded)}>
      Adding ingridients{" "}
      {!selectorParam.expanded ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
    </Button>
    {selectorParam.expanded && (
      <Stack spacing={1}>
        {settings.ingridientsSelector.ingridients.length ? (
          settings.ingridientsSelector.ingridients.map((ingridient) => (
            <Grid
              key={ingridient}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              columns={{ xs: 12 }}
            >
              <Grid item xs={8}>
                <Typography>{ingridient}</Typography>
              </Grid>
              <Grid item xs={4} alignItems="flex-end">
                <Button
                  color="primary"
                  onClick={() => {
                    deleteIngridientFromList({
                      deletingIngridient: ingridient,
                      settings,
                      setRequestSettings: selectorParam.setRequestSettings,
                    });
                  }}
                  size="small"
                >
                  <ClearIcon />
                </Button>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography>
            "Here will be a list of ingredients that should be in the recipe"
          </Typography>
        )}
      </Stack>
    )}
  </div>
);
