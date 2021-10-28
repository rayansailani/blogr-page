import React, { useState } from "react";
import {
  Typography,
  Menu,
  MenuItem,
  Container,
  Box,
  Button,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuButton from "./menuButton";
const useStyles = makeStyles((theme) => {
  return {
    navItem: {
      color: "white !important",
      marginRight: "30px !important",
    },
    dropDownCommon: {
      display: "none",
    },
    loginButton: {
      color: "hsl(356, 100%, 66%)  !important",
      padding: "0.6rem 2rem !important",
      background: "white !important",
      borderRadius: "20px !important",
      border: "none !important",
      textTransform: "capitalize !important",
    },
  };
});
const NavItems = ({ className }) => {
  const styles = useStyles();
  const navItems = [
    {
      heading: "Product",
      listItems: ["Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      heading: "Company",
      listItems: ["About", "Team", "Blog", "Careers"],
    },
    {
      heading: "Connect",
      listItems: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  return (
    <Container className={className} maxWidth="xl" sx={{ display: "flex" }}>
      <Box display="flex" flexDirection="row" sx={{ flexGrow: 1 }}>
        {navItems.map((navItem) => {
          return <MenuButton menuItem={navItem} />;
        })}
      </Box>

      <Box display="flex" flexDirection="row">
        <Button sx={{ mr: 2, color: "white", textTransform: "capitalize" }}>
          Login
        </Button>
        <Button variant="outlined" className={styles.loginButton}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default NavItems;
