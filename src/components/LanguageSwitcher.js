import React from "react";
import { withNamespaces } from "react-i18next";
import i18n from "../i18n";

function LanguageSwitcher({ t }) {
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher d-flex justify-content-center">
      <div className="d-flex m-2" onClick={() => changeLanguage("de")}>
        <h6>DE</h6>
      </div>
      <div className="d-flex m-2" onClick={() => changeLanguage("en")}>
        <h6>EN</h6>
      </div>
      <div className="d-flex m-2" onClick={() => changeLanguage("swe")}>
        <h6>SWE</h6>
      </div>
      <div className="d-flex m-2" onClick={() => changeLanguage("it")}>
        <h6>IT</h6>
      </div>
      <div className="d-flex m-2" onClick={() => changeLanguage("fr")}>
        <h6>FR</h6>
      </div>
    </div>
  );
}

export default withNamespaces()(LanguageSwitcher);
