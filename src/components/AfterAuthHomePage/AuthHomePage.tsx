import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CuisinesListBookmark } from "./ConfiguratorBookmarks/CuisinesListBookmark/CuisinesListBookmark";
import { DietDefenitionList } from "./DietDefenition";
import { DietSelector } from "./RecipeSearchOptionsPage/DietSelector";
import { ConfiguratorItemParamType } from "@/types/types";
import { AppTabsContainer } from "../TabPanel/AppTabsContainer";
import { TabPanel } from "../TabPanel/TabPanel";
import { IntolerancesListBookmark } from "./ConfiguratorBookmarks/IntolerancesListBookmark/IntolerancesListBookmark";

export const AuthHomePage = ({
  settings,
  setRequestSettings,
}: ConfiguratorItemParamType) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const listOfHeaders = [
    "Configurator",
    "Cuisines",
    "Intolerances",
    "Diet definitions",
  ];
  return (
    <Box
      sx={{
        mb: 1,
        maxWidth: "1050px",
        ml: "auto",
        mr: "auto",
      }}
    >
      <AppTabsContainer
        value={value}
        setValue={setValue}
        listOfHeaders={listOfHeaders}
      />
      <TabPanel value={value} index={0} dir={theme.direction}>
        <DietSelector
          settings={settings}
          setRequestSettings={setRequestSettings}
        />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <CuisinesListBookmark
          settings={settings}
          setRequestSettings={setRequestSettings}
        />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <IntolerancesListBookmark
          settings={settings}
          setRequestSettings={setRequestSettings}
        />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <DietDefenitionList />
      </TabPanel>
    </Box>
  );
};
