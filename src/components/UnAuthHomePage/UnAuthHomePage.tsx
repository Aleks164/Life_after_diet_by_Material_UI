import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom/";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { authBenefits, caruselScreens } from "@/utils/authBenefits";
import { CaruselItem } from "./CaruselItem";
import { RoutesName } from "@/utils/routes";

export const UnAuthHomePage = () => (
  <Box
    sx={{
      m: 2,
      mt: 10,
      maxWidth: "960px",
      ml: "auto",
      mr: "auto",
      position: "relative",
    }}
  >
    <Typography
      variant="h3"
      fontSize={{ xs: "2rem", md: "3rem" }}
      sx={{
        fontWeight: "900",
        color: "white",
        textShadow: "2px 3px 3px #04213e",
        position: "absolute",
        top: "-25px",
        left: "25px",
        margin: 0,
        zIndex: "10",
      }}
    >
      <Link to={RoutesName.LOGIN_ROUTE}>Log in</Link> and you will be able to
    </Typography>
    <Carousel
      autoPlay={true}
      stopAutoPlayOnHover={true}
      animation="slide"
      duration={800}
      indicatorIconButtonProps={{
        style: {
          padding: "10px",
        },
      }}
      NextIcon={<KeyboardDoubleArrowRightIcon fontSize="large" color="info" />}
      PrevIcon={<KeyboardDoubleArrowLeftIcon fontSize="large" color="info" />}
      IndicatorIcon={<FitScreenIcon fontSize="large" />}
    >
      {authBenefits.map((_, index) => (
        <CaruselItem key={index} index={index} path={caruselScreens[index]} />
      ))}
    </Carousel>
  </Box>
);
