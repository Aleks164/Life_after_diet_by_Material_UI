import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CuisinesListBookmark } from "./CuisinesListBookmark/CuisinesListBookmark";
import { IntolerancesListBookmark } from "./IntolerancesListBookmark/IntolerancesListBookmark";
import { DietDefenitionList } from "./DietDefenition";
import { DietSelector } from "./RecipeSearchOptionsPage/DietSelector";
import { BookmarkPropsType } from "../../types/types";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function tabsProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const AuthHomePage = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        mb: 1,       
        maxWidth: "1050px",
        ml: "auto",
        mr: "auto",
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Configurator" {...tabsProps(0)} />
          <Tab label="Cuisines" {...tabsProps(1)} />
          <Tab label="Intolerances" {...tabsProps(2)} />
          <Tab label="Diet definitions" {...tabsProps(3)} />
        </Tabs>
      </AppBar>
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
