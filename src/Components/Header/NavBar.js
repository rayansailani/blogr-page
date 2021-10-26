import React from "react";
import { Typography, Box, AppBar, Toolbar, Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavItems from "./NavItems";
const useStyles = makeStyles((theme) => {
  return {};
});
const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", padding: "2rem 4rem" }}
      elevation={0}
    >
      <Toolbar>
        <img src="./images/logo.svg" alt="" style={{ marginRight: 40 }} />
        <NavItems />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
