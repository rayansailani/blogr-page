import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-evenly !important",
      position: "relative",
      // backgroundImage: "url(./images/bg-pattern-circles.svg)",
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "40%",
      // backgroundPosition: "left 750%  !important",
    },
    backdrop: {
      position: "absolute",
      top: "40",
      width: "100%",
      background: "hsl(237, 17%, 21%)",
      height: "50vh !important",
      zIndex: "-1 !important",
      borderRadius: "0 4rem 0 4rem !important",
      backgroundImage: "url(./images/bg-pattern-circles.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "40%",
      backgroundPosition: "left 120% !important",
    },
    textContainer: {
      padding: "10rem",
    },
    imageContainer: {
      padding: "0rem 4rem",
    },
  };
});
const StyledContent = () => {
  const styles = useStyles();
  return (
    <Box className={[styles.flexContainer]}>
      <div className={[styles.imageContainer]}>
        <img src="./images/illustration-phones.svg" alt="" />
      </div>
      <div className={[styles.textContainer]}>
        <Typography
          variant="h4"
          className={["font-secondary", "font-white", "text-bold-600"]}
          gutterBottom
        >
          State of the Art Infrastructure
        </Typography>
        <Typography
          variant="body1"
          className={["font-secondary", "font-white"]}
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
