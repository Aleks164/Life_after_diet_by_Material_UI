import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Home, History, Favorite, Info } from "@mui/icons-material";
import { LogOutLink } from "../LogOutLink/LogOutLink";
import { RoutesName } from "../../utils/routes";
import { AuthLink } from "../AuthLink/AuthLink";
import { HeaderParamType } from "../../types/types";

export const Header = ({
  isAuth,
  isSignUpPage,
  isLoginPage,
}: HeaderParamType) => (
  <Grid
    sx={{ flexGrow: 1 }}
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <AppBar position="sticky">
      <Toolbar>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{
              ml: 2,
              fontFamily: "cursive",
              color: "#edefff",
              textShadow: "#3d3d3e 3px 0px 1px",
              fontWeight: "900",
            }}
          >
            {"Life after diet..."}
          </Typography>
        </Grid>
        <Grid item xs={8} md={5}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Link title="Home" color="inherit" to={RoutesName.HOME_PAGE_ROUTE}>
              <IconButton sx={{ color: "rgb(255 255 255 / 85%)" }}>
                <Home fontSize="large" />
              </IconButton>
            </Link>
            {isAuth && (
              <>
                <Link
                  title="History"
                  color="inherit"
                  to={RoutesName.HISTORY_ROUTE}
                >
                  <IconButton sx={{ color: "rgb(255 255 255 / 85%)" }}>
                    <History fontSize="large" />
                  </IconButton>
                </Link>
                <Link
                  title="Favorite"
                  color="inherit"
                  to={RoutesName.FAVOURITE_ROUTE}
                >
                  <IconButton sx={{ color: "rgb(255 255 255 / 85%)" }}>
                    <Favorite fontSize="large" />
                  </IconButton>
                </Link>
              </>
            )}
            <Link title="About" color="inherit" to={RoutesName.ABOUT_ROUTE}>
              <IconButton sx={{ color: "rgb(255 255 255 / 85%)" }}>
                <Info fontSize="large" />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={4} md={3}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            {!isAuth ? (
              <>
                {!isLoginPage && (
                  <AuthLink to={RoutesName.LOGIN_ROUTE} type="Log In" />
                )}
                {!isSignUpPage && (
                  <AuthLink to={RoutesName.SIGNUP_ROUTE} type="Sign Up" />
                )}
              </>
            ) : (
              <LogOutLink />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    {isAuth && (
      <Typography
        variant="h5"
        sx={{
          fontFamily: "cursive",
          color: "#edefff",
          textShadow: "#3d3d3e 3px 0px 1px",
          fontWeight: "900",
          m: 0,
          ml: "auto",
          p: 0,
          pr: 1,
        }}
      >
        {isAuth}
      </Typography>
    )}
  </Grid>
);
