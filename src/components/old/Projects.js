import React from "react";
import matchedIcon from "../icons/matched_icon.png";
import moneylogIcon from "../icons/moneylog_icon.ico";
import noteableIcon from "../icons/noteable_icon.png";
import splashxIcon from "../icons/splashx_icon.svg";
import tomasoleoniIcon from "../icons/tomasoleoni.svg";
import ContactGridElement from "./ContactGridElement";
import { withNamespaces } from "react-i18next";

function Projects({ t }) {
  return (
    <div className="card m-3">
      <div
        className="card-header text-container pointer"
        id="headingThree"
        data-toggle="collapse"
        data-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        <h5 className="mb-0">
          <button className="btn collapsed">{t("projectsTitle")}</button>
        </h5>
      </div>
      <div
        id="collapseThree"
        className="collapse text-container"
        aria-labelledby="headingThree"
        data-parent="#accordion"
      >
        <div className="card-body text-justify text-container">
          <div className="row text-center justify-content-center">
            <ContactGridElement
              icon={noteableIcon}
              content="noteable - A note taking app for iOS and Android made with Flutter, the framework I learned for a school project during my second year at the IMS."
              contentSize="4"
              url="https://github.com/TommyLeoni/noteable_public"
            ></ContactGridElement>
            <ContactGridElement
              icon={moneylogIcon}
              content="moneylog - A WPF based personal finance management tool built in my 4th Semester at the IMS (School for Information Technology of Bern)"
              contentSize="4"
              url="https://github.com/TommyLeoni/moneylog"
            ></ContactGridElement>
          </div>
          <div className="row justify-content-center text-center">
            <ContactGridElement
              icon={matchedIcon}
              content="MatchEd - A platform designed for academics: Share your interests and find people to collaborate with. Built on Node & React JS"
              contentSize="4"
              url="https://github.com/TommyLeoni/MatchEd-Frontend"
            ></ContactGridElement>
            <ContactGridElement
              icon={splashxIcon}
              content="SplashX - The app that gives you all necessary information about the swimming pools in your area, built on Java within Android Studio"
              contentSize="4"
              url="https://github.com/TommyLeoni/splashx"
            ></ContactGridElement>
          </div>
          <div className="row justify-content-center justify-content-sm-start text-left">
            <ContactGridElement
              icon={tomasoleoniIcon}
              contentSize="4"
              url="https://github.com/TommyLeoni/portfolio"
              content="My portfolio - the website you are currently looking at! I built this page on React JS with the goal of having a go-to address to get all the necessary information on me"
            ></ContactGridElement>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(Projects);
