import React from "react";
import { Typography, Box, AppBar, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
const useStyles = makeStyles((theme) => {
  return {
    header: {
      minHeight: "80vh",
      background:
        "linear-gradient(to right, rgba(255,143,112, 0.9), rgba(255, 61, 84, 1)), url(./images/bg-pattern-intro.svg)",
      borderRadius: "0 0 0 8rem",
      position: "relative",
      backgroundPosition: "left",
      backgroundSize: "175rem",
      backgroundRepeat: "no-repeat",
      objectFit: "cover",
      [theme.breakpoints.down("md")]: {
        backgroundSize: "80rem !important",
        backgroundPosition: "20% center  !important",
      },
    },
  };
});
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <NavBar />
    </Box>
  );
};
export default Header;
// public\images\bg-pattern-intro.svg
