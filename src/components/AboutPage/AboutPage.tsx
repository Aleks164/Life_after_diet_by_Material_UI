import {
  Box,
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import leo from "@/assets/leo.png";

const theme = createTheme();
theme.typography.overline = {
  fontSize: "28px",
};

export const AboutPage = () => (
  <Paper
    sx={{
      marginTop: "30px",
      maxWidth: "1050px",
      marginRight: "auto",
      marginLeft: "auto",
    }}
    elevation={3}
  >
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item>
        <Box
          component="img"
          sx={{
            width: "150px",
            height: "175px",
            marginTop: "40px",
            marginLeft: "55px",
          }}
          alt={"leo"}
          src={leo}
        />
      </Grid>
      <Grid
        item
        sx={{
          marginTop: "35px",
          marginLeft: "25px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4">Web-site "Life after diet..."</Typography>
        </ThemeProvider>
        <Box sx={{ marginTop: "35px" }}>
          <Typography fontSize={25}>You can find me by:</Typography>

          <a href="mailto:alekseyleha@mail.ru" rel="noreferrer" target="_blank">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box
                component="img"
                sx={{
                  width: "25px",
                  height: "25px",
                  verticalAlign: "middle",
                  marginRight: "5px",
                }}
                alt={"mail"}
                src={
                  "https://webstockreview.net/images250_/email-clipart-mail-icon.png"
                }
              />
              <Typography fontSize={25}>alekseyleha@mail.ru</Typography>
            </Grid>
          </a>
          <a
            title="https://github.com/Aleks164"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Aleks164"
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box
                component="img"
                sx={{
                  width: "45px",
                  height: "45px",
                  verticalAlign: "middle",
                  marginLeft: "-10px",
                }}
                alt={"github"}
                src={
                  "https://www.comparasoftware.com/wp-content/uploads/2018/09/logoGitHub-150x150.png"
                }
              />
              <Typography fontSize={25}>Aleks164</Typography>
            </Grid>
          </a>
        </Box>
      </Grid>
    </Grid>
    <Typography fontSize={20} sx={{ p: 3 }}>
      The application implements:
      <br />
      - client routing;
      <br />
      - remote storage - Firebase Realtime Database;
      <br />
      - supports authentification with login-password and Google
      authentification
      <br />- a parameterized link that you can save and return to at any time
      to see a specific recipe
      <a
        title="https://aleks164.github.io/Life_after_diet/recipe/638822"
        target="_blank"
        rel="noreferrer"
        href="https://aleks164.github.io/Life_after_diet/recipe/638822"
      >
        {" Examle "}
      </a>
      <br />
      The application is written in React with TS and Material UI.
      <br />
      Сonfigured Continuous Integration and Continuous Delivery (CI/CD).
      <br />
      More information on
      <a
        title="https://github.com/Aleks164/Life_after_diet/tree/diet_App"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Aleks164/Life_after_diet/tree/diet_App"
      >
        {" GitHubRepo"}
      </a>
    </Typography>
  </Paper>
);
