import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Container,
  IconButton,
  Box,
  MenuItem,
  Popover,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import MenuButtonMobile from "./menuButtonMobile";

const useStyles = makeStyles((theme) => {
  return {
    boxContainer: {
      width: "80vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center !important",
      padding: "1rem !important",
    },
    loginButton: {
      color: "white !important",
      padding: "0.6rem 2rem !important",
      background:
        "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
      borderRadius: "20px !important",
      border: "none !important",
      textTransform: "capitalize !important",
    },
  };
});

const NavItemsMobile = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const styles = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
    <Container
      className={className}
      maxWidth="xl"
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "right",
        justifyContent: "flex-end",
        position: "relative !important",
        padding: 0,
        margin: 0,
      }}
    >
      <IconButton
        id="navpositioned-button"
        aria-controls="navpositioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {!open ? (
          <img src="./images/icon-hamburger.svg" alt="" />
        ) : (
          <img src="./images/icon-close.svg" alt="" />
        )}
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        elevation={4}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 100, left: 0 }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          padding: 0,
          overflow: "auto !important",
        }}
      >
        <Box className={styles.boxContainer}>
          {navItems.map((navItem) => (
            <MenuButtonMobile item={navItem} />
          ))}
        </Box>
        <Divider variant="middle" />
        <Box className={styles.boxContainer}>
          <Button sx={{ color: "#415869 !important" }}>Login</Button>
          <Button
            variant="outlined"
            className={styles.loginButton}
            // sx={{
            //   color: "white",
            //   background:
            //     "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
            //   borderRadius: "20px",
            // }}
          >
            Sign up
          </Button>
        </Box>
      </Popover>
    </Container>
  );
};
export default NavItemsMobile;
