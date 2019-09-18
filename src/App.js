import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import { Trans, withNamespaces } from "react-i18next";
import "react-tiny-fab/dist/styles.css";
import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App({ t }) {
  
  t("codingSkills").forEach(element => {
    console.log(element);
  });

  return (
    <div className="App">
      <div className="row justify-content-center text-center h-100">
        <div className="col-sm-4 col-12 pr-0 float-left d-none d-md-block">
          <div className="img-left-col sticky-top"></div>
        </div>
        <div className="col-sm-4 col-12 pr-0 img-left-col-container d-sm-none">
          <div className="img-left-col"></div>
        </div>
        <div className="col-sm-8 col-11 px-0 my-sm-auto mt-3 landing">
          <div className="d-inline-block">
            <h1 className="greeting">
              <Trans>{t("title")}</Trans>
            </h1>
          </div>
          <div className="leading-text">
            <div className="row justify-content-center text-center landing">
              <div className="col-lg-8 col-11">
                <p className="mt-3 landing-text">
                  <Trans>
                    {t("leadingText")}
                  </Trans>
                </p>
              </div>
              <div className="col-lg-9 col-12">
                <div id="accordion">
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </div>
              </div>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(App);
