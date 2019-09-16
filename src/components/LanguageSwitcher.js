import i18n from "../i18n";
import React from "react";

export default class LanguageSwitcher extends React.Component {
  changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  render() {
    return (
      <div className="language-switcher d-flex justify-content-center">
        <div className="d-flex m-2" onClick={() => this.changeLanguage("de")}>
          <h6>DE</h6>
        </div>
        <div className="d-flex m-2" onClick={() => this.changeLanguage("en")}>
          <h6>EN</h6>
        </div>
        <div className="d-flex m-2" onClick={() => this.changeLanguage("it")}>
          <h6>IT</h6>
        </div>
        <div className="d-flex m-2" onClick={() => this.changeLanguage("fr")}>
          <h6>FR</h6>
        </div>
        <div className="d-flex m-2" onClick={() => this.changeLanguage("swe")}>
          <h6>SWE</h6>
        </div>
      </div>
    );
  }
}
