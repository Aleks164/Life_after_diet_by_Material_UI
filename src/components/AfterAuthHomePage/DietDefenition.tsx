import React from "react";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { DietDefenitionType } from "@/types/types";
import { DietList, DietDefenition } from "@/utils/consts";

export const DietDefenitionList = () => (
  <Paper sx={{ p: 3 }} elevation={3}>
    <Stack spacing={2}>
      {DietList.map((el, index) => (
        <div key={index}>
          <Typography variant="h4">{el}</Typography>
          <Typography
            variant="body2"
            sx={{
              margiLeft: " 10px",
              fontSize: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {(DietDefenition as DietDefenitionType)[index + 1]}
          </Typography>
          <Divider />
        </div>
      ))}
    </Stack>
  </Paper>
);
