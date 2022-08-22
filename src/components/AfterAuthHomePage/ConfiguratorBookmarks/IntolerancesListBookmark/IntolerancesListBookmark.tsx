import React from "react";
import { ConfiguratorItemParamType } from "@/types/types";
import { BookmarkTemplate } from "../BookmarkTemplate";
import { chooseClearAll } from "./chooseClearAll";
import { IntolerancesList } from "@/utils/consts";
import { togleStatus } from "./togleStatus";

export const IntolerancesListBookmark = ({
  settings,
  setRequestSettings,
}: ConfiguratorItemParamType) => (
  <BookmarkTemplate
    settings={settings}
    setRequestSettings={setRequestSettings}
    chooseClearAll={chooseClearAll}
    bookmarkLable={"Intolerance list"}
    alertInfo={"*suggested recipes won't contain the selected products"}
    fullList={IntolerancesList}
    togleStatus={togleStatus}
    fieldName={"intolerancesList"}
  />
);
