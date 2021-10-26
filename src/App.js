import React from "react";
import { Typography } from "@mui/material";
import Header from "./Components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};
export default App;
