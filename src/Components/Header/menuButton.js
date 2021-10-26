import React, { useState } from "react";
import {
  Typography,
  Menu,
  MenuItem,
  Container,
  Box,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => {
  return {
    navItem: {
      color: "white !important",
      marginRight: "30px !important",
    },

    dropDownCommon: {
      display: "none",
    },
  };
});
const MenuButton = ({ menuItem }) => {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const downIcon = <img src="./images/icon-arrow-light.svg" />;
  const upIcon = (
    <img
      src="./images/icon-arrow-light.svg"
      style={{ transform: "rotate(180deg)" }}
    />
  );
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.navItem}
        endIcon={open ? upIcon : downIcon}
      >
        {menuItem["heading"]}
      </Button>
      <Menu
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
          top: "40px",
          padding: "4rem !important",
        }}
      >
        {menuItem["listItems"].map((listItem) => {
          return <MenuItem onClick={handleClose}>{listItem}</MenuItem>;
        })}
      </Menu>
    </div>
  );
};
export default MenuButton;
