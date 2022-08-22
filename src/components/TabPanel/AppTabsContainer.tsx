import React from "react";
import { AppBar, Tabs, Tab } from "@mui/material";
import { AppTabsContainerParamType } from "@/types/types";
import { tabsProps } from "./tabsProps";

export const AppTabsContainer = ({
  value,
  setValue,
  listOfHeaders,
}: AppTabsContainerParamType) => (
  <AppBar position="static">
    <Tabs
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="AppTabsContainer"
    >
      {listOfHeaders.map((header, index) => (
        <Tab key={header} label={header} {...tabsProps(index)} />
      ))}
    </Tabs>
  </AppBar>
);
