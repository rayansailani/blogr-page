import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    flexContainer: {
      overflowX: "clip",
      marginTop: "28px !important",
      display: "flex !important",
      flexDirection: "column !important",
      alignItems: "center !important",
      justifyContent: "center !important",
    },
    imageContainer: {
      objectFit: "contain",
    },
    textContainer: {
      padding: "1rem 1.2rem !important",
    },
  };
});
const ContentWithImageMobile = ({ info, className }) => {
  const styles = useStyles();
  return (
    <Box className={[className, styles.flexContainer]}>
      <div className={[styles.imageContainer]}>
        <img height="300" src={`${info["imgURL"]}mobile.svg`} />
      </div>
      <div className={[styles.textContainer]}>
        <Typography
          align="center"
          guttterBottom
          variant="h5"
          className={["font-secondary", "very-dark-blue", "text-bold-600"]}
          sx={{ marginBottom: "1rem !important" }}
        >
          {info.heading1}
        </Typography>
        <Typography
          align="center"
          guttterBottom
          variant="body1"
          sx={{ marginBottom: "3rem !important" }}
          className={[
            "very-dark-grayish-blue",
            "font-secondary",
            "text-bold-300",
          ]}
        >
          {info.content1}
        </Typography>
        <Typography
          align="center"
          guttterBottom
          variant="h5"
          className={["font-secondary", "very-dark-blue", "text-bold-600"]}
          sx={{ marginBottom: "1rem !important" }}
        >
          {info.heading2}
        </Typography>
        <Typography
          align="center"
          guttterBottom
          variant="body1"
          className={[
            "very-dark-grayish-blue",
            "font-secondary",
            "text-bold-300",
          ]}
        >
          {info.content2}
        </Typography>
      </div>
    </Box>
  );
};
export default ContentWithImageMobile;
