import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesName } from "../../../utils/routes";

export const SorryUnfoundPage = ({
  idIsNotFund,
}: {
  idIsNotFund?: boolean;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHistory = location.pathname === RoutesName.HISTORY_ROUTE;
  const isFavourite = location.pathname === RoutesName.FAVOURITE_ROUTE;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {!isHistory && !isFavourite ? (
        <>
          {idIsNotFund ? (
            <Paper sx={{ mt: "35px", p: 2 }} elevation={3}>
              <Typography textAlign={"center"} variant="h4">
                Sorry... <br />
                but there is no recipe for this link, perhaps there is an error
                in your link.
              </Typography>
            </Paper>
          ) : (
            <Typography textAlign={"center"} variant="h4">
              Sorry... <br />
              but no recipes according to your requirements were found, reduce
              the number of parameters and try again, this should help.
            </Typography>
          )}
        </>
      ) : null}
      {isHistory && (
        <Typography sx={{ m: 3 }}>Your history is empty.</Typography>
      )}
      {isFavourite && (
        <Typography sx={{ m: 3 }}>Your favourite list is empty.</Typography>
      )}
      <Button
        variant="contained"
        sx={{ m: 3 }}
        onClick={() => {
          navigate(RoutesName.HOME_PAGE_ROUTE);
        }}
      >
        {"Finde recipe"}
      </Button>
    </Grid>
  );
};
