import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContentWithImage from "./ContentWithImage";
import ContentWithImageMobile from "./ContentWithImageMobile";
const useStyles = makeStyles((theme) => {
  return {
    mainContentDesktop: {
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
    mobileContent: {
      display: "none !important",
      [theme.breakpoints.down("md")]: {
        display: "block !important",
      },
    },
  };
});

const MainContent = () => {
  const styles = useStyles();
  const contentInfo = [
    {
      imgURL: `./images/illustration-editor-`,
      heading1: "Introducing an extensible editor",
      content1: `Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
    change the looks of a blog.`,
      heading2: "Robust content management",
      content2: `Flexible content management enables users to easily move through posts. Increase the usability of your blog 
      by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.`,
    },
    {
      imgURL: `./images/illustration-laptop-`,
      heading1: "Free, open, simple",
      content1: `Blogr is a free and open source application backed by a large community of helpful developers. It supports 
      features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
      and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
    `,
      heading2: "Powerful tooling",
      content2: `Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
      capable of producing even the most complicated sites.
    `,
    },
  ];
  return (
    <div maxWidth="xl" sx={{ margin: "0", padding: "0", width: "100vw" }}>
      <Typography
        variant="h4"
        className={["font-secondary", "text-bold-600", "very-dark-blue"]}
        align="center"
        sx={{ marginTop: "5rem" }}
      >
        Designed for the future
      </Typography>
      <ContentWithImage
        info={contentInfo[0]}
        align="left"
        className={styles.mainContentDesktop}
      />
      <ContentWithImageMobile
        info={contentInfo[0]}
        className={styles.mobileContent}
      />
      <ContentWithImage
        info={contentInfo[1]}
        align="right"
        className={styles.mainContentDesktop}
      />
      <ContentWithImageMobile
        info={contentInfo[1]}
        className={styles.mobileContent}
      />
    </div>
  );
};
export default MainContent;
