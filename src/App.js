import React, { useEffect } from "react";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./globalStyles";

export default function App() {
  useEffect(() => {
    document.title = "Portfolio";
  });

  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
}
