import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    flexContainer: {
      overflowX: "clip !important",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-evenly !important",
      position: "relative",
      maxHeight: "100vw",
      maxWidth: "100vw !important",
      [theme.breakpoints.down("sm")]: {
        margin: "14rem 0 !important",
        flexDirection: "column !important",
        justifyContent: "space-evenly !important",
      },
    },
    backdrop: {
      position: "absolute",
      overflowX: "hidden !important",
      top: "40",
      width: "100vw !important",
      background: "hsl(237, 17%, 21%)",
      minHeight: "50vh !important",
      zIndex: "-1 !important",
      borderRadius: "0 4rem 0 4rem !important",
      backgroundImage: "url(./images/bg-pattern-circles.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "40%",
      backgroundPosition: "left 120% !important",
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "100%",
        backgroundPosition: "center -30% !important",
        height: "130vh !important",
        top: "-1000",
        // minHeight: "100vh !important",
      },
    },
    textContainer: {
      padding: "10rem",
      [theme.breakpoints.down("sm")]: {
        padding: "4rem",
        // width: "100vw !important",
      },
    },
    imageContainer: {
      padding: "0rem 4rem",
      [theme.breakpoints.down("sm")]: {
        padding: "0rem 0rem",
      },
    },
    image: {
      [theme.breakpoints.down("sm")]: {
        height: "377px !important",
      },
    },
    Typography: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center !important",
      },
    },
  };
});
const StyledContent = () => {
  const styles = useStyles();
  return (
    <Box className={[styles.flexContainer]}>
      <div className={[styles.imageContainer]}>
        <img
          className={[styles.image]}
          src="./images/illustration-phones.svg"
          alt=""
        />
      </div>
      <div className={[styles.textContainer]}>
        <Typography
          variant="h4"
          className={[
            "font-secondary",
            "font-white",
            "text-bold-600",
            styles.Typography,
          ]}
          gutterBottom
        >
          State of the Art Infrastructure
        </Typography>
        <Typography
          variant="body1"
          className={["font-secondary", "font-white", styles.Typography]}
        >
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </Typography>
      </div>
      <div className={[styles.backdrop]}></div>
    </Box>
  );
};
export default StyledContent;
