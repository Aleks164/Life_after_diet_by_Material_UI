import React from "react";
import { Box, Grid, Tooltip } from "@mui/material";
import veryhelthy from "@/assets/healthy.svg";
import { urlBadgeList } from "@/utils/urlBadgeList";
import { IconPropsType } from "@/types/types";

export const Icons = ({ diets, veryHealthy }: IconPropsType) => (
  <Grid
    container
    direction="row"
    justifyContent="flex-end"
    alignItems="center"
    sx={{ width: `${diets.length > 3 ? "120px" : "60px"}` }}
  >
    {veryHealthy && (
      <Tooltip title={"very healthy"} followCursor>
        <Box
          component="img"
          sx={{
            height: "45px",
            display: "block",
            overflow: "hidden",
            width: "45px",
            userSelect: "none",
            mb: 1,
            mr: 1,
          }}
          draggable="false"
          src={veryhelthy}
          alt={"very healthy"}
        />
      </Tooltip>
    )}
    {diets.map((diet, index) => (
      <Tooltip key={index} title={diet} followCursor>
        <Box
          component="img"
          sx={{
            height: "45px",
            display: "block",
            overflow: "hidden",
            width: "45px",
            userSelect: "none",
            mb: 1,
            mr: 1,
          }}
          draggable="false"
          src={
            urlBadgeList[diet]
              ? urlBadgeList[diet].path
              : urlBadgeList["low fodmap"].path
          }
          alt={diet}
        />
      </Tooltip>
    ))}
  </Grid>
);
