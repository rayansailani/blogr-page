import React, { useState } from "react";

import {
  Container,
  IconButton,
  Box,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
const NavItemsMobile = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      {/* <Menu
        elevation={0}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          position: "absolute",
          top: "60px",
          left: "0px",
          padding: "4rem !important",
          width: "200px !important",
        }}
      >
        <MenuItem onClick={handleClose}>123</MenuItem>
        <MenuItem onClick={handleClose}>123</MenuItem>
        <MenuItem onClick={handleClose}>123</MenuItem>
      </Menu> */}
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
      >
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MenuItem onClick={handleClose}>123</MenuItem>
          <MenuItem onClick={handleClose}>123</MenuItem>
          <MenuItem onClick={handleClose}>123</MenuItem>
        </Box>
      </Popover>
    </Container>
  );
};
export default NavItemsMobile;
