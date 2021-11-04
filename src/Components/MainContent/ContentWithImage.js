import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    flexContainer: {
      overflowX: "clip !important",
      position: "relative !important",
      margin: "-24px !important",
      minHeight: "50vh !important",
      maxWidth: "100vw !important",
      display: "flex",
      flexDirection: "column !important",
      alignItems: "flex-start !important",
      justifyContent: "flex-end !important",
      padding: "100px 0px !important",
    },
    imageContainer: {
      position: "absolute",
      top: "5rem",
      right: (props) => {
        return props.align === "left" ? "-10vw !important" : "70vw !important";
      },
    },
    textContainer: {
      marginTop: "48px !important",
      marginLeft: (props) => {
        return props.align === "left" ? "10vw !important" : "50vw !important";
      },
    },
    [theme.breakpoints.down("md")]: {
      flexContainer: {
        flexDirection: "column-reverse !important",
      },
      imageContainer: {
        position: "relative !important",
        display: "block !important",
      },
    },
    [theme.breakpoints.up("xl")]: {},
  };
});

const ContentWithImage = (props) => {
  console.log(props);
  const styles = useStyles(props);
  return (
    <Box className={[styles.flexContainer, props.className]}>
      <Grid container spacing={10}>
        <Grid item md={5} className={[styles.textContainer]}>
          <Typography
            guttterBottom
            variant="h5"
            className={["font-secondary", "very-dark-blue", "text-bold-600"]}
            sx={{ marginBottom: "1rem !important" }}
          >
            {props.info.heading1}
          </Typography>
          <Typography
            guttterBottom
            variant="body1"
            sx={{ marginBottom: "3rem !important" }}
            className={[
              "very-dark-grayish-blue",
              "font-secondary",
              "text-bold-300",
            ]}
          >
            {props.info.content1}
          </Typography>
          <Typography
            guttterBottom
            variant="h5"
            className={["font-secondary", "very-dark-blue", "text-bold-600"]}
            sx={{ marginBottom: "1rem !important" }}
          >
            {props.info.heading2}
          </Typography>
          <Typography
            guttterBottom
            variant="body1"
            className={[
              "very-dark-grayish-blue",
              "font-secondary",
              "text-bold-300",
            ]}
          >
            {props.info.content2}
          </Typography>
        </Grid>
      </Grid>
      <div className={styles.imageContainer}>
        <img height="537" src={`${props.info["imgURL"]}desktop.svg`} />
      </div>
    </Box>
  );
};
export default ContentWithImage;
