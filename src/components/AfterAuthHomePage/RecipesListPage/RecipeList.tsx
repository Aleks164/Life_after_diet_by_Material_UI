import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, IconButton, Paper, styled, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeListProps } from "../../../types/types";
import { HaveChosenInfo } from "./HaveChosenInfo";
import { SorryUnfoundPage } from "./SorryUnfoundPage";
import { RoutesName } from "../../../utils/routes";
import { RecipesConteiner } from "./RecipesConteiner";
import { flipRecipePage } from "./flipRecipePage";
import { CustomSpinner } from "@/components/CustomSpinner/CustomSpinner";

export const RecipeList = ({
  recipeInfo,
  pageNumber,
  setPageNumber,
}: RecipeListProps) => {
  const { сlientSettings } = useClientSettings();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHistory = location.pathname === RoutesName.HISTORY_ROUTE;
  const isFavourite = location.pathname === RoutesName.FAVOURITE_ROUTE;
  const flipPageParam = { сlientSettings, navigate, setPageNumber, pageNumber };

  const titleTextStyle = {
    fontFamily: "cursive",
    color: "#1976d2",
    textShadow: "#41688f 3px 0px 1px",
    fontWeight: "900",
    textAlign: "center",
    width: "fit-content",
    marginBottom: "10px",
  };

  const ToTheLeftButton = styled(IconButton)(({ theme }) => ({
    display: pageNumber < 9 ? "none" : "unset",
    backgroundColor: "#1976d245",
    position: "absolute",
    top: "50%",
    zIndex: 2,
    left: "-4%",
    "&:hover": {
      backgroundColor: "#191ed2cf",
      color: "white",
    },
    [theme.breakpoints.only("xs")]: {
      position: "fixed",
      left: "0px",
    },
  }));
  const ToTheRightButton = styled(IconButton)(({ theme }) => ({
    display: recipeInfo.length < 10 ? "none" : "unset",
    backgroundColor: "#1976d245",
    position: "absolute",
    top: "50%",
    zIndex: 2,
    right: "-4%",
    "&:hover": {
      backgroundColor: "#191ed2cf",
      color: "white",
    },
    [theme.breakpoints.only("xs")]: {
      position: "fixed",
      right: "-3px",
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);
  return (
    <Paper
      sx={{
        m: 1,
        maxWidth: "1250px",
        ml: "auto",
        mr: "auto",
        position: "relative",
      }}
    >
      <Grid container justifyContent={{ xs: "unset", md: "center" }}>
        <Grid display={{ xs: "none", md: "block" }} item>
          {!(isHistory || isFavourite) && (
            <HaveChosenInfo сlientSettings={сlientSettings} />
          )}
        </Grid>
        <Grid
          item
          width={{ xs: "100%", md: "75%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
            sx={{ pt: 2 }}
          >
            {!isHistory && !isFavourite && (
              <Typography sx={titleTextStyle} variant="h3">
                Recipe book
              </Typography>
            )}
            {isHistory && (
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography sx={titleTextStyle} variant="h3">
                  Your story
                </Typography>
                <Typography sx={titleTextStyle} variant="h3">
                  last 10
                </Typography>
              </Grid>
            )}
            {isFavourite && (
              <Typography sx={titleTextStyle} variant="h3">
                Your favourite list
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sx={{ position: "relative" }}>
            {!isHistory && !isFavourite && (
              <ToTheLeftButton
                color="info"
                onClick={async () => {
                  await flipRecipePage(-10, flipPageParam);
                }}
                aria-label="reply"
                size="large"
              >
                <KeyboardDoubleArrowLeftIcon fontSize="large" />
              </ToTheLeftButton>
            )}
            {!isHistory && !isFavourite && (
              <ToTheRightButton
                color="info"
                onClick={async () => {
                  await flipRecipePage(10, flipPageParam);
                }}
                aria-label="reply"
                size="large"
              >
                <KeyboardDoubleArrowRightIcon fontSize="large" />
              </ToTheRightButton>
            )}
            {isLoading ? (
              <>
                {recipeInfo.length ? (
                  <RecipesConteiner recipeInfo={recipeInfo} />
                ) : (
                  <SorryUnfoundPage />
                )}
              </>
            ) : (
              <CustomSpinner />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
