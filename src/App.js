import React from "react";
import HttpsRedirect from "react-https-redirect";

import MainPage from "./pages/MainPage";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <>
      <HttpsRedirect>
        <GlobalStyle />
        <MainPage />
      </HttpsRedirect>
    </>
  );
}
