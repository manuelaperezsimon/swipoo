import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import FormPage from "../../pages/FormPage/FormPage";
import styledMainTheme from "../../styledMainTheme";
import Header from "../Header/Header";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route path="/" element={<Navigate to="/search-models" />} />
        <Route
          path="/search-models"
          element={
            <>
              <Header />
              <FormPage />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
