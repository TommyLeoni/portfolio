import React from "react";
import ContactGridElement from "./ContactGridElement";
import noteableIcon from "../icons/noteable_icon.png";
import moneylogIcon from "../icons/moneylog_icon.ico";
import matchedIcon from "../icons/matched_icon.png";
import splashxIcon from "../icons/splashx_icon.svg";


export default class Projects extends React.Component {
  render() {
    return (
      <div className="card m-3">
        <div className="card-header text-container" id="headingThree">
          <h5 className="mb-0">
            <button
              className="btn collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Projects
            </button>
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
                content="noteable - A note taking app for iOS and Android"
                contentSize="5"
                url="https://github.com/TommyLeoni/noteable_public"
              ></ContactGridElement>
              <ContactGridElement
                icon={moneylogIcon}
                content="moneylog - A WPF based personal finance management tool"
                contentSize="5"
                url="https://github.com/TommyLeoni/moneylog"
              ></ContactGridElement>
            </div>
            <div className="row justify-content-center text-center">
              <ContactGridElement
                icon={matchedIcon}
                center="true"
                content="MatchEd - A platform designed for academics: Share your interests and find people to collaborate with"
                contentSize="5"
                url="https://github.com/TommyLeoni/MatchEd-Frontend"
              ></ContactGridElement>
              <ContactGridElement
                icon={splashxIcon}
                center="true"
                content="SplashX - The app that gives you all necessary information about the swimming pools in your area"
                contentSize="5"
                url="https://github.com/TommyLeoni/splashx"
              ></ContactGridElement>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
