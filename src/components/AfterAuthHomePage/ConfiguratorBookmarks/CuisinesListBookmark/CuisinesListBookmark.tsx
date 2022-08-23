import React from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { ConfiguratorItemParamType } from "@/types/types";
import { BookmarkTemplate } from "../BookmarkTemplate";
import { chooseClearAll } from "./chooseClearAll";
import { Cuisines } from "@/utils/consts";
import { togleStatus } from "./togleStatus";

export const CuisinesListBookmark = ({
  settings,
  setRequestSettings,
}: ConfiguratorItemParamType) => (
  <BookmarkTemplate
    settings={settings}
    setRequestSettings={setRequestSettings}
    chooseClearAll={chooseClearAll}
    bookmarkLable={"Choose your cusines"}
    alertInfo={
      "*if you have not chosen any cuisine, then the recipes will be from different cuisines, selected randomly"
    }
    fullList={Cuisines}
    togleStatus={togleStatus}
    fieldName={"cuisinesList"}
    Icon={FavoriteBorder}
    ChecekedIcon={Favorite}
  />
);
