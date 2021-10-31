import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StyledButton from "./StyledButton";
const useStyles = makeStyles((theme) => {
  return {
    flexContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: "50vh",
    },
    mainHeading: {
      color: "white",
      marginBottom: "1.2rem",
      fontWeight: "600 !important",
      [theme.breakpoints.down("md")]: {
        padding: "0rem 1.2rem",
        fontSize: "2.6rem !important",
      },
    },
    subtitle: {
      color: "white",
      [theme.breakpoints.down("md")]: {
        padding: "0rem 1rem",
        fontSize: "1.4rem !important",
      },
    },
  };
});
const Banner = () => {
  const styles = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <Typography
        variant="h2"
        align="center"
        // className={`${styles.mainHeading} font-secondary`}
        className={[styles.mainHeading, "font-secondary"]}
        gutterBottom
      >
        A modern publishing platform
      </Typography>
      <Typography
        variant="body1"
        className={`${styles.subtitle}`}
        sx={{ marginBottom: "2rem" }}
        align="center"
      >
        Grow your audience and build your online brand
      </Typography>
      <div>
        <StyledButton margins type="whiteBg">
          Start for Free
        </StyledButton>
        <StyledButton type="redBg">Learn More</StyledButton>
      </div>
    </Box>
  );
};
export default Banner;
