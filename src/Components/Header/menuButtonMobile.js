import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
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
  const useStyles = makeStyles((theme) => {
    return {
      navButton: {
        color: openMenu ? "#415869 !important" : "#597084 !important",
        textTransform: "capitalize !important",
        marginBottom: "0.6rem !important",
        
      },
      dropDownMenu: {
        background: "#EFEFF1",
        // padding: "1rem 2rem !important",
        width: "80vw",
        padding: "1rem 0",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
      },
    };
  });
  const styles = useStyles();
  const toggleState = () => {
    setOpenMenu((prev) => {
      return !prev;
    });
  };
  const upIcon = <img src="./images/icon-arrow-dark.svg" />;
  const downIcon = (
    <img
      src="./images/icon-arrow-dark.svg"
      style={{ transform: "rotate(180deg)" }}
    />
  );
  return (
    <>
      <Button
        className={styles.navButton}
        endIcon={openMenu ? downIcon : upIcon}
        onClick={toggleState}
      >
        {item["heading"]}
      </Button>
      {openMenu && (
        <div className={styles.dropDownMenu}>
          {item["listItems"].map((listItem) => (
            <Button className={styles.navButton} align="center">
              {listItem}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};
export default MenuButtonMobile;
