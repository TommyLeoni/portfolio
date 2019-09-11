import React from "react";
import emailIcon from "../icons/email.svg";
import ContactGridElement from "./ContactGridElement";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="card m-3">
        <div
          className="card-header text-container pointer"
          id="headingFour"
          data-toggle="collapse"
          data-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFuor"
        >
          <h5 className="mb-0">
            <button className="btn collapsed">Contact</button>
          </h5>
        </div>
        <div
          id="collapseFour"
          className="collapse text-container"
          aria-labelledby="headingFour"
          data-parent="#accordion"
        >
          <div className="card-body text-justify text-container">
            <div className="row text-left justify-content-center">
              <ContactGridElement
                icon={emailIcon}
                contentSize="4"
                mail="true"
                content="tomasoleoni@gmail.com"
              ></ContactGridElement>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
