import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CommitIcon from "@mui/icons-material/Commit";
import { RecipeType } from "../../../types/types";
import { Icons } from "./Icons";
import { TabPanel } from "../../TabPanel/TabPanel";
import { CustomDivider } from "./CustomDivider";
import { AppTabsContainer } from "../../TabPanel/AppTabsContainer";

export const RecipeInstruction = ({ recipe }: RecipeType) => {
  const [hideList, setHideList] = useState(true);
  const instructions = { __html: recipe.instructions };
  const [value, setValue] = useState(0);
  const listOfHeaders = ["Instruction", "Steps", "Preparing ingredients"];
  const sorryText = `Sorry, but instruction for this recipe don't wrote yet`;

  return (
    <Grid container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <AppTabsContainer
            value={value}
            setValue={setValue}
            listOfHeaders={listOfHeaders}
          />
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="h4">Instruction</Typography>
          <Divider />
          {recipe.instructions !== null ? (
            <Grid container>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ mt: 2, textAlign: "justify" }}
                  dangerouslySetInnerHTML={instructions}
                ></Typography>
              </Grid>
              <Grid
                display={{ xs: "none", md: "unset" }}
                sx={{ mt: "15px" }}
                item
                md={2}
              >
                <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
              </Grid>
            </Grid>
          ) : (
            <Typography>{sorryText}</Typography>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h4">Preparation</Typography>
          <Button
            className="showIngridients"
            onClick={() => {
              setHideList(!hideList);
            }}
          >
            {hideList ? "Show" : "Hide"} ingridients
          </Button>
          <Divider />
          <Grid container>
            <Grid item xs={12} md={10}>
              <ol style={{ paddingLeft: "0px" }}>
                {recipe.analyzedInstructions.length > 0 ? (
                  recipe.analyzedInstructions[0].steps.map((step, index) => (
                    <Box key={step.number}>
                      <li style={{ display: "inline-flex" }}>
                        <Typography>
                          {index + 1}. {step.step}
                        </Typography>
                        {step.length && (
                          <Chip
                            sx={{ mt: 1 }}
                            label={`${step.length.number} min`}
                            color="primary"
                          />
                        )}
                      </li>
                      <ol hidden={hideList} className="stepIngrList">
                        {step.ingredients.map((ingridient) => (
                          <li key={ingridient.id}>{ingridient.name}</li>
                        ))}
                      </ol>
                      <Divider sx={{ m: 1 }} />
                    </Box>
                  ))
                ) : (
                  <Typography>{sorryText}</Typography>
                )}
              </ol>
            </Grid>
            <Grid
              display={{ xs: "none", md: "unset" }}
              sx={{ mt: "15px" }}
              item
              md={2}
            >
              <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h4">Ingredients</Typography>
          <CustomDivider />
          <Grid container>
            <Grid item xs={12} md={10}>
              {recipe.extendedIngredients.length > 0 ? (
                <Box sx={{ mt: 2 }}>
                  {recipe.extendedIngredients.map((item, index) => (
                    <Grid
                      key={index}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <CommitIcon sx={{ mt: "5px", mr: "5px", pb: "5px" }} />
                      <Typography>{item.original}</Typography>
                      <CustomDivider />
                    </Grid>
                  ))}
                </Box>
              ) : (
                <Typography>{sorryText}</Typography>
              )}
            </Grid>
            <Grid
              display={{ xs: "none", md: "unset" }}
              sx={{ mt: "15px" }}
              item
              md={2}
            >
              <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Grid>
  );
};
