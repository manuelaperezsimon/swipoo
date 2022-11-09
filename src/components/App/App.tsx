import React from "react";
import { ThemeProvider } from "styled-components";
import FormPage from "../../pages/FormPage";
import styledMainTheme from "../../utils/styledMainTheme";
import Header from "../Header/Header";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <div className="App">
        <Header />
        <FormPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
