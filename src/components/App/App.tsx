import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import FormPage from "../../pages/FormPage/FormPage";
import styledMainTheme from "../../styledMainTheme";
import Header from "../Header/Header";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CarsListPage from "../../pages/CarsListPage/CarsListPage";

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
        <Route path="/cars" element={<CarsListPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
