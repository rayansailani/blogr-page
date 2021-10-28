import React, { useState } from "react";

import {
  Container,
  IconButton,
  Box,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import MenuButtonMobile from "./menuButtonMobile";
const NavItemsMobile = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
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
        <img src="./images/icon-hamburger.svg" alt="" />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 100, left: 0 }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          padding: 0,
        }}
      >
        <Box
          sx={{
            width: "89vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem !important",
          }}
        >
          {navItems.map((navItem) => (
            <MenuButtonMobile item={navItem} />
          ))}
          {/* <MenuButtonMobile /> */}
        </Box>
      </Popover>
    </Container>
  );
};
export default NavItemsMobile;
