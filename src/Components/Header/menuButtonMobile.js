import React, { useState } from "react";

import {
  Container,
  IconButton,
  Box,
  MenuItem,
  Popover,
  Typography,
  Button,
} from "@mui/material";

const MenuButtonMobile = ({ item }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleState = () => {
    setOpenMenu((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <Button onClick={toggleState}>{item["heading"]}</Button>
      {openMenu && (
        <div>
          {item["listItems"].map((listItem) => (
            <Typography align="center">{listItem}</Typography>
          ))}
        </div>
      )}
    </>
  );
};
export default MenuButtonMobile;
