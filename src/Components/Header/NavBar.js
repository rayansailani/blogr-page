import React from "react";
import { Typography, Box, AppBar, Toolbar, Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavItemsMobile from "./NavItemsMobile";
import NavItems from "./NavItems";
const useStyles = makeStyles((theme) => {
  return {
    desktopViewOnly: {
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
    appBar: {
      background: "transparent !important",
      padding: "2rem 4rem !important",
      [theme.breakpoints.down("md")]: {
        padding: "2rem 1rem !important",
      },
    },
    mobileViewOnly: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },
  };
});
const NavBar = () => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.appBar} elevation={0}>
      <Toolbar>
        <img src="./images/logo.svg" alt="" style={{ marginRight: 40 }} />
        <NavItems className={styles.desktopViewOnly} />
        <NavItemsMobile className={styles.mobileViewOnly} />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
