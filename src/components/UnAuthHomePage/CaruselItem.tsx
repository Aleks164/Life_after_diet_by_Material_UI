import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { authBenefits } from "@/utils/authBenefits";

export const CaruselItem = ({ index, path }: { index: number,path:string }) => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Typography
      fontSize={{ xs: "1.5rem", md: "2rem" }}
      sx={{
        position: "absolute",
        bottom: " 5px",
        backgroundColor: "#0000004f",
        borderRadius: "15px",
        width: "fit-content",
        boxShadow: "2px 2px 15px white",
        boxSizing: "border-box",
        zIndex: 4,
        fontFamily: "cursive",
        color: "#edefff",
        textShadow: "#0d5fae 3px 0px 1px",
        fontWeight: "900",
        p: 2,
      }}
    >
      {authBenefits[index]}
    </Typography>
    <Box
      component="img"
      sx={{
        maxHeight: 450,
        display: "block",
        overflow: "hidden",
        width: "100%",
        userSelect: "none",
      }}
      draggable="false"
      src={path}
      alt={authBenefits[index]}
    />
  </Grid>
);
