import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    whiteBg: {
      color: "hsl(356, 100%, 66%)  !important",
      padding: "0.6rem 2rem !important",
      background: "white !important",
      borderRadius: "20px !important",
      border: "none !important",
      textTransform: "capitalize !important",
    },
    redBg: {
      color: "white !important",
      padding: "0.6rem 2rem !important",
      background:
        "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
      borderRadius: "20px !important",
      border: "none !important",
      textTransform: "capitalize !important",
    },
    outlinedButton: {
      color: "white !important",
      padding: "0.6rem 2rem !important",
      borderRadius: "26px !important",
      // border: "none !important",
      borderColor: "white !important",
      textTransform: "capitalize !important",
      "&:hover": {
        borderColor: "white !important",
      },
    },
  };
});
const StyledButton = ({ children, type, margins }) => {
  const styles = useStyles();
  return (
    <Button
      sx={{ marginRight: margins ? "2rem" : "0rem" }}
      variant="outlined"
      className={
        type === "whiteBg"
          ? styles.whiteBg
          : type === "outlinedButton"
          ? styles.redBg
          : styles.outlinedButton
      }
    >
      {children}
    </Button>
  );
};
export default StyledButton;
