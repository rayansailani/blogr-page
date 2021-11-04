import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    footerContainer: {
      background: "hsl(240, 10%, 16%)",
      marginTop: "20vh",
      borderRadius: "0 2rem 0 0",
    },
    footerInside: {
      padding: "3rem 0 !important",
    },
    footerMobile: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    headingText: {
      marginBottom: "2rem !important",
      fontWeight: "600",
      marginLeft: "14px !important",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px !imporrtant",
      },
    },
  };
});

const Footer = () => {
  const styles = useStyles();
  const navItems = [
    {
      heading: "Product",
      listItems: ["Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      heading: "Company",
      listItems: ["About", "Team", "Blog", "Careers"],
    },
    {
      heading: "Connect",
      listItems: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  return (
    <Container maxWidth="xl" className={styles.footerContainer}>
      <Container sx={{ padding: "4rem 0" }}>
        <Grid container spacing={10}>
          <Grid item md={3} xs={12}>
            <Typography align="center">
              {" "}
              <img src="./images/logo.svg" alt="" />
            </Typography>
          </Grid>
          {navItems.map((item) => {
            return (
              <Grid item md={3} xs={12}>
                <Box
                  //   display="flex"
                  //   flexDirection="column"
                  //   justifyContent="center"
                  //   alignItems="left"
                  className={styles.footerMobile}
                >
                  <Typography
                    variant="body1"
                    sx={{}}
                    className={["font-white", styles.headingText]}
                  >
                    {item["heading"]}
                  </Typography>
                  {item["listItems"].map((listItem) => (
                    <Button
                      className={["font-white"]}
                      variant="body2"
                      sx={{
                        textTransform: "none",
                        display: "block !important",
                      }}
                    >
                      {listItem}
                    </Button>
                  ))}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};
export default Footer;
