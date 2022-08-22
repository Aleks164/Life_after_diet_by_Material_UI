import React from "react";
import { CircularProgress } from "@mui/material";

export const CustomSpinner = () => (
  <CircularProgress
    size={150}
    sx={{
      display: "block",
      margin: "auto",
      marginTop: "15%",
      marginBottom: "25%",
    }}
  />
);
