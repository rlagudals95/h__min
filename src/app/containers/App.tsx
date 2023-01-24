import * as React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { stylesheet } from "typestyle";
import { config as appConfig } from "../../../config";
import { setupCss } from "../helpers/setupCss";
import { HomePage } from "../pages/HomePage";

setupCss();

const classNames = stylesheet({
  container: {
    margin: 0,
    padding: 0,
    textAlign: "center"
  }
});

export const App = () => {
  return (
    <section className={classNames.container}>
      <Helmet {...appConfig.app.head} />
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
};

